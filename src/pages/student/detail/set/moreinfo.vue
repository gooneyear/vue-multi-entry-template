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
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="民族*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="政治面貌*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="15" tablet="15" desktop="15">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="家庭所在地*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="15" tablet="15" desktop="15">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label=" " :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="15" tablet="15" desktop="15">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label=" " :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="55" tablet="55" desktop="55">
          <mu-text-field label=" " hintText=" " :fullWidth="true" class="stu-set-content-fr stu-set-content-fl"/>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="是否独生子女*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="生源地*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="家庭结构*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="家庭人均月收入*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
          <div class="mu-text-field-label two-special-mu-text">入学动机(多选)*</div>
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="为了振兴中华" class="demo-checkbox"/> <br/>
          <mu-checkbox label="想过几年自由的日子" class="demo-checkbox"/> <br/>
          <mu-checkbox label="想掌握专门的知识和技能" class="demo-checkbox"/> 
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="为了今后就职方便" class="demo-checkbox"/> <br/>
          <mu-checkbox label="想提高自己的教养水平" class="demo-checkbox"/> <br/>
          <mu-checkbox label="想做学问" class="demo-checkbox"/> 
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="为了社会发展人类进步" class="demo-checkbox"/> <br/>
          <mu-checkbox label="对结婚有利" class="demo-checkbox"/> <br/>
          <mu-checkbox label="想参加丰富多彩的社团活动" class="demo-checkbox"/> 
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="为出国打基础" class="demo-checkbox"/> <br/>
          <mu-checkbox label="由于父母老师的规劝" class="demo-checkbox"/> <br/>
          <mu-checkbox label="其他" class="demo-checkbox"/> 
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
          <mu-text-field label="" hintText="填写其他理由" :fullWidth="true" class="stu-set-content-fl"/>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="报考满意度*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
          <div class="mu-text-field-label two-special-mu-text">个人病史(多选)*</div>
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="难产" class="demo-checkbox"/> <br/>
          <mu-checkbox label="结核" class="demo-checkbox"/> <br/>
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="早产" class="demo-checkbox"/> <br/>
          <mu-checkbox label="脑炎" class="demo-checkbox"/> <br/>
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="肺炎" class="demo-checkbox"/> <br/>
          <mu-checkbox label="头部外伤" class="demo-checkbox"/> <br/>
        </mu-col>
        <mu-col width="25" tablet="25" desktop="25">
          <mu-checkbox label="肝炎" class="demo-checkbox"/> <br/>
          <mu-checkbox label="其他" class="demo-checkbox"/> <br/>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="100" tablet="100" desktop="100">
          <mu-text-field label="" hintText="填写其他理由" :fullWidth="true" class="stu-set-content-fl"/>
        </mu-col>
      </mu-row>

      <mu-row width="100" tablet="100" desktop="100">
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="家庭病史(近亲中，有精神卫生方面的问题吗(如自杀,中毒,去向不明等)?)*" :fullWidth="true">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
        </mu-col>
        <mu-col width="50" tablet="50" desktop="50">
          <mu-select-field v-model="game" :labelFocusClass="['label-foucs']" label="首选求助对象*" :fullWidth="true" class="stu-set-content-fr">
            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
          </mu-select-field>
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
.mu-text-field.stu-set-content-fl{
  width:100%;
}
.stu-set-content-fr{
  float:right;
}
.two-special-mu-text{
  padding-top:12px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
}
</style>
