<template>
  <mu-row gutter class="content">
    <mylefter ref="lefter" @leftEvent="leftFun"></mylefter>
    <myheader ref="header" @headEvent="headFun"></myheader>
    <router-view  ref="righter" @rightEvent="rightFun"></router-view>
    <mydialoger ref="dialoger" ></mydialoger>
  </mu-row>
</template>

<script>
  import Vue from 'vue'
  import header from '../../components/header'
  import lefter from './left'
  import dialoger from './dialog'

  export default {
    name: 'Teacher',
    data () {
      return {

      }
    },
    components:{
      "myheader":header,
      "mylefter":lefter,
      "mydialoger":dialoger,
    },
    mounted () {

    },
    methods: {
      headFun:function (headdata) {
        this.$refs.lefter.toggle(headdata);//调用子页面的左侧菜单列表
      },
      rightFun:function (isshow,dialogtitle,dialogdatas) {
        this.$refs.dialoger.open(isshow,dialogtitle,dialogdatas);//调用dialog子页面的弹窗
      },
      leftFun:function (leftdatas) {
          switch(leftdatas){
            case 'teacxsgl':
              this.$router.push('/teacxsgl');
              break;
            case 'teaccpgl':
              this.$router.push('/teaccpgl');
              break;
            default:
              break;
          }
      },
    }
  }
</script>

<style scoped>
.content{
  position:relative;
}
</style>
