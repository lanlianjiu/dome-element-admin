<!--

-->

<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="接口名称">
          <el-input v-model="searchForm.apiName" placeholder="请输入接口名称" />
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
      height="100px"
      border
      style="width: 100%"
    >

      <el-table-column
        label="接口ID"
        prop="apiId"
        width="180"
      />
      <el-table-column
        label="接口名称"
        prop="apiName"
      />

      <el-table-column
        label="接口类型"
        prop="apiType"
      />

      <el-table-column
        label="接口地址"
        prop="apiUrl"
      />

      <el-table-column
        label="创建人"
        prop="createName"
      />

      <el-table-column
        label="创建时间"
        prop="createTime"
      />

      <el-table-column label="操作" align="center" width="240" class-name="small-padding fixed-width">
        <template slot-scope="{row}">

          <el-button type="text" size="mini" @click="handleAction(row)">
            编 辑
          </el-button>
          <el-button type="text" size="mini" @click="openDetail(row)">
            查看
          </el-button>
          <el-button size="mini" type="text" class="danger-color" @click="handleDelete(row)">
            删 除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
    >
      <div>
        <el-form ref="dialog_form" :model="handleForm" :rules="rules" label-width="80px">
          <el-form-item label="接口名称" prop="apiName">
            <el-input v-model="handleForm.apiName" />
          </el-form-item>

          <el-form-item label="接口地址" prop="apiUrl">
            <el-input v-model="handleForm.apiUrl" />
          </el-form-item>

          <div>
            <el-table
              :data="JSONData"
              height="400px"
              border
              style="width: 100%"
              row-key="keyId"
            >
              <el-table-column
                label=""
              >
                <template slot-scope="{row}">
                  <i class="el-icon-plus" style="cursor: pointer;" @click="addKeymap(row,1)" />
                </template>
              </el-table-column>

              <el-table-column
                label="字段名"
              >
                <template slot-scope="{row}">
                  <el-input v-model="row.keyName" placeholder="请输入内容" />
                </template>
              </el-table-column>

              <el-table-column
                label="类型"
              >
                <template slot-scope="{row}">
                  <el-select v-model="row.keyType" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column
                label="说明"
              >
                <template slot-scope="{row}">
                  <el-input v-model="row.keyDesc" placeholder="请输入内容" />
                </template>
              </el-table-column>

              <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
                <template slot-scope="{row}">

                  <el-button type="text" size="mini" @click="addKeymap(row,2)">
                    插 入
                  </el-button>
                  <el-button size="mini" type="text" @click="delKeymap(row)">
                    删 除
                  </el-button>
                </template>
              </el-table-column>

            </el-table>

          </div>

        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm">取 消</el-button>
        <el-button type="primary" @click="saveForm">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'ApiMgtList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      return status ? 'success' : 'info'
    }
  },
  data() {
    return {

      searchForm: {
        apiName: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      dialogVisible: false,
      handleForm: {
        apiName: ''
      },
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      dialogTitle: '',
      rules: {
        apiName: [
          { required: true, message: '请输入接口名称', trigger: 'blur' }
        ],
        apiUrl: [
          { required: true, message: '请输入接口地址', trigger: 'blur' }
        ]
      },

      JSONData: [
        {
          keyId: 1,
          keyName: '',
          keyType: '',
          keyRequire: '',
          keyDesc: ''
        }
      ],
      defaultJson: [{
        keyId: '',
        keyName: '',
        keyType: '',
        keyRequire: '',
        keyDesc: ''
      }],
      options: [
        {
          value: 1,
          label: 'Stirng'
        },
        {
          value: 2,
          label: 'Object'
        },
        {
          value: 3,
          label: 'Array'
        }
      ]
    }
  }, created() {
    this.getList()
  },

  methods: {

    searchAction() {
      this.getList()
    },
    resetSearch() {
      this.tableQuery.page = 1
      this.getList()
    },

    handleAction(row) {
      this.dialogTitle = row ? '编辑接口' : '新增接口'
      if (row) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.handleForm = {
          apiName: ''
        }
      }

      this.dialogVisible = true
    },

    handleDelete(row) {
      this.$confirm(`是否删除【${row.apiName}】接口?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/apiMgt/handleDelete', {
          apiId: row.apiId
        })
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.apiId !== row.apiId
              })
              // this.getList()
            }
          })
          .catch(() => {

          })
      }).catch(() => {})
    },

    openDetail(row) {
      const parmas = {
        path: 'detail',
        query: row
      }
      this.router_go(this, parmas.path, { type: 'push', parmas: { data: JSON.stringify(parmas.query) }})
    },

    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/apiMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.tableData = res.data.map((item) => {
              return {
                ...item
              }
            })
            this.total = res.total
          }
        })
        .catch(() => {

        })
    },
    resetForm() {
      this.$refs.dialog_form.resetFields()
      this.dialogVisible = false
    },
    saveForm() {
      this.$refs.dialog_form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/apiMgt/handleAction', this.handleForm)
            .then((res) => {
              if (res.code === 20000) {
                this.dialogVisible = false
              }
            })
            .catch(() => {

            })
        } else {
          return false
        }
      })
    },
    filterParent(data, id) {
      for (const i in data) {
        if (data[i].keyId) {
          if (data[i].keyId === id) {
            const res = data[i]
            if (res) {
              for (const i in this.JSONData) {
                if (this.JSONData[i].keyId === res.keyId) {
                  const child = this.defaultJson.map((item) => {
                    return Object.assign({}, item, { keyId: `${res.keyId}-${this.JSONData[i].children.length + 1}`, keypId: res.keyId })
                  })
                  const childs = JSON.parse(JSON.stringify(this.JSONData[i].children))
                  const resChild = child.push(childs[0])
                  this.$set(this.JSONData[i], 'children', resChild)
                }
              }
            }
            this.$forceUpdate()
            break
          } else if (data[i].children) {
            this.filterParent(data[i].children, data[i].keyId)
          }
        }
      }
    },
    addKeymap(row, type) {
      if ((type === 2) || (row.keypId && (type === 2))) {
        if (row.children) {
          const res = this.defaultJson.map((item) => {
            return Object.assign({}, item, { keyId: `${row.keyId}-${row.children.length + 1}`, keypId: row.keyId })
          })

          if (typeof row.children === 'object') {
            row.children.push(res[0])
          }
        } else {
          row.children = this.defaultJson.map((item) => {
            return Object.assign({}, item, { keyId: `${row.keyId}-1`, keypId: row.keyId })
          })
        }
        for (const i in this.JSONData) {
          if (this.JSONData[i].keyId === row.keyId) {
            this.$set(this.JSONData, `${i}`, row)
          }
        }
        this.$forceUpdate()
      } else if ((row.keypId && (type === 1))) {
        this.filterParent(this.JSONData, row.keypId)
      } else {
        const res = this.defaultJson.map((item) => {
          return Object.assign({}, item, { keyId: (this.JSONData.length + 1) })
        })
        this.JSONData.push(res[0])
      }

      this.$forceUpdate()
    },
    delKeymap() {

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
  .base-dialog-body{
    margin: 10px;
  }
  .label-title{
    margin-bottom:10px;
  }
}
</style>
