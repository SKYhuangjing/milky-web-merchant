<template>
	<div>
		<div class="zen-table-content">
			<div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建商家
			   </a-button>
			 </div>
			<ztable2
				:columns="tableColumns"
				:detailColumns="detailColumns"
				:dataSource="dataSource"
				:loading="loading"
				:pagination="pagination"
				@change="tableChangeHandle"
				@action="action"
				:express="express"
			>
				<span slot="action" slot-scope="text, record">
					<a
						href="javascript:void(0)"
						@click="operationsHandle(record, 'details')"
						>details</a
					>
				</span>
				
			</ztable2>
			 <a-modal
					title="创建商家"
					:visible="addMerchantModal"
					:confirm-loading="confirmLoading"
					@cancel="handleCancel"
					:width="900"
					>
					<a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"  @submit="handleSubmit">
							<a-form-item label="地址">
							     <v-distpicker></v-distpicker>
							</a-form-item>
							<a-form-item label="电话">
							      <a-input placeholder="请输入电话号码"  />
							</a-form-item>
	                </a-form>
			  </a-modal>
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
			addMerchantModal: false,
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
            this.addMerchantModal=true
		},
		 handleCancel(e) {
				this.addMerchantModal = false;
		},
		// 创建员工
		handleOk(e, values) {
			console.log(values)
			this.form.validateFields((err, values) => {
				if (!err) {
				     console.log('Received values of form: ', values);
				}
			});
			this.okLoading = true
			axios
				.post(`/api/employee/create`, {
					contactUid:getUid(),
					imgUrl:'',
					merchantUid:getUid(),
					name:values.name,
					role:values.role,
					sex:values.sex,
					status:values.status,
					type:values.type
				})
				.then((res) => {
					this.$message.success('Successful')
					this.ipInfo = values
					this.addMerchantModal=false
				})
				.finally((res) => {
					this.okLoading = false
					this.addMerchantModal=false
				})
		},
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
