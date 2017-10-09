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
  import lefter from '../../components/left'
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
            case 'jsgl':
              this.$router.push('/jsgl');
              break;
            case 'xsgl':
              this.$router.push('/xsgl');
              break;
            case 'cpgl':
              this.$router.push('/cpgl');
              break;
            case 'xxgl':
              this.$router.push('/xxgl');
              break;
            case 'xtgl':
              this.$router.push('/xtgl');
              break;
            default:
              break;
          }
//        this.$refs.dialoger.open(leftdatas);//调用dialog子页面的弹窗
      },
    }
  }
</script>

<style scoped>
.content{
  position:relative;
}
</style>
