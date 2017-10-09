<template>
    <mu-col class="stu-start"  width="100" tablet="100" desktop="100">
      <mu-row class="stu-start-top"  width="100" tablet="100" desktop="100">
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
        <mu-col width="100" tablet="100" desktop="100">
          <div class="stu-start-top-fixed">
            <label class="stu-start-top-label">症状自评量表（SCL-90）</label>
          </div>
          
        </mu-col>
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
      </mu-row>

      <mu-row class="stu-start-middle"  width="100" tablet="100" desktop="100">
        <!-- <mu-col width="10" tablet="10" desktop="10"></mu-col> -->
        <mu-col width="100" tablet="100" desktop="100">
          <mu-row width="100" tablet="100" desktop="100">
            <mu-col width="100" tablet="100" desktop="100" class="stu-eval-explain">
              以下表格中列出了有些人可能会有的问题，请仔细地阅读每一条，然后根据最近一星期以内下述情况影响你的实际感觉，在五个答案里选择一个最适合你的答案，现在开始吧！
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100" class="stu-eval-attention">
              1.没有  2.很轻  3.中等  4.偏重  5.严重
            </mu-col>

            <mu-col width="100" tablet="100" desktop="100" class="stu-eval-questions">
              <div>
                <div class="stu-eval-questions-title">
                  1,头痛
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  2,神经过敏，心中不踏实
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>
              <div>
                <div class="stu-eval-questions-title">
                  3,头脑中有不必要的想法或字句盘旋
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  4,头昏或昏倒
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  5,对异性的兴趣减退
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  6,对旁人责备求全
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  7,感到别人能控制你的思想
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  1,头痛
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  2,神经过敏，心中不踏实
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>
              <div>
                <div class="stu-eval-questions-title">
                  3,头脑中有不必要的想法或字句盘旋
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  4,头昏或昏倒
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  5,对异性的兴趣减退
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  6,对旁人责备求全
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>

              <div>
                <div class="stu-eval-questions-title">
                  7,感到别人能控制你的思想
                </div>
                <div class="stu-eval-questions-content">
                  <mu-radio label="没有" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="很轻" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="中等" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="偏重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                  <mu-radio label="严重" name="group" nativeValue="simple1" v-model="value" class="demo-radio"/>
                </div>
                <mu-divider />
              </div>
            </mu-col>
          </mu-row>

          <mu-row class="stu-start-footer" width="100" tablet="100" desktop="100">
            <mu-col width="100" tablet="100" desktop="100">
              <label class="stu-start-footer-button">
                <mu-raised-button label="提交" class="demo-raised-button" primary/>
              </label>
            </mu-col>
          </mu-row>

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
        scalId:this.$route.query.scalId,
        value: 'simple2',
        value2: '22',
        disabled: 'tt',
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
    },
    mounted:function () {
      // this.fetch();
    }
  }
</script>

<style scoped>

.stu-start{
  text-align:center;
  padding-top: 64px;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.stu-start-top{
  height:60px;
  line-height: 60px;
  background-color:rgb(248,248,248);
}
.stu-start-top-fixed{
  position:fixed;
  top:64px;
  left:0;
  width:100%;
  z-index: 4;
  padding-left:calc((100% - 1024px) / 2);
  background-color:rgb(248,248,248);
}
.stu-start-top-label{
  font-weight: bold;
  float: left;
}

.stu-start-middle{
  
}
.stu-eval-explain{
  text-align: left;
  padding-top:30px;
}
.stu-eval-attention{
  text-align: left;
  padding-top:30px;
}
.stu-eval-questions{
  
}
.stu-eval-questions-title{
  padding-top:30px;
  font-size:16px;
  font-weight: bold;
  text-align: left;
}
.stu-eval-questions-content{
  display:flex;
  justify-content:space-between;
}
.demo-radio {
  margin-bottom: 16px;
}

.stu-start-footer{
  padding-top:30px;
}
.stu-start-footer-button{
  float:right;
}
</style>
