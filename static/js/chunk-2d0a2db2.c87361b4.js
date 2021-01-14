(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2db2"],{"0062":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"任务名称",prop:"jobName"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入任务名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jobName,callback:function(t){e.$set(e.queryParams,"jobName",t)},expression:"queryParams.jobName"}})],1),a("el-form-item",{attrs:{label:"任务组名",prop:"jobGroup"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请任务组名",clearable:"",size:"small"},model:{value:e.queryParams.jobGroup,callback:function(t){e.$set(e.queryParams,"jobGroup",t)},expression:"queryParams.jobGroup"}},e._l(e.jobGroupOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",{attrs:{label:"执行状态",prop:"status"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请选择执行状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",{attrs:{label:"执行时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"cyan",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:remove"],expression:"['monitor:job:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:remove"],expression:"['monitor:job:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.handleClean}},[e._v("清空")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:export"],expression:"['monitor:job:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.jobLogList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"日志编号",width:"80",align:"center",prop:"jobLogId"}}),a("el-table-column",{attrs:{label:"任务名称",align:"center",prop:"jobName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"任务组名",align:"center",prop:"jobGroup",formatter:e.jobGroupFormat,"show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"调用目标字符串",align:"center",prop:"invokeTarget","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"日志信息",align:"center",prop:"jobMessage","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"执行状态",align:"center",prop:"status",formatter:e.statusFormat}}),a("el-table-column",{attrs:{label:"执行时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:query"],expression:"['monitor:job:query']"}],attrs:{size:"mini",type:"text",icon:"el-icon-view"},on:{click:function(a){return e.handleView(t.row)}}},[e._v("详细")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:"调度日志详细",visible:e.open,width:"700px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"日志序号："}},[e._v(e._s(e.form.jobLogId))]),a("el-form-item",{attrs:{label:"任务名称："}},[e._v(e._s(e.form.jobName))])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务分组："}},[e._v(e._s(e.form.jobGroup))]),a("el-form-item",{attrs:{label:"执行时间："}},[e._v(e._s(e.form.createTime))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"调用方法："}},[e._v(e._s(e.form.invokeTarget))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"日志信息："}},[e._v(e._s(e.form.jobMessage))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"执行状态："}},[0==e.form.status?a("div",[e._v("正常")]):1==e.form.status?a("div",[e._v("失败")]):e._e()])],1),a("el-col",{attrs:{span:24}},[1==e.form.status?a("el-form-item",{attrs:{label:"异常信息："}},[e._v(e._s(e.form.exceptionInfo))]):e._e()],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.open=!1}}},[e._v("关 闭")])],1)],1)],1)},r=[],n=(a("d81d"),a("b775"));function l(e){return Object(n["a"])({url:"/monitor/jobLog/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/monitor/jobLog/"+e,method:"delete"})}function s(){return Object(n["a"])({url:"/monitor/jobLog/clean",method:"delete"})}function u(e){return Object(n["a"])({url:"/monitor/jobLog/export",method:"get",params:e})}var c={name:"JobLog",data:function(){return{loading:!0,ids:[],multiple:!0,showSearch:!0,total:0,jobLogList:[],open:!1,dateRange:[],form:{},statusOptions:[],jobGroupOptions:[],queryParams:{pageNum:1,pageSize:10,jobName:void 0,jobGroup:void 0,status:void 0}}},created:function(){var e=this;this.getList(),this.getDicts("sys_job_status").then((function(t){e.statusOptions=t.data})),this.getDicts("sys_job_group").then((function(t){e.jobGroupOptions=t.data}))},methods:{getList:function(){var e=this;this.loading=!0,l(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.jobLogList=t.rows,e.total=t.total,e.loading=!1}))},statusFormat:function(e,t){return this.selectDictLabel(this.statusOptions,e.status)},jobGroupFormat:function(e,t){return this.selectDictLabel(this.jobGroupOptions,e.jobGroup)},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.jobLogId})),this.multiple=!e.length},handleView:function(e){this.open=!0,this.form=e},handleDelete:function(e){var t=this,a=this.ids;this.$confirm('是否确认删除调度日志编号为"'+a+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return i(a)})).then((function(){t.getList(),t.msgSuccess("删除成功")}))},handleClean:function(){var e=this;this.$confirm("是否确认清空所有调度日志数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return s()})).then((function(){e.getList(),e.msgSuccess("清空成功")}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有调度日志数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return u(t)})).then((function(t){e.download(t.msg)}))}}},m=c,p=a("2877"),d=Object(p["a"])(m,o,r,!1,null,null,null);t["default"]=d.exports}}]);