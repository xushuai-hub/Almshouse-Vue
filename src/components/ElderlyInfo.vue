<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-input v-model="query.username" placeholder="老人姓名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" >搜索</el-button>
        <el-button type="primary" icon="el-icon-add" @click="dialogFormVisible = true">添加</el-button>
      </div>
        <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
          <el-table-column prop="id" label="老人ID" width="55" align="center"></el-table-column>
          <el-table-column prop="username" label="老人姓名"></el-table-column>
          <el-table-column prop="gender" label="性别"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="birthday" label="生日"></el-table-column>
          <el-table-column prop="checkin_date" label="入院日期"></el-table-column>
          <el-table-column prop="checkout_date" label="离院日期"></el-table-column>
          <el-table-column prop="room_number" label="房间号"></el-table-column>
          <el-table-column prop="health_state" label="健康状况"></el-table-column>
          <el-table-column label="操作" width="180" align="center">
            <template #default="scope">
              <el-button type="text" icon="el-icon-info" >详情
              </el-button>
              <el-button type="text" icon="el-icon-edit" >修改
              </el-button>
              <el-button type="text" icon="el-icon-delete" class="red" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>

      <el-dialog title="添加新的老人信息" :visible.sync="dialogFormVisible" >
        <el-form :model="form">
        <el-form-item label="老人姓名">
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
        <el-form-item label="入院日期">
          <el-input v-model="form.checkin_date"></el-input>
        </el-form-item>
        <el-form-item label="房间号">
          <el-input v-model="form.room_number"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人姓名">
          <el-input v-model="form.firstguardian_name"></el-input>
        </el-form-item>
        <el-form-item label="与第一监护人关系">
          <el-input v-model="form.firstguardian_relationship"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人电话">
          <el-input v-model="form.firstguardian_phone"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人微信">
          <el-input v-model="form.firstguardian_wechat"></el-input>
        </el-form-item>
        <el-form-item label="第二监护人姓名">
          <el-input v-model="form.secondguardian_name"></el-input>
        </el-form-item>
        <el-form-item label="与第二监护人关系">
          <el-input v-model="form.secondguardian_relationship"></el-input>
        </el-form-item>
        <el-form-item label="第二监护人电话">
          <el-input v-model="form.secondguardian_phone"></el-input>
        </el-form-item>
        <el-form-item label="第二监护人微信">
          <el-input v-model="form.secondguardian_wechat"></el-input>
        </el-form-item>
        <el-form-item label="健康状况">
          <el-input v-model="form.health_state"></el-input>
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
  name: "ElderlyInfo",
    // 获取表格数据
    data() {

      return {
        tableData: [{
          id: '1',
          username: '张三',
          gender: '男',
          phone: '12345',
          birthday: '1956-1-4',
          checkin_date: '2021-7-6',
          checkout_date: '',
          room_number: '204',
          health_state: '良好'
        }, {
          id: '2',
          username: '李四',
          gender: '女',
          phone: '67890',
          birthday: '1954-12-2',
          checkin_date: '2021-7-6',
          checkout_date: '',
          room_number: '206',
          health_state: '感冒'
        }, {
          id: '3',
          username: '王二',
          gender: '男',
          phone: '12346',
          birthday: '1957-11-6',
          checkin_date: '2021-7-6',
          checkout_date: '2021-7-8',
          room_number: '209',
          health_state: '健康'
        }, {
          id: '4',
          username: '钱乾',
          gender: '男',
          phone: '12346',
          birthday: '1957-11-6',
          checkin_date: '2021-7-6',
          checkout_date: '2021-7-8',
          room_number: '209',
          health_state: '健康'
        }, {
          id: '5',
          username: '武年',
          gender: '男',
          phone: '12346',
          birthday: '1957-11-6',
          checkin_date: '2021-7-6',
          checkout_date: '',
          room_number: '209',
          health_state: '健康'
        }, {
          id: '6',
          username: '干茵',
          gender: '女',
          phone: '12346',
          birthday: '1957-11-6',
          checkin_date: '2021-7-6',
          checkout_date: '2021-7-8',
          room_number: '209',
          health_state: '健康'
        }, {
          id: '7',
          username: '涂燕',
          gender: '女',
          phone: '12346',
          birthday: '1957-11-6',
          checkin_date: '2021-7-6',
          checkout_date: '',
          room_number: '209',
          health_state: '健康'
        }],
        dialogFormVisible: false,
        form:{
          id: "",
          username: "",
          gender: "",
          phone: "",
          id_card: "",
          birthday: "",
          checkin_date: "",
          room_number:"",
          firstguardian_name:"",
          firstguardian_relationship:"",
          firstguardian_phone:"",
          firstguardian_wechat:"",
          secondguardian_name:"",
          secondguardian_relationship:"",
          secondguardian_phone:"",
          secondguardian_wechat:"",
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

    methods() {
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
