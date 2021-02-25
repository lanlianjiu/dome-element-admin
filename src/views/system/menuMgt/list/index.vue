
<template>
  <div>
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

    <div class="page-warp">

      <div class="table-action-body">
        <el-button type="primary" @click="handleAction()">
          新 增
        </el-button>
        <!-- <el-button type="text" @click="sortAction()">
          排 序
        </el-button> -->
      </div>
      <el-table
        v-loading="tableLoading"
        v-tableHeight="{bottomOffset: 80}"
        :data="tableData"
        border
        style="width: 100%"
        height="100px"
        :row-key="getRowKeys"
        :default-expand-all="true"
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
          width="90"
          align="center"
        >
          <template slot-scope="props">
            <el-tag :type="props.row.status | statusFilter">
              {{ statusMap[props.row.status] ||'' }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="排序序号"
          prop="sortNo"
          width="80"
          align="center"
        />

        <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="text" size="mini" @click="handleAction(row)">
              编 辑
            </el-button>
            <el-button type="text" size="mini" @click="showMore(row)">
              更 多
            </el-button>
            <!-- <el-button v-if="row.children&&(row.children.length>1)" type="text" size="mini" @click="sortAction(row)">
              排 序
            </el-button> -->
            <el-button size="mini" type="text" class="danger-color" @click="handleDelete(row)">
              删 除
            </el-button>
          </template>
        </el-table-column>

      </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="tableQuery.page"
        :limit.sync="tableQuery.limit"
        @pagination="getList"
      />

      <!-- 菜单信息 -->
      <el-dialog
        title="更多信息"
        :visible.sync="dialogVisible"
        custom-class="meunsMgt-dialog"
      >
        <div>
          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              标签名称：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.title }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              高亮路径：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.activeMenu }}</span>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              显示根路由：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.alwaysShow?'一直显示':'不显示' }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              隐藏菜单：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.hidden ?'隐藏':'显示' }}</span>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              是否是外链：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.is_external_link?'是':'不是' }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              重定向路径：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.redirect }}</span>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              是否是固定标签：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.affix?'是':'不是' }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              keep-alive 缓存：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.noCache?'缓存':'不缓存' }}</span>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="row-body">
            <el-col class="row-title">
              是否本地菜单：
            </el-col>
            <el-col :span="16">
              <span>{{ detailData.is_local?'是':'不是' }}</span>
            </el-col>
          </el-row>

        </div>
      </el-dialog>

      <!-- 排序 -->
      <el-dialog
        title="子菜单排序"
        :visible.sync="sortVisible"
        custom-class="sortMgt-dialog"
      >
        <div>
          <el-table
            ref="dragTable"
            :data="list"
            border
            style="width: 100%"
          >
            <el-table-column
              label="菜单名称"
              prop="name"
            />
            <el-table-column
              label="排序序号"
              prop="sortNo"
            >
              <template slot-scope="{row}">
                {{ row.sortNo }}
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
              <template slot-scope="{row}">
                <el-button type="text" size="mini" @click="sortUpDown(row,'up')">
                  上 移
                </el-button>
                <el-button type="text" size="mini" @click="sortUpDown(row,'down')">
                  下 移
                </el-button></template>
            </el-table-column>
          </el-table>

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="sortVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveSort">保 存</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import Item from '@/layout/components/Sidebar/Item'
import Sortable from 'sortablejs'
export default {
  name: 'MenuMgtList',
  components: { Pagination, Item },
  filters: {
    statusFilter(status) {
      const map = {
        1: 'success',
        2: 'info'
      }
      return map[status] || ''
    }
  },
  data() {
    return {
      searchForm: { // 搜索数据对象
        menusName: ''
      },
      total: 0, // 总页数
      tableQuery: { // 表格查询数据
        page: 1,
        limit: 20
      },
      tableData: [], // 表格数据
      dialogVisible: false, // 弹窗标识
      detailData: {}, // 详情弹窗对象
      sortVisible: false, // 排序弹窗标识
      sortable: null, // 排序实例
      list: [], // 排序数据
      oldList: [], // 排序前数据
      newList: [], // 排序后数据
      statusMap: { // 状态字典数据
        1: '有效',
        2: '无效'
      },
      // 获取row的key值
      getRowKeys(row) {
        return row.id
      },
      tableLoading: false
    }
  }, created() {
    this.getList()
  },

  methods: {

    // 查看炒作
    showMore(row) {
      this.detailData = Object.assign({}, row, row.meta)
      this.dialogVisible = true
    },

    // 搜索
    searchAction() {
      this.getList()
    },

    // 重置
    resetSearch() {
      this.tableQuery.page = 1
      this.searchForm = {
        menusName: ''
      }
      this.getList()
    },

    // 新增、编辑操作
    handleAction(row) {
      const parmas = {
        path: row ? 'edit' : 'create',
        query: row
      }
      this.router_go(this, parmas.path, { parmas: parmas.query })
    },

    // 删除操作
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
              this.getList()
              this.$message({
                message: res.msg,
                type: 'success'
              })
            }
          }).catch(() => {})
      }).catch(() => {})
    },

    // 获取表格数据
    getList() {
      this.tableLoading = true
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/menuMgt/getList', parmas).then((res) => {
        if ((res.code === 20000) && res.data) {
          this.tableData = res.data
          this.total = res.pageTotal
        }
        this.tableLoading = false
      }).catch(() => {
        this.tableLoading = false
      })
    },

    // 上移、下移操作
    sortUpDown(row, type) {

    },

    // 点击排序
    sortAction(row) {
      this.sortVisible = true
      let res = []
      if (row) {
        res = row.children.filter((item) => {
          return !item.hidden
        })
      } else {
        res = this.tableData || []
      }

      this.list = JSON.parse(JSON.stringify(res))
      this.oldList = this.list.map(v => v.id)
      this.newList = this.oldList.slice()
      this.$nextTick(() => {
        this.setSort()
      })
      this.$forceUpdate()
    },

    // 操作排序逻辑
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    },

    // 保存排序
    saveSort() {

    }
  }
}
</script>
<style lang="scss">
  .meunsMgt-dialog{
    width: 500px;
    .el-dialog__body{
      padding: 20px;
    }
  }
  .sortable-ghost{
    opacity: .8;
    color: #fff!important;
    background: #1890ff!important;
  }
</style>
<style scoped lang="scss">
.search-container{
  margin: 10px 15px 0px 15px;
  padding: 15px 20px 0 20px;
  background-color: #FFF;
  border-radius: 2px;
  .el-form-item{
      margin-bottom: 15px;
  }

}
.page-warp {
  margin: 5px 15px 0px 15px;
  padding: 10px 20px 0px 20px;
  background-color: #FFF;
  border-radius: 2px;
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
