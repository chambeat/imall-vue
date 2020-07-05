<template>
  <div>
    <!-- <span>商品列表</span> -->

    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 1. 条件搜索(行内表单) -->
      <el-form ref="searchForm" :inline="true" :model="searchMap" class="demo-form-inline">
        <el-form-item prop="gName">
          <el-input v-model="searchMap.gName" placeholder="商品名称" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item prop="gType">
          <el-select v-model="searchMap.gType" placeholder="商品类型" style="width: 150px">
            <el-option
              v-for="type in typeOptions"
              :key="type.idx"
              :label="type.name"
              :value="type.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">
            <i class="el-icon-search"></i>
            <span>搜索</span>
          </el-button>
        </el-form-item>
        <el-form-item class="btnAdd">
          <el-button type="primary" @click="handleAdd">
            <i class="el-icon-plus"></i>
            <span>添加</span>
          </el-button>
        </el-form-item>
      </el-form>
      <!-- 对话框 -->
      <el-dialog title="商品编辑" :visible.sync="dialogFormVisible" width="500px">
        <el-form
          ref="pojoForm"
          :model="pojo"
          label-width="100px"
          label-position="right"
          style="width: 400px"
          :rules="rules"
        >
          <el-form-item label="商品名称" prop="gName">
            <el-input v-model="pojo.gName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="定价(元)" prop="gPrice">
            <el-input v-model="pojo.gPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="库存量(件)" prop="gStock">
            <el-input v-model="pojo.gStock" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" prop="gType">
            <el-select v-model="pojo.gType" placeholder="请选择">
              <el-option
                v-for="type in typeOptions"
                :key="type.idx"
                :label="type.name"
                :value="type.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产地" prop="gOrigin">
            <el-select v-model="pojo.gOrigin" placeholder="请选择">
              <el-option
                v-for="origin in originOptions"
                :key="origin.num"
                :label="origin.name"
                :value="origin.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" size="medium">取消</el-button>
          <el-button type="primary" @click="addData('pojoForm')" size="medium">确定</el-button>
          <!-- <el-button type="primary" @click="addData('pojoForm')">确 定</el-button> -->
          <!-- <el-button
            type="primary"
            @click="(pojo.id === null) ? addData('pojoForm') : updateData('pojoForm')"
            size="medium"
          >确定</el-button>-->
        </div>
      </el-dialog>
      <!-- 2. 表格：
        :data 用于指定要绑定的数据
        size 用于指定表格的行距
        border 用于指定边框
        highlight-current-row 是否高亮当前行
        v-loading 是否显示'加载中'
      -->
      <el-table :data="list" size="mini" border style="width: 100%" highlight-current-row>
        <!-- 
        type="index" 可获取索引值，且是从1开始
        -->
        <!-- <el-table-column type="index" label="#" width="50"></el-table-column> -->
        <el-table-column prop="id" label="#" width="50"></el-table-column>
        <el-table-column prop="gName" label="商品名称" width="380"></el-table-column>
        <el-table-column prop="gPrice" label="定价" width="100" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.gPrice | priceFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="gStock" label="库存量(件)" width="110" sortable></el-table-column>
        <el-table-column prop="gType" label="商品类型" width="130"></el-table-column>
        <el-table-column prop="gOrigin" label="产地" width="80"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">
              <i class="el-icon-edit-outline"></i>
              <span>编辑</span>
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">
              <i class="el-icon-delete"></i>
              <span>删除</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 3. 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>


<script>
import goodsApi from "@/api/goods";

