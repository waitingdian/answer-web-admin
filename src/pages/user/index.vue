<template>
  <div class="common-container">
    <div style="padding: 20px 50px;" class="overflowHidden">
      <el-button type="primary" class="pull-right m-r-50">添加</el-button>
    </div>
    <el-table
            class="common-border1 border-radius4"
            :data="tableData"
            style="width: 100%; padding: 24px;">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="idcard"
              label="身份证号">
      </el-table-column>
    </el-table>

    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="500px">

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name" required>
          <el-input style="width:320px" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="idcard" required>
          <el-input style="width:320px" v-model="ruleForm.idcard" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="text-right p-r-50">
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>

<!--      <span slot="footer" class="dialog-footer" center>-->
<!--        <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--      </span>-->
    </el-dialog>


  </div>
</template>

<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('名称不能为空'));
        } else {
          callback();
        }
      };

      var checkIdcard = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('身份证号不能为空'));
        } else {
          callback();
        }
      };

      return {
        dialogVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          idcard: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          idcard: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          idcard: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          idcard: '上海市普陀区金沙江路 1516 弄'
        }],
        ruleForm: {
          name: '',
          idcard: '',
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          idcard: [
            { validator: checkIdcard, trigger: 'blur' }
          ]
        }

      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
