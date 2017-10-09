<template>
  <mu-row gutter class="content">
    <myheader ref="header" @headEvent="headFun"></myheader>
    <router-view  ref="content" @contentEvent="contentFun"></router-view>
    <mydialoger ref="dialoger" ></mydialoger>
  </mu-row>
</template>

<script>
import Vue from 'vue'
import header from './header'
import dialoger from './dialog'

export default {
  data () {
    return {

    }
  },
    components:{
      "myheader":header,
      "mydialoger":dialoger,
    },
    mounted () {

    },
  methods: {
    headFun:function (headdata) {
      switch(headdata){
        case 'cp':
          this.$router.push('/cp');
          break;
        case 'nnlpg':
          this.$router.push('/nnlpg');
          break;
        default:
          break;
      }
    },
    contentFun:function (contentdata) {
      this.$router.push({path:'/stustarteval',query:{scalId:contentdata}});
    },
  }
}
</script>

<style scoped>

.row{
  max-width: 1024px;
  margin:0 auto;
}
</style>
