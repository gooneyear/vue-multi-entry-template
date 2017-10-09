<template>
  <mu-col class="content-right"  width="100" tablet="100" desktop="100">

    <mu-sub-header>
      <div class="breadcrumb">
        <mu-breadcrumb style="font-size:14px;">
          <mu-breadcrumb-item href="/manager"><mu-icon value="home" :size="14"/>华北理工大学</mu-breadcrumb-item>
          <mu-breadcrumb-item href="javascript:void(0);">学生管理</mu-breadcrumb-item>
          <mu-breadcrumb-item>学生列表</mu-breadcrumb-item>
        </mu-breadcrumb>
      </div>

      <div style="clear:both;"></div>

      <mu-row gutter>
        <mu-col width="100" tablet="100" desktop="100" class="searchbox">
          搜索条件：
          <mu-auto-complete hintText="请输入教师姓名" @input="handleInput" :dataSource="dataSource" @change="handlechange"  class="searchdetail"/>
          <mu-auto-complete hintText="请输入手机号" @input="handleInput"  class="searchdetail"/>
          <mu-raised-button label="搜索" class="demo-raised-button" primary/>
        </mu-col>
        <mu-col width="100" tablet="100" desktop="100">
          <mu-raised-button label="新建档案" class="demo-raised-button" primary @click="open"/>
        </mu-col>
        <mu-col width="100" tablet="100" desktop="100">
          <mu-raised-button label="test" class="demo-raised-button" primary @click="test"/>
        </mu-col>
      </mu-row>
    </mu-sub-header>

    <!--弹窗-->
    <mu-dialog :open="dialog" title="医生列表-新增医生" @close="close" scrollable class="my-dialog">
      <mu-row class="my-dialog-conter">
        <mu-col width="100" tablet="100" desktop="100">
          <span>医生姓名：</span><mu-text-field hintText="医生姓名"/>
        </mu-col>
      </mu-row>
      <mu-row class="my-dialog-conter">
        <mu-col width="100" tablet="100" desktop="100">
          <span style="display:inline-block;position:relative;top:68px;">所属机构：</span>
          <div class="demo-picker-container">
            <mu-picker :slots="addressSlots" :visible-item-count="5" @change="addressChange" :values="address"/>
          </div>
        </mu-col>
      </mu-row>
      <mu-row class="my-dialog-conter">
        <mu-col width="100" tablet="100" desktop="100">
          <span>手机号码：</span><mu-text-field hintText="医生姓名"/>
        </mu-col>
      </mu-row>
      <mu-row class="my-dialog-conter">
        <mu-col width="100" tablet="100" desktop="100">
          <span>性别：</span><mu-text-field hintText="性别"/>
        </mu-col>
      </mu-row>
      <mu-row class="my-dialog-conter">
        <mu-col width="100" tablet="100" desktop="100">
          <span>邮箱：</span><mu-text-field hintText="邮箱"/>
        </mu-col>
      </mu-row>

      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
    <!--弹窗-->

    <mu-content-block>
      <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
                :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
                :selectable="selectable" :showCheckbox="showCheckbox">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="医生ID">医生ID</mu-th>
            <mu-th tooltip="医生姓名">医生姓名</mu-th>
            <mu-th tooltip="手机号">手机号</mu-th>
            <mu-th tooltip="性别">性别</mu-th>
            <mu-th tooltip="管理患者数">管理患者数</mu-th>
            <mu-th tooltip="状态">状态</mu-th>
            <mu-th tooltip="所属机构">所属机构</mu-th>
            <mu-th tooltip="所属科室">所属科室</mu-th>
            <mu-th tooltip="操作">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
            <mu-td>{{index + 1}}</mu-td>
            <mu-td>{{item.name}}</mu-td>
            <mu-td>{{item.phone}}</mu-td>
            <mu-td>{{item.sex}}</mu-td>
            <mu-td>{{item.patientnum}}</mu-td>
            <mu-td>{{item.status}}</mu-td>
            <mu-td>{{item.org}}</mu-td>
            <mu-td>{{item.office}}</mu-td>
            <mu-td>{{item.act}}</mu-td>
            <mu-td>{{item.status}}</mu-td>
          </mu-tr>
        </mu-tbody>
        <mu-tfoot slot="footer">
        </mu-tfoot>
      </mu-table>
    </mu-content-block>

    <mu-pagination :total="total" :current="current" @pageChange="handleClick" style="float:right;">
    </mu-pagination>

  </mu-col>
