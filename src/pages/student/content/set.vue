<template>
  <mu-col class="stu-content"  width="100" tablet="100" desktop="100">
    <mu-row class="stu-set-top"  width="100" tablet="100" desktop="100">
      <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
      <mu-col width="100" tablet="100" desktop="100">
        <div class="nav">
          <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
            <mu-tab value="jbxx" title="基本信息"/>
            <mu-tab value="gjxx" title="高级信息"/>
          </mu-tabs>
        </div>
      </mu-col>
      <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
    </mu-row>

    <router-view  ref="set" @contentEvent="setFun"></router-view>

  </mu-col>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'jbxx',
    }
  },
  methods: {
    fetch(){

    },
    handleTabChange (tab) {
      this.activeTab = tab;
      switch(tab){
        case 'jbxx':
          this.$router.push({path:'/student/set/basicinfo',query:{scalId:tab}});
          break;
        case 'gjxx':
          this.$router.push({path:'/student/set/moreinfo',query:{scalId:tab}});
          break;
        default:
          break;
      }
    },
    setFun:function (setdata) {
      
    },
  },
  mounted:function () {
    // this.fetch();
  }
}
</script>

<style scoped>
.stu-content{
  text-align:center;
  padding-top: 64px;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.stu-set-top{
  height:60px;
  line-height: 60px;
  background-color:rgb(248,248,248);
}
.nav{
  display: inline-block;
  position:fixed;
  z-index: 4;
  width: 100%;
  top:64px;
  left:0;
  padding-left:calc((100% - 1024px) / 2);
  background-color:rgb(248,248,248);
}
.tab{
  margin: 0;
  width: 200px;
  height:58px;
  background-color:rgb(248,248,248);
}
.mu-tab-link{
  color:#000;
}
.mu-tab-link.mu-tab-active{
  font-size:15px;
  font-weight: bold;
  background-color:#ccc;
}
.mu-tabs span.mu-tab-link-highlight{
  background-color:000;
}
</style>
