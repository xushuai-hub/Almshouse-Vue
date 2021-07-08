<template>
  <div>
    <el-header class="header">
      <p style="float: left;color: #ffffff">养老院平台</p>
      <div class="header-main">
        <div><router-link to="/" style="float: right">退出</router-link></div>
          <div style="float: right;padding-right: 20px;">人员数据信息统计</div>
        </div>
      </el-header>
    <el-container class="el-container">
      <aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          router="true"
          style="width:200px">
          <el-menu-item index="/MainPage/ChangeMessage">
            <i class="el-icon-document"></i>
            <span slot="title">系统设置模块</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">老年人信息管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">工作人员信息管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">义工信息管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">数据管理</span>
          </el-menu-item>
          <el-menu-item index="/MainPage/Camera">
            <i class="el-icon-setting"></i>
            <span slot="title">摄像头管理</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>
