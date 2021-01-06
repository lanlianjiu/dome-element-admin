
<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="菜单名称">
          <el-input v-model="searchForm.menusName" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchAction">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-action-body">
      <el-button type="primary" @click="handleAction()">
        新增
      </el-button>
    </div>
    <el-table
      v-tableHeight="{bottomOffset: 110}"
      :data="tableData"
      border
      style="width: 100%"
      height="100px"
      row-key="id"
    >

      <el-table-column
        label="菜单ID"
        prop="id"
        width="150"
      />

      <el-table-column
        label="菜单名称"
        prop="name"
      />

      <el-table-column
        label="菜单图标"
      >
        <template slot-scope="props">
          <item v-if="props.row.meta" :icon="props.row.meta && props.row.meta.icon" />
          <span style="margin-left: 5px;">{{ props.row.meta.icon }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="路由路径"
        prop="path"
      />

      <el-table-column
        label="组件路径"
        prop="component"
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

      <el-table-column label="操作" align="center" width="220" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleAction(row)">
            编辑
          </el-button>
          <el-button type="primary" size="mini" @click="showMore(row)">
            更多
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />
    <el-dialog
      title="菜单信息"
      :visible.sync="dialogVisible"
    >
      <div>
        <el-row :gutter="20" class="row-body">
          <el-col class="row-title">
            标签名称：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.title }}</span>
          </el-col>
          <el-col class="row-title">
            高亮路径：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.activeMenu }}</span>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="row-body">
          <el-col class="row-title">
            显示根路由：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.alwaysShow?'一直显示':'不显示' }}</span>
          </el-col>
          <el-col class="row-title">
            隐藏菜单：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.hidden ?'隐藏':'显示' }}</span>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="row-body">
          <el-col class="row-title">
            是否是外链：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.is_external_link?'是':'不是' }}</span>
          </el-col>
          <el-col class="row-title">
            重定向路径：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.redirect }}</span>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="row-body">
          <el-col class="row-title">
            是否是固定标签：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.affix?'是':'不是' }}</span>
          </el-col>
          <el-col class="row-title">
            keep-alive 缓存：
          </el-col>
          <el-col :span="6">
            <span>{{ detailData.noCache?'缓存':'不缓存' }}</span>
          </el-col>
        </el-row>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import Item from '@/layout/components/Sidebar/Item'
export default {
  name: 'MenuMgtList',
  components: { Pagination, Item },
  data() {
    return {
      searchForm: {
        menusName: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      dialogVisible: false,
      detailData: {}
    }
  }, created() {
    this.getList()
  },

  methods: {
    showMore(row) {
      this.detailData = Object.assign({}, row, row.meta)
      this.dialogVisible = true
    },
    searchAction() {
      this.getList()
    },
    resetSearch() {
      this.tableQuery.page = 1
      this.getList()
    },
    handleAction(row) {
      const parmas = {
        path: row ? 'edit' : 'create',
        query: row
      }
      this.router_go(this, parmas.path, { parmas: parmas.query })
    },
    handleDelete(row) {
      this.$confirm(`是否删除【${row.name}】菜单?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const parmas = {
          menuId: row.id
        }
        this.$store.dispatch('system/menuMgt/handleDelete', parmas)
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.id !== row.id
              })
              // this.getList()
            }
          })
          .catch(() => {

          })
      }).catch(() => {})
    },
    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/menuMgt/getList', parmas)
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
  .row-body{
    margin-bottom: 10px;
    .row-title{
      width: 140px;
      text-align: right;
    }
  }
}
</style>
