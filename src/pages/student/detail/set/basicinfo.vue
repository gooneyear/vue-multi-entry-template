<template>
    <mu-col class="stu-set-content"  width="100" tablet="100" desktop="100">
      <mu-row class="stu-set-top" width="100" tablet="100" desktop="100">
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
        <mu-col width="100" tablet="100" desktop="100">
          
          
        </mu-col>
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-text-field label="账号*" hintText="提示文字" :fullWidth="true"/>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="性别*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item value="1" title="男"/>
            <mu-menu-item value="2" title="女"/>
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-text-field label="姓名*" errorText="请输入数字" hintText="提示文字" :fullWidth="true"/>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-date-picker container="inline" hintText="内联竖屏模式选择" label="出生日期*" :fullWidth="true" class="stu-set-content-fr"/>
          <!-- <mu-select-field v-model="game" label="出生日期*" :errorText="errorText" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field> -->
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="学院*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="系*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="专业*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="班级*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="利手*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
            <mu-raised-button label="提交" primary/>
        </mu-col>
      </mu-row>

    </mu-col>
  </template>
<script>
  // import auth from '../../../../auth'
  // import store from '../../../../store'

  export default {
    data () {
      return {
        selectDate: '',
        game: '',
        list: ['阴阳师', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀']
      }
    },
    methods: {
      fetch(){

      },
    },
    computed: {
      errorText () {
        return this.game ? '' : '这是必选项'
      }
    },
    mounted:function () {
      // this.fetch();
    }
  }
</script>

<style scoped>

.stu-set-content{
  text-align:left;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.stu-set-top{
  height:50px;
  line-height: 50px;
}
.mu-date-picker{
  width:80%;
}
.mu-text-field{
  width:80%;
}
.stu-set-content-fr{
  float:right;
}
</style>
