<template>
  <!--<mu-col width="20" tablet="20" desktop="20" class="content-left">-->
    <!-- <div class="">
      <mu-paper title="吴东" class="demo-paper" circle :zDepth="3" />
      <h4>吴东</h4>
    </div> -->
    <!--<mu-list @change="handleListChange" :value="activeList">-->
      <!--<mu-list-item title="档案" value="da" >-->
        <!--<mu-icon slot="left" value="send" />-->
      <!--</mu-list-item>-->
      <!--<mu-list-item title="测评" value="cp">-->
        <!--<mu-icon slot="left" value="drafts"/>-->
      <!--</mu-list-item>-->
      <!--<mu-list-item title="训练" value="xl">-->
        <!--<mu-icon slot="left" value="grade"/>-->
      <!--</mu-list-item>-->
    <!--</mu-list>-->

    <mu-drawer :open="open"  @close="toggle()" class="content-left">

      <mu-appbar title="">
        <mu-icon-button icon="home" slot="left" />
        <mu-flat-button label="六六脑®脑康复云" slot="left"/>
      </mu-appbar>


      <mu-list @change="handleListChange" :value="activeList">

        <mu-list-item disabled>
            <img src="http://www.muse-ui.org/images/uicon.jpg" style="width:100px;height:100px;border-radius:100px;" />
            <h4>
              老师端
            </h4>
          <!-- <mu-avatar slot="left" src="http://www.muse-ui.org/images/uicon.jpg"  :size="60"/> -->
        </mu-list-item>

        <mu-list-item title="学生管理" value="teacxsgl">
          <!-- <mu-icon slot="left" value="drafts"/> -->
        </mu-list-item>
        <mu-list-item title="测评管理" value="teaccpgl">
          <!-- <mu-icon slot="left" value="drafts"/> -->
        </mu-list-item>

      </mu-list>
    </mu-drawer>
  <!--</mu-col>-->
</template>

<script>
export default {
  data () {
    return {
      activeList: 'teacjsgl',
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
