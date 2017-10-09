<template>
  <mu-col class="content-right"  width="100" tablet="100" desktop="100">

    <mu-sub-header>
      <div class="breadcrumb">
        <mu-breadcrumb style="font-size:14px;">
          <mu-breadcrumb-item href="/manager"><mu-icon value="home" :size="14"/>华北理工大学</mu-breadcrumb-item>
          <mu-breadcrumb-item href="javascript:void(0);">系统管理</mu-breadcrumb-item>
          <mu-breadcrumb-item>系统配置</mu-breadcrumb-item>
        </mu-breadcrumb>
      </div>

      <div style="clear:both;"></div>

    </mu-sub-header>

    

    <mu-content-block>
      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="40" tablet="40" desktop="40">
          <mu-text-field label="管理员账号" hintText="请输入" :fullWidth="true"/><br/><br/>
          <mu-text-field label="原密码*" hintText="请输入原密码" type="password" errorText="又输错了，笨死了！" errorColor="red" :fullWidth="true"/><br/><br/>
          <mu-text-field label="新密码*" hintText="请输入新密码" type="password" :fullWidth="true"/><br/><br/>
          <mu-text-field label="确认密码*" hintText="请确认密码" type="password" :fullWidth="true"/><br/><br/>
        </mu-col>
      </mu-row>
      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
            <mu-raised-button label="提交" primary/>
        </mu-col>
      </mu-row>
    </mu-content-block>

    

  </mu-col>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      
    }
  },
 
  components:{
//              "da":da,
//              "cp":cp,
//              "xl":xl,
          },
  //components end
  
  //methods Start
  methods: {
   test (){
    this.$http.post('http://127.0.0.1:8888/api/test/', {
      keyword:'keyword540'
    },{emulateJSON:true}).then(function(res){
      // res  =  JSON.parse(res.bodyText);
      // res  =  res.parseJSON();
      // res  =  eval(res.bodyText);
      console.log(res);
    });
   },
  }
  //methods End
}
</script>

<style scoped>
.content-right{
  padding-top: 64px;
  padding-left: 256px;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  transition: all .45s cubic-bezier(.23,1,.32,1);

}
.breadcrumb{
  margin: 10px 0;
  float:right;
  padding-right:20px;
}
.searchdetail{
  margin-left:50px;
}
.my-dialog-conter{
  text-align:center;
}
.my-dialog-conter span{
  display:inline-block;
  width:100px;
}
.content-right.nav-hide{
  padding-left:0;
}
.demo-picker-container{
  display:inline-block;
  width: 256px;
}
</style>
