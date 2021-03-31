<template>
	<div>
		<div class="zen-table-content">
			<div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建剧本
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
				:destroyOnClose="true"
				size="middle"
				:formConfig="zmodalFormConfig"
		      >  
			</zmodal>
		
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/game.list.js'
import { addFormMixin } from '@/mixins/formConfig/game.add.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin,addFormMixin],
	data() {
		return {
			dataSource: [],
			deleteVisible: false,
			visibleAddModal: false,
			saveLoading: false,
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/api/res/game/page',
			},
		}
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
		zmodalHandleCancel(){
            this.visibleAddModal=false
		},
		// 创建剧本
		zmodalHandleOk(e, values) {
			console.log(values)
			let arr=[]
			values.style.forEach((res)=>{
                arr.push(res.key)
			})
			console.log("arr",arr.toString())
			axios
				.post(`/api/res/game/create`, {
					createGameRoleRequests:values.createGameRoleRequests,
					desc:values.desc,
					dressUp:values.dressUp,
					duration:values.duration,
					hardLevel:values.hardLevel,
					name:values.name,
					style:arr.toString(),
					status:values.status,
					weekdayPrice:values.price.weekdayPrice,
					weekendPrice:values.price.weekendPrice,
					malePeople:values.people.malePeople,
					femalePeople:values.people.femalePeople,
					merchantUid:localStorage.getItem("uid")

				})
				.then((res) => {
					this.$message.success('Successful')
					this.visibleAddModal=false
					this.getTableDatas()
				})
				.finally((res) => {
					this.visibleAddModal=false
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