</template>
<script>
  const address = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', ],
    '上海': ['上海'],
    '天津': ['天津'],
    '重庆': ['重庆'],
  }
//import da from '@/components/new/base/right/da'
//import cp from '@/components/new/base/right/cp'
//import xl from '@/components/new/base/right/xl'
import Vue from 'vue'

export default {
  data () {
    return {
      dialog:false,
      activeList: 'list1',
      dataSource: [],
      tableData: [
        {
          name: 'John Smith',
          phone: '15295565440',
          sex: '男',
          patientnum: '23',
          status: '激活',
          org: '徐庄管委会',
          office: '66脑',
          act: '查看',
          selected: true
        },
        {
          name: '东哥',
          phone: '15295565440',
          sex: '男',
          patientnum: '24',
          status: '激活',
          org: '徐庄管委会',
          office: '66脑',
          act: '查看',
        },
      ],
      //动态配置列表
      fixedHeader: true,
      fixedFooter: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      showCheckbox: false,
      height: '300px',
      //end动态配置列表
      total: 50,
      current: 1,
      //动态给弹窗传递内容
//      dialogtitle:"医生列表-新增医生",
//      dialogdatas:[
//        {inputType:"text",inputTitle:"医生姓名",inputName:"docname",isMust:true},
//        {inputType:"select",inputTitle:"所属机构",inputName:"org",isMust:true,datas:{}},
//        {inputType:"select",inputTitle:"所在科组信息",inputName:"famous",isMust:true,datas:{}},
//        {inputType:"text",inputTitle:"手机号码",inputName:"phone",isMust:true},
//        {inputType:"radio",inputTitle:"性别",inputName:"sex",isMust:true},
//        {inputType:"text",inputTitle:"邮箱",inputName:"email",isMust:false},
//        {inputType:"radio",inputTitle:"状态",inputName:"status",isMust:true},
//        {inputType:"multiLine ",inputTitle:"备注",inputName:"remark",isMust:true},
//      ],
      //机构和科组
      addressSlots: [
        {
          width: '100%',
          textAlign: 'right',
          values: Object.keys(address)
        }, {
          width: '100%',
          textAlign: 'left',
          values: ['北京']
        }
      ],
      address: ['北京', '北京'],
      addressProvince: '北京',
      addressCity: '北京'
      //机构和科组
    }
  },
  //components Start
  components:{
//              "da":da,
//              "cp":cp,
//              "xl":xl,
          },
  //components end
  //methods Start
  methods: {
//    unselect () {
//      this.$refs.table.unSelectAll()
//    },
    handlechange (val) {
      console.log(val)
    },
    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    },
    handleClick (newIndex) {//分页控件使用
        alert(newIndex);
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
//    科目和科组
    addressChange (value, index) {
      switch (index) {
        case 0:
          this.addressProvince = value
          const arr = address[value]
          this.addressSlots[1].values = arr
          this.addressCitemmy = arr[0]
          break
        case 1:
          this.addressCity = value
          break
      }
      this.address = [this.addressProvince, this.addressCity]
    },
//    科目和科组
//    calldialog:function(){//呼叫弹窗
//      this.$emit('rightEvent',true,this.tableData);
////      this.$emit('rightEvent',true,this.dialogtitle,this.dialogdatas);
//    }
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
