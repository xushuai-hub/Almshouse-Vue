<template>
  <div class="hello">
    <div class="block">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <h1>{{ msg }}</h1>
    <ul>
      <router-link :to="{path:'/login'}"> 去登陆 </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎进入老人之家'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

.el-carousel__item h3 {

}

.el-carousel__item:nth-child(3n) {
  background: rgba(38, 50, 56, .6) url(../assets/old1.jpg) no-repeat;
}

.el-carousel__item:nth-child(3n+1) {
  background: rgba(38, 50, 56, .6) url(../assets/old2.jpg) no-repeat;
}
.el-carousel__item:nth-child(3n+2) {
  background: rgba(38, 50, 56, .6) url(../assets/old3.jpg) no-repeat;
}

</style>
