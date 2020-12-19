/*
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-24 14:58:00
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-12-19 14:37:15
 */
import { asyncRoutes, constantRoutes } from '@/router'
import { getAuthMenu } from '@/api/user'
import Layout from '@/layout'
import { Message } from 'element-ui'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export const loadView = (view) => {
  return (resolve) => require([`@/views${view}`], resolve)
}

/**
 * 后台查询的菜单数据拼装成路由格式的数据
 * @param routes
 */
export function generaMenu(routes, data) {
  data.forEach(item => {
    const menu = {
      name: item.name,
      path: item.path,
      component: (!item.component) ? Layout : loadView(`${item.component}`),
      redirect: item.redirect,
      hidden: item.hidden || false,
      meta: (item.meta && (typeof item.meta === 'string')) ? JSON.parse(item.meta) : (item.meta || {}),
      children: []
    }

    if (item.children && (!item.is_external_link)) {
      generaMenu(menu.children, item.children)
    }

    routes.push(menu)
  })
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

export function menusSomefiter(data) {
  const obj = {}
  data = data.reduce((cur, next) => {
    obj[next.path] ? '' : obj[next.path] = true && cur.push(next)
    return cur
  }, [])
  return data
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    const res = menusSomefiter(routes)
    state.routes = constantRoutes.concat(res)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      const loadMenuData = []
      // 先查询后台并返回左侧菜单数据并把数据添加到路由
      getAuthMenu(state.token).then(response => {
        let data = response
        if (response.code === 20000) {
          data = response.data
          const resData = menusSomefiter(asyncRoutes)
          generaMenu(resData, Object.assign(loadMenuData, data))

          let accessedRoutes = []

          if (roles.includes('admin')) {
            accessedRoutes = resData || []
          } else {
            accessedRoutes = filterAsyncRoutes(resData, roles)
          }

          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        } else {
          Message.success({
            message: '菜单数据加载异常'
          })
        }
      }).catch(error => {
        console.log(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
