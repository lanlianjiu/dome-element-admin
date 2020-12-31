<!--

-->

<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="用户名称">
          <el-input v-model="searchForm.user" placeholder="请输入用户名称" />
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
            <el-form-item label="用户角色：">
              <el-tag v-for="(item,index) in props.row.roles || []" :key="index" style="margin-right:5px;">
                {{ item.roleName }}
              </el-tag>
            </el-form-item>
            <el-form-item label="用户描述：">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户ID"
        prop="userId"
        width="80"
      />
      <el-table-column
        label="用户名称"
        prop="userName"
      />

      <el-table-column
        label="用户状态"
        width="100"
        prop="status"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status?'有效':'无效' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="用户性别"
        prop="userSex"
        width="80"
      >
        <template slot-scope="{row}">
          {{ row.userSex?'男':'女' }}
        </template>
      </el-table-column>

      <el-table-column
        label="用户电话"
        prop="userMobile"
      />

      <el-table-column
        label="用户邮箱"
        prop="userEmali"
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
  name: 'UserMgtList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'info',
        1: 'success'
      }
      return statusMap[status]
    }
  },
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

    },
    handleDelete() {

    },

    getList() {
      this.$store.dispatch('system/userMgt/getList')
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
    width: 50%;
  }
}
</style>
