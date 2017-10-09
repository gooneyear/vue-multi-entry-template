<template>
    <mu-col  class="header">
      <mu-appbar title="">
          <!-- <mu-avatar slot="left" src="http://www.muse-ui.org/images/uicon.jpg"/> -->
          <mu-icon-button icon="home" slot="left" />
          <mu-flat-button label="六六脑®脑康复云" slot="left"/>

          <div class="nav">
            <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
              <mu-tab value="cp" title="测评"/>
              <mu-tab value="nnlpg" title="脑能力评估"/>
            </mu-tabs>
          </div>

        <mu-avatar slot="right" src="http://www.muse-ui.org/images/uicon.jpg"/>
        <mu-flat-button label="学生" slot="right"/>
        <mu-icon-menu icon="expand_more" slot="right">
          <mu-menu-item title="设置" leftIcon="settings"/>
          <mu-menu-item title="账户信息" leftIcon="help_outline" @click="setinfo(5400)"/>
          <mu-divider />
          <mu-menu-item title="退出" leftIcon="power_settings_new" @click="logout"/>
        </mu-icon-menu>
      </mu-appbar>
      </mu-col>
  </template>
<script>
  // import auth from '../../../../auth'
  // import store from '../../../../store'

  export default {
    data () {
      return {
        account:'',
        activeTab: 'cp',
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
      setinfo(uid){
        this.$router.push({path:'/student/set',query:{uid:uid}});
      },
      handleTabChange (tab) {
        this.activeTab = tab;
        this.$emit('headEvent',tab);
      },
    },
    mounted:function () {
      // this.fetch();
    }
  }
</script>
  <style scoped>
.header{
  position: fixed;
  z-index: 4;
  left: 0;
  right: 0;
  background-color: #7e57c2;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}
.tab{
  margin: 0 auto;
  width: 400px;
  height:58px;
  background-color: rgba(0, 0, 0, 0);
}
  </style>
