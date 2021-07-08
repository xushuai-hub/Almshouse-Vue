<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-input v-model="query.username" placeholder="义工姓名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" >搜索</el-button>
        <el-button type="primary" icon="el-icon-add" @click="dialogFormVisible = true">添加</el-button>
      </div>
      <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
        <el-table-column prop="id" label="义工ID" width="55" align="center"></el-table-column>
        <el-table-column prop="username" label="工作人员姓名"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="id_card" label="身份证号"></el-table-column>
        <el-table-column prop="birthday" label="生日"></el-table-column>
        <el-table-column prop="checkin_date" label="访问日期"></el-table-column>
        <el-table-column prop="checkout_date" label="离开日期"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button type="text" icon="el-icon-edit" >修改
            </el-button>
            <el-button type="text" icon="el-icon-delete" class="red" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加新的义工信息" :visible.sync="dialogFormVisible" >
      <el-form :model="form">
        <el-form-item label="义工姓名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.gender"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.id_card"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-input v-model="form.birthday"></el-input>
        </el-form-item>
        <el-form-item label="入职日期">
          <el-input v-model="form.hire_date"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.DESCRIPTION"></el-input>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input v-model="form.CREATEBY"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "VolunteerInfo",
  data() {

    return {
      tableData: [{
        id: '1',
        username: '张三',
        gender: '男',
        phone: '12345',
        id_card:'111111111111111111',
        birthday: '1956-1-4',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '2',
        username: '李四',
        gender: '女',
        phone: '67890',
        id_card:'111111111111111112',
        birthday: '1954-12-2',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '3',
        username: '王二',
        gender: '男',
        phone: '12346',
        id_card:'111111111111111113',
        birthday: '1957-11-6',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '4',
        username: '钱乾',
        gender: '男',
        phone: '12346',
        id_card:'111111111111111114',
        birthday: '1957-11-6',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '5',
        username: '武年',
        gender: '男',
        phone: '12346',
        id_card:'111111111111111115',
        birthday: '1957-11-6',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '6',
        username: '干茵',
        gender: '女',
        phone: '12346',
        id_card:'111111111111111116',
        birthday: '1957-11-6',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }, {
        id: '7',
        username: '涂燕',
        gender: '女',
        phone: '12346',
        id_card:'111111111111111117',
        birthday: '1957-11-6',
        checkin_date: '2021-7-6',
        checkout_date: '',
      }],
      dialogFormVisible: false,
      form:{
        id: "",
        username: "",
        gender: "",
        phone: "",
        id_card: "",
        birthday: "",
        hire_date: "",
        DESCRIPTION:"",
        health_state:"",
        CREATEBY:""
      },
      query:{
        username: "",
        pageIndex: 1,
        pageSize: 5,
      }

    }
  },

  method() {

  },

  mounted() {
    axios.get('http://172.27.135.66/api/user/changeMessage')
      .then(
        response => {
          this.tableData.id = response.id;

        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  }
}
</script>

<style scoped>
.handle-box{
  margin-bottom: 10px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>
