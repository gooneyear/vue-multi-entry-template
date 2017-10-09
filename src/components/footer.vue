<template>
<div class="footer">
  <button type="button" name="button" class="btn btn-success" @click="dialogChange">dialogChange</button>
  Muse-UI ©2017 Created by Whisper
</div>
</template>

<style scoped>
.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
<script>

export default {
  store,
  data () {
    return {
      // count:0,
      dialogdatas:[//传递给dialog弹窗的数据
        {
          name: 'John Smith',
          status: 'Employed',
          selected: true
        },
        {
          name: 'Randal White',
          status: 'Unemployed'
        },
        {
          name: 'Stephanie Sanders',
          status: 'Employed',
        },
        {
          name: 'Steve Brown',
          status: 'Employed'
        },
        {
          name: 'Joyce Whitten',
          status: 'Employed'
        }
      ],
    }
  },
  computed:{

 },
  //methods Start
  methods: {
    dialogChange () {
      this.$emit('dialogEvent',true,this.dialogdatas);//抛出事件给父页面，触发弹窗
    },


  },
  //methods End
}
</script>
