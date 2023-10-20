"use strict";(self["webpackChunkdocker_xray"]=self["webpackChunkdocker_xray"]||[]).push([[68],{6068:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sub"},[t("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.centerDialogVisible=!0}}},[e._v("添加")])],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"danger"},on:{click:e.delSubscribe}},[e._v("删除")])],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"warning"},on:{click:e.updateSubscribe}},[e._v("更新订阅")])],1)],1),t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{select:e.select,"select-all":e.selectAll}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"subscribename",label:"订阅别名",width:"80"}}),t("el-table-column",{attrs:{prop:"subscribeurl",label:"订阅地址",width:"200"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("div",{staticClass:"subscribeurl"},[e._v(e._s(s.row.subscribeurl))])]}}])}),t("el-table-column",{attrs:{prop:"isupdate",label:"启用更新"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.isupdate)+" ")]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editSubscribe(s.row)}}},[e._v("编辑")])]}}])})],1),t("el-dialog",{attrs:{title:"xray",visible:e.centerDialogVisible,width:"40%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"订阅别名",prop:"subscribename"}},[t("el-input",{model:{value:e.ruleForm.subscribename,callback:function(t){e.$set(e.ruleForm,"subscribename",t)},expression:"ruleForm.subscribename"}})],1),t("el-form-item",{attrs:{label:"订阅地址",prop:"subscribeurl"}},[t("el-input",{model:{value:e.ruleForm.subscribeurl,callback:function(t){e.$set(e.ruleForm,"subscribeurl",t)},expression:"ruleForm.subscribeurl"}})],1),t("el-form-item",{attrs:{label:"启用更新",prop:"isupdate"}},[t("el-switch",{model:{value:e.ruleForm.isupdate,callback:function(t){e.$set(e.ruleForm,"isupdate",t)},expression:"ruleForm.isupdate"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确定")]),t("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},i=[],l=(s(7658),s(454)),u={data(){return{tableData:[{isupdate:!0,uuid:"1",subscribename:"ikuuu",subscribeurl:"http://www.baidu.com"},{isupdate:!0,uuid:"2",subscribename:"ikuuu",subscribeurl:"http://www.baidu.com"}],needActionArr:[],centerDialogVisible:!1,ruleForm:{subscribename:"",subscribeurl:"",isupdate:!0},rules:{subscribename:[{required:!0,message:"请输入订阅别名",trigger:"blur"},{min:2,max:10,message:"长度大于2字符",trigger:"blur"}],subscribeurl:[{required:!0,message:"请输入订阅地址",trigger:"blur"},{min:2,max:100,message:"订阅地址地址过长请简化地址",trigger:"blur"}]},actionType:"add"}},methods:{select(e,t){this.needActionArr.length>0&&this.needActionArr.findIndex((({uuid:e})=>{t.uuid}))||this.needActionArr.push(t)},selectAll(e){this.needActionArr=e},updateSubscribe(){(0,l.Ox)().then((e=>{this.$message.info(e.message)})).finally((()=>{setTimeout((()=>{this.getSubscribe()}),2e3)}))},getSubscribe(){(0,l.tN)().then((e=>{200==e.status?this.tableData=e.list:this.$message.error(e.message)}))},delSubscribe(){if(!this.needActionArr.length)return this.$message.info("未选择要删除的项");(0,l.B$)({actionArr:this.needActionArr}).then((e=>{this.$message.success(e.message)})).catch((e=>{this.$message.error(e.message)})).finally((()=>{this.getSubscribe()}))},editSubscribe(e){if(!this.needActionArr)return this.$message.info("未选择要编辑的项");this.ruleForm=e,this.actionType="edit",this.centerDialogVisible=!0},submitForm(e){this.$refs[e].validate((e=>{e&&"add"==this.actionType?(0,l.U9)(this.ruleForm).then((e=>{this.$message.success(e.message)})).catch((e=>{this.$message.error(e.message)})).finally((()=>{this.centerDialogVisible=!1,this.getSubscribe(),this.ruleForm={subscribename:"",subscribeurl:"",isupdate:!0}})):e&&"edit"==this.actionType&&(0,l.EB)(this.ruleForm).then((e=>{this.$message.success(e.message)})).catch((e=>{this.$message.error(e.message)})).finally((()=>{this.centerDialogVisible=!1,this.getSubscribe(),this.ruleForm={subscribename:"",subscribeurl:"",isupdate:!0}}))}))},resetForm(e){this.$refs[e].resetFields()}},mounted(){this.getSubscribe()}},a=u,n=s(1001),c=(0,n.Z)(a,r,i,!1,null,"28e2e136",null),o=c.exports}}]);
//# sourceMappingURL=68.c2739949.js.map