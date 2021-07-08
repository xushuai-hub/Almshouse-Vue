<template>
  <div class="ChangeMessage">
    <el-form
      :model="resetForm"
      :rules="resetFormRules"
      ref="resetForm"
      status-icon
      label-width="100px"
    >
      <el-form-item label="登录名称：" prop="name">
        <el-input type="name" v-model="resetForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户名：" prop="username">
        <el-input type="username" v-model="resetForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <el-input type="sex" v-model="resetForm.sex" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input type="email" v-model="resetForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="phone">
        <el-input type="phone" v-model="resetForm.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newpwd">
        <el-input type="password" v-model="resetForm.newpwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="newpassword1">
        <el-input type="password" v-model="resetForm.newpassword1" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="toAmend">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>




<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入新密码"));
      } else if (value.toString().length < 6 || value.toString().length > 18) {
        callback(new Error("密码长度为6-18位"));
      } else {
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resetForm.newpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      resetForm: {
        //传给后台所需要的参数
        name: "",
        username: "",
        sex: "",
        email: "",
        phone: "",
        newpassword1: "",
        password: "",
      },
      resetFormRules: {
        newpwd: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        newpassword1: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    toAmend() {
      this.$refs.resetForm.validate(valid => {
        if (valid) {
          this.$API.g_ChangeMessage({

          })
          .then(

          )
          .catch({

          })
        }
      });
    },

  },
  mounted(){

  },


};
</script>

<style scoped>
.el-form {
  width: 60%;
  margin: 50px auto 0;
  text-align: center;}
button {
  margin: 20px 0 0;
}

</style>
