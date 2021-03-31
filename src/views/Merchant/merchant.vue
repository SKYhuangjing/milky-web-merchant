<template>
	<div>
		<div class="zen-table-content">
			<div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建商家
			   </a-button>
			 </div>
			<ztable
				:tableConfig="tableConfig"
				:dataSource="dataSource"
				:loading="loading"
				:pagination="pagination"
				@change="tableChangeHandle"
			></ztable>
			  <zmodal
				title="创建剧本"
				:visible="visibleAddModal"
				@handleOk="zmodalHandleOk"
				@handleCancel="zmodalHandleCancel"
				@submit="handleSubmit"
				:destroyOnClose="true"
				size="middle"
				:formConfig="zmodalFormConfig"
		      >  
			  <template>
				   <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
				   <a-form-item label="地址" :label-col="{ span: 4 }"  >
                        <v-distpicker></v-distpicker>
                    </a-form-item>
					 </a-form>
			  </template>
			</zmodal>
		
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/merchant.list.js'
import { addFormMixin } from '@/mixins/formConfig/merchant.add.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin, addFormMixin],
	data() {
		return {
			dataSource: [],
			visibleAddModal: false,
			saveLoading: false,
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/api/merchant/page',
			},
		}
	},
	beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
	methods: {
		operationsHandle(record, type) {
			if (type === 'details') {
			    this.$router.push('/detail')
			} 
		},
		
		init() {
			this.getTableDatas()
		},
		addHandle(){
            this.visibleAddModal=true
		},
		 zmodalHandleCancel(e) {
				this.visibleAddModal = false;
		},
		// 创建员工
		zmodalHandleOk(e, values) {
			console.log(values)
		     return
			axios
				.post(`/api/merchant/create`, {
					merchantUid:localStorage.getItem("uid")
				})
				.then((res) => {
					this.$message.success('Successful')
					this.ipInfo = values
					this.visibleAddModal=false
				})
				.finally((res) => {
					this.okLoading = false
					this.visibleAddModal=false
				})
		},
		handleSubmit(value){
			console.log("submit",value)
			return
		}
	},
	mounted() {
		this.init()
	},
	components: {
	},
}
</script>
<style lang="less">
.operationsListActive li {
	color: @brand1-6;
	padding: @space*1px;
}
.operationsListActive li:hover {
	cursor: pointer;
	background-color: color(~`colorPalette('@{brand1-6}', 1) `);
}
.OptionItem{
	 display: flex;
	 justify-content:flex-end;
	 padding: 10px 0px;
}
.addItem{

}
</style>
