<template>
    <mu-col class="stu-content"  width="100" tablet="100" desktop="100">
      <mu-row class="stu-content-top"  width="100" tablet="100" desktop="100">
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
        <mu-col width="100" tablet="100" desktop="100">
          <label class="stu-content-top-label">您有以下测评需要完成。</label>
          <label class="stu-content-top-button">
            <mu-raised-button label="开始测评" class="demo-raised-button" primary/>
          </label>
          
        </mu-col>
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
      </mu-row>

      <mu-row class="stu-content-middle"  width="100" tablet="100" desktop="100">
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
        <mu-col width="100" tablet="100" desktop="100" class="stu-content-middle-flex">
          <mu-paper class="demo-paper" :zDepth="1" v-for="item, index in list" :key="index">
            <figure @click="gotoEval(item.id)">
              <img :src="item.image" width="220" height="220" />
              <figcaption>{{item.title}}</figcaption>
            </figure>
          </mu-paper>
        </mu-col>
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
      </mu-row>

    </mu-col>
  </template>
<script>
  // import auth from '../../../../auth'
  // import store from '../../../../store'

  export default {
    data () {
      return {
        list: [{
          image: 'http://www.muse-ui.org/images/uicon.jpg',
          title: '症状自评量表（SCL-90）',
          author: 'Myron',
          id:'1',
        }, {
          image: 'http://www.muse-ui.org/images/uicon.jpg',
          title: '大学生人格问卷（UPI）',
          author: 'Linyu',
          id:'2',
        }, {
          image: 'http://www.muse-ui.org/images/uicon.jpg',
          title: '艾森克人格量表（EPQ）',
          author: 'ruolin',
          id:'3',
        }, {
          image: 'http://www.muse-ui.org/images/uicon.jpg',
          title: '青少年生活事件量表（ASLEC）',
          author: 'kakali',
          id:'4',
        }, ]
      }
    },
    methods: {
      fetch(){//初始化获取账户信息
        // this.$http.get('/api/Users/me').then(
        //   (response) => {
        //     store.setAccount(response.data);
        //   }
        // ).then(function () {
        //   this.account = store.account;
        //   console.log(this.account);
        // });
      },
      logout(){
        // auth.logout();
        // this.$router.push({ path: '/' });
      },
      handleTabChange (typeStr) {
        this.activeTab = typeStr;
        this.$emit('headEvent',typeStr);
      },
      gotoEval(scalId){
        this.$emit('contentEvent',scalId);
        // this.$router.push('/student/nnlpg');
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
.stu-content-top{
  height:100px;
  line-height: 100px;
}
.stu-content-top-label{
  float: left;
}
.stu-content-top-button{
  float: right;
}
.stu-content-middle-flex{
  display:flex;
  justify-content:space-between;
}
.demo-paper {
  display: inline-block;
  min-height: 220px;
  width: 220px;
  margin-bottom:20px;
  text-align: center;
}
figure{
  margin:0;
}
figcaption{
  height:40px;
  line-height: 40px;
}
</style>
