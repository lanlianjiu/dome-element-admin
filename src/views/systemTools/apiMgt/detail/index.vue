<template>
  <div class="page-warp">
    <div style="color:#282c34;padding: 20px;border-radius: 6px;">
      <div class="api-box">
        <div style="font-weight: 600;">基本信息</div>
        <div class="base-dialog-body">
          <div class="label-title">接口名称：{{ baseData.apiName }}</div>
          <div class="label-title">接口类型：{{ baseData.apiType }}</div>
          <div class="label-title">接口路径：{{ baseData.apiUrl }}</div>
          <div class="label-title">Mock地址：</div>
          <div class="label-title" style="display:flex;"><div>接口说明：</div> <div style="color:red;flex:1;" v-html="baseData.desc" /></div>
        </div>
      </div>
      <div class="api-box">
        <div class="label-title" style="font-weight: 600;">请求参数</div>
        <div class="base-dialog-body">
          <div class="label-title">Headers:</div>
          <div>
            <el-table
              :data="headersTable"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="parmasName"
                label="参数名称"
                width="180"
              />
              <el-table-column
                prop="parmaValue"
                label="参数值"
                width="180"
              />
              <el-table-column
                prop="is_requried"
                label="是否必须"
              >
                <template slot-scope="props">
                  {{ props.row.is_requried?'是':'否' }}
                </template>
              </el-table-column>
              <el-table-column
                prop="desc"
                label="备注"
              >
                <template slot-scope="props">
                  <span v-html="props.row.desc" />
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="label-title">Body:</div>
          <div>
            <el-table
              :data="bodyTable"
              border
              style="width: 100%"
              row-key="parmasId"
            >
              <el-table-column
                prop="parmasName"
                label="参数名称"
                width="180"
              />

              <el-table-column
                prop="is_requried"
                label="是否必须"
                width="180"
              >
                <template slot-scope="props">
                  {{ props.row.is_requried?'是':'否' }}
                </template>
              </el-table-column>
              <el-table-column
                prop="parmaType"
                label="类型"
                width="180"
              />
              <el-table-column
                prop="parmaValue"
                label="参数值（例子）"
                width="180"
              />
              <el-table-column
                prop="desc"
                label="备注"
              />
            </el-table>
          </div>
          <div class="label-title">Query:</div>
          <div>
            <el-table
              :data="queryTable"
              border
              style="width: 100%"
              row-key="parmasId"
            >
              <el-table-column
                prop="parmasName"
                label="参数名称"
                width="180"
              />
              <el-table-column
                prop="is_requried"
                label="是否必须"
                width="180"
              >
                <template slot-scope="props">
                  {{ props.row.is_requried?'是':'否' }}
                </template>
              </el-table-column>
              <el-table-column
                prop="parmaType"
                label="类型"
                width="180"
              />
              <el-table-column
                prop="parmaValue"
                label="参数值（例子）"
                width="180"
              />
              <el-table-column
                prop="desc"
                label="备注"
              />
            </el-table>
          </div>
        </div>

      </div>
      <div class="api-box">
        <div class="label-title" style="font-weight: 600;">返回数据</div>
        <div class="base-dialog-body">
          <el-table
            :data="backTable"
            border
            style="width: 100%"
            row-key="parmasId"
          >

            <el-table-column
              label="字段名称"
              prop="parmasName"
              width="180"
            />

            <el-table-column
              label="字段类型"
              prop="parmaType"
              width="100"
            />

            <el-table-column
              label="字段值"
              prop="parmaValue"
              width="100"
            />

            <el-table-column
              label="是否必须"
              prop="is_requried"
              width="100"
            >
              <template slot-scope="props">
                {{ props.row.is_requried?'是':'否' }}
              </template>
            </el-table-column>

            <el-table-column
              label="默认值"
              prop="parmasDefault"
              width="150"
            />

            <el-table-column
              label="备注"
              prop="desc"
            >
              <template slot-scope="props">
                <div style="white-space: pre-line;" v-html="props.row.desc" />
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ApiDetail',
  components: {
  },

  data() {
    return {
      baseData: {}, // 基本数据对象
      headersTable: [], // 请求头部数据
      bodyTable: [], // 请求体数据
      queryTable: [], // 请求路径上数据
      backTable: [] // 请求返回数据
    }
  },
  computed: {

  },
  created() {
    this.baseData = JSON.parse(this.$route.query.data)
    this.headersTable = this.baseData.Headers
    this.bodyTable = this.baseData.Body
    this.queryTable = this.baseData.Query
    this.backTable = this.baseData.callBackdata
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">

.page-warp {
  margin: 10px 15px 10px 15px;
  padding: 10px 20px 10px 20px;
  background-color: #FFF;
  border-radius: 2px;

  .base-dialog-body{
    margin: 10px;
  }
  .label-title{
    margin-bottom:10px;
    margin-top: 10px;
  }
  .api-box{
    padding: 10px;
    border: 1px dashed #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
  }
}
</style>
