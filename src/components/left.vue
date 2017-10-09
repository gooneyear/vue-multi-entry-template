<template>
    <mu-drawer :open="open"  @close="toggle()" class="content-left">

      <mu-appbar title="">
        <mu-icon-button icon="home" slot="left" />
        <mu-flat-button label="六六脑®脑康复云" slot="left"/>
      </mu-appbar>


      <mu-list @change="handleListChange" :value="activeList">

        <mu-list-item disabled>
            <img src="http://www.muse-ui.org/images/uicon.jpg" style="width:100px;height:100px;border-radius:100px;" />
            <h4>华北理工</h4>
        </mu-list-item>

        <mu-list-item title="教师管理" value="jsgl" >
        </mu-list-item>
        <mu-list-item title="学生管理" value="xsgl">
        </mu-list-item>
        <mu-list-item title="测评管理" value="cpgl">
        </mu-list-item>
        <mu-list-item title="系统管理" value="xtgl">
        </mu-list-item>
        <mu-list-item title="学校管理" value="xxgl">
        </mu-list-item>

      </mu-list>
    </mu-drawer>
  <!--</mu-col>-->
</template>

<script>
export default {
  data () {
    return {
      activeList: 'jsgl',
      open: true,
    }
  },
  methods: {
    handleListChange (leftdatas) {//左侧菜单列表选中事件
      this.activeList = leftdatas;
      this.$emit('leftEvent',leftdatas);//抛出事件给Hello父页面
    },
    toggle (flag=false) {//左侧菜单动态显示
      this.open = !this.open;
      if(!this.open){
        $(".header").addClass("nav-hide");
        $(".content-right").addClass("nav-hide");
      }else{
        $(".header").removeClass("nav-hide");
        $(".content-right").removeClass("nav-hide");
      }

    }
  }
}
</script>

<style scoped>
.content-left{
  text-align: center;
  background-color: white;
}

</style>
