<template>
<div>
  <mu-dialog :open="dialog" title="Dialog" @close="close">
    <!-- 动态形成内容部分 -->
    <div>
      <mu-table :showCheckbox="false">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="ID">编号</mu-th>
            <mu-th tooltip="名称">姓名</mu-th>
            <mu-th tooltip="状态">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in dialogdatas" :key="item.id">
            <mu-td>{{index + 1}}</mu-td>
            <mu-td>{{item.name}}</mu-td>
            <mu-td>{{item.status}}</mu-td>
          </mu-tr>
        </mu-tbody>
        <mu-tfoot slot="footer">
          <mu-tr>
            <mu-td>ID</mu-td>
            <mu-td>Name</mu-td>
            <mu-td>Status</mu-td>
          </mu-tr>
        </mu-tfoot>
      </mu-table>
    </div>
    <!-- end动态形成内容部分 -->
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary label="确定"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  // props:["dialog"],
  data () {
    return {
      dialog: false,//触发弹窗参数
      dialogtitle:"",
      dialogdatas:[],
    }
  },
  methods: {
    open (showdialog=false,dialogtitle='',dialogdatas=[]) {
      this.dialog = showdialog;//接受父元素传过来是否触发弹窗的bool参数
      this.dialogtitle = dialogtitle;
      this.dialogdatas=dialogdatas;//接受父元素传过来形成弹窗内容data数据
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