export default {
  data() {
    return {
      list: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      pojo: {
        // id: null, // 必须定义 id 属性并初始化为 null，否则无法复用'添加'弹出框
        gName: "",
        gPrice: null,
        gStock: null,
        gType: "",
        gOrigin: ""
      },
      // 条件搜索
      searchMap: {
        gName: "",
        gType: ""
      },
      dialogFormVisible: false,
      typeOptions: [
        { idx: 1, name: "生活用品" },
        { idx: 2, name: "食品" },
        { idx: 3, name: "服饰" },
        { idx: 4, name: "家用电器" },
        { idx: 5, name: "数码影音" },
        { idx: 6, name: "艺术/文化" },
        { idx: 7, name: "运动/户外" },
        { idx: 8, name: "教育培训" }
      ],
      originOptions: [
        { num: 1, name: "河北" },
        { num: 2, name: "河南" },
        { num: 3, name: "山西" },
        { num: 4, name: "山东" },
        { num: 5, name: "湖北" },
        { num: 6, name: "湖南" },
        { num: 7, name: "云南" },
        { num: 8, name: "江西" },
        { num: 9, name: "广东" },
        { num: 10, name: "广西" },
        { num: 11, name: "北京" },
        { num: 12, name: "陕西" },
        { num: 13, name: "西藏" },
        { num: 14, name: "内蒙古" },
        { num: 15, name: "宁夏" },
        { num: 16, name: "新疆" },
        { num: 17, name: "甘肃" },
        { num: 18, name: "江苏" },
        { num: 19, name: "安徽" },
        { num: 20, name: "福建" },
        { num: 21, name: "黑龙江" },
        { num: 22, name: "青海" },
        { num: 23, name: "四川" },
        { num: 24, name: "贵州" },
        { num: 25, name: "上海" },
        { num: 26, name: "浙江" },
        { num: 27, name: "海南" },
        { num: 28, name: "吉林" },
        { num: 29, name: "辽宁" },
        { num: 30, name: "天津" },
        { num: 31, name: "重庆" },
        { num: 32, name: "香港" },
        { num: 33, name: "澳门" },
        { num: 34, name: "台湾" }
      ],
      rules: {
        gName: [
          { required: true, message: "商品名称不能为空", trigger: "blur" }
        ],
        gPrice: [
          { required: true, message: "定价不能为空", trigger: "blur" }
          // { type: "number", message: "请输入大于 0 的数值", trigger: "blur" }
        ],
        gStock: [
          { required: true, message: "库存量不能为空", trigger: "blur" }
          // { type: "number", message: "请输入大于 0 的数值", trigger: "blur" }
        ],
        gType: [
          { required: true, message: "商品类型不能为空", trigger: "blur" }
        ],
        gOrigin: [{ required: true, message: "产地不能为空", trigger: "blur" }]
      }
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    // 获取数据
    fetchData() {
      goodsApi.getList(this.currentPage).then(response => {
        const resp = response.data;
        this.list = resp.list;
        this.total = resp.total;
        // this.list = resp;
        // this.total = this.list.length; // js 中只有 length 而没有 length()
      });
      console.log("fetchData");
    },
    // 条件搜索
    handleSearch() {
      // console.log("handleSearch " + this.searchMap);
      goodsApi.search(this.searchMap).then(response => {
        const resp = response.data;
        console.log(resp);
        this.list = resp;
        this.total = this.list.length;
        console.log("按条件搜索成功");
      });
    },
    // 点击'添加'
    handleAdd() {
      this.dialogFormVisible = true;
      // 重置表单
      this.$refs["pojoForm"].resetFields();
    },
    // 提交数据
    addData(formName) {
      this.$refs[formName].validate(valid => {
        // 通过非空校验
        if (valid) {
          goodsApi.add(this.pojo).then(response => {
            const resp = response.data;
            if (resp.flag) {
              // 添加成功
              this.dialogFormVisible = false;
              this.$message({
                message: resp.message,
                type: "success",
                duration: 1600
              });
              // 刷新列表数据
              this.fetchData();
            } else {
              // 添加失败
              this.$message({
                message: resp.message,
                type: "error",
                duration: 1600
              });
            }
            console.log(response.data);
          });
        } else {
          return false;
        }
      });
    },
    // 点击'编辑'
    handleEdit(id) {
      console.log("handleEdit");
    },
    // 删除数据
    handleDelete(id) {
      this.$confirm("确认删除这条记录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确定（执行以下逻辑）
          goodsApi.deleteById(id).then(response => {
            const resp = response.data;
            if (resp.flag) {
              // 删除成功：刷新列表数据
              this.fetchData();
              this.$message({
                message: resp.message,
                type: "success",
                duration: 1200
              });
            } else {
              // 删除失败
              this.$message({
                message: resp.message,
                type: "error",
                duration: 1200
              });
            }
          });
        })
        .catch(() => {
          // 点击取消（此处不用逻辑处理，会自动关闭）
        });
      console.log("handleDelete " + id);
    },
    // 改变页码时
    handleCurrentChange(value) {
      this.currentPage = value;
      /* 注意：this.$nextTick() 是一个异步事件，只有当执行完上一条语句时，它的回调函数才会被执行。*/
      this.$nextTick(() => {
        this.fetchData(); // 获取数据
      });
      console.log("handleCurrentChange " + this.currentPage);
    }
  },

  filters: {
    priceFilter(price) {
      return "￥" + price;
    }
  }
};
</script>

<style scoped>
.el-table {
  /* 表格字体大小 */
  font-size: 12px;
}

/* '添加'按钮 */
.btnAdd {
  float: right;
}

.el-pagination {
  margin-top: 3px;
  /* text-align: center; */
}
</style>