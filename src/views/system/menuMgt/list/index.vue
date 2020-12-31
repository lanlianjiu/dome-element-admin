
<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="菜单名称">
          <el-input v-model="searchForm.user" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchAction">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-action-body">
      <el-button type="primary" @click="handleAction()">
        新增
      </el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="child-table-expand">

            <el-form-item label="标签名称：">
              <span>{{ props.row.meta.title }}</span>
            </el-form-item>

            <el-form-item label="高亮路径：">
              <span>{{ props.row.meta.activeMenu }}</span>
            </el-form-item>

            <el-form-item label="菜单图标：">
              <span>{{ props.row.meta.icon }}</span>
            </el-form-item>

            <el-form-item label="显示根路由：">
              <span>{{ props.row.alwaysShow?'一直显示':'不显示' }}</span>
            </el-form-item>

            <el-form-item label="隐藏菜单：">
              <span>{{ props.row.hidden ?'隐藏':'显示' }}</span>
            </el-form-item>

            <el-form-item label="是否是外链：">
              <span>{{ props.row.is_external_link?'是':'不是' }}</span>
            </el-form-item>

            <el-form-item label="重定向路径：">
              <span>{{ props.row.redirect }}</span>
            </el-form-item>

            <el-form-item label="是否是固定标签：">
              <span>{{ props.row.meta.affix?'是':'不是' }}</span>
            </el-form-item>

            <el-form-item label="<keep-alive> 缓存：">
              <span>{{ props.row.meta.noCache?'缓存':'不缓存' }}</span>
            </el-form-item>

          </el-form>
        </template>
      </el-table-column>

      <el-table-column
        label="菜单ID"
        prop="id"
        width="70"
      />

      <el-table-column
        label="菜单名称"
        prop="name"
      />

      <el-table-column
        label="父级菜单名称"
        prop="pname"
      />

      <el-table-column
        label="菜单状态"
        prop="stauts"
        width="90"
      />

      <el-table-column
        label="排序序号"
        prop="sortNo"
        width="80"
      />

      <el-table-column
        label="路由路径"
        prop="path"
      />

      <el-table-column
        label="组件路径"
        prop="component"
      />

      <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleAction(row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />
  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'MenuMgtList',
  components: { Pagination },
  data() {
    return {
      searchForm: {},
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: []
    }
  }, created() {
    this.getList()
  },

  methods: {
    searchAction() {

    },
    handleAction(row) {
      const parmas = {
        path: row ? 'edit' : 'create',
        query: row
      }
      this.router_go(this, parmas.path, { parmas: parmas.query })
    },
    handleDelete() {

    },
    getList() {
      this.$store.dispatch('system/menuMgt/getList')
        .then((res) => {
          if (res.code === 20000) {
            this.tableData = res.data
            this.total = res.total
          }
        })
        .catch(() => {

        })
    }
  }
}
</script>

<style scoped lang="scss">
.page-warp {
  margin: 10px 20px 10px 20px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 4px;
  .table-action-body{
    margin-bottom: 10px;
  }
  .child-table-expand {
    font-size: 0;
  }
  .child-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .child-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 33.33%;
  }
}
</style>
