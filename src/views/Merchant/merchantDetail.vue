<template>
	<div>
		<div class="zen-table-content">
			
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
				<template slot="status" slot-scope="text, record">
					<a-switch
						v-model="record.status"
						@change="switchChangeHandel(record)"
					></a-switch>
				</template>
				<span slot="action" slot-scope="text, record">
					<a
						href="javascript:void(0)"
						@click="operationsHandle(record, 'details')"
						>details</a
					>
				</span>
			</ztable2>
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/CRUD.list.js'
import { addFormMixin } from '@/mixins/formConfig/CRUD.add.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin, addFormMixin],
	data() {
		return {
			dataSource: [],
			deleteVisible: false,
			visibleAddModal: false,
			saveLoading: false,
			searchConfig: {
				add: {
					text: this.$t('common.label.create'),
					type: 'primary',
					clickHandle: () => {
						this.editUid = null
						this.showAddModal()
					},
				},
			},
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/metadataApi/page',
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
</style>
