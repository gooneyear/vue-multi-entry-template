<template>
    <mu-col  class="header">
      <mu-appbar title="">
        <mu-icon-button icon="menu" slot="left" @click="showLeftdrawer"/>
        <!--<mu-flat-button label="康复云平台" slot="left"/>-->
        <mu-avatar slot="right" src="http://www.muse-ui.org/images/uicon.jpg"/>
        <mu-flat-button label="管理员" slot="right"/>
        <mu-icon-menu icon="expand_more" slot="right">
          <mu-menu-item title="设置" leftIcon="settings"/>
          <mu-menu-item title="账户信息" leftIcon="help_outline"/>
          <mu-divider />
          <mu-menu-item title="退出" leftIcon="power_settings_new" @click="logout"/>
        </mu-icon-menu>
      </mu-appbar>
    </mu-col>
  </template>

<script>
  export default {
    data () {
      return {
        account:'',
      }
    },
    methods: {
      showLeftdrawer () {
        this.$emit('headEvent');//抛出事件给Manager父页面,调出左侧菜单
      },
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
    },
    mounted:function () {
      // this.fetch();
    }
  }
</script>
  <style scoped>
  .header{
    position: fixed;
    left: 256px;
    right: 0;
    background-color: #7e57c2;
  }

  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }
  .header.nav-hide {
    left: 0;
  }
  .mu-popover{
    top:64px;
  }
  </style>
