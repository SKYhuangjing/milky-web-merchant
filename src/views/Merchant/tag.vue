<template>
	<div>
		<div class="zen-table-content">
			
		<ztable
				:tableConfig="tableConfig"
				:dataSource="dataSource"
				:loading="loading"
				:pagination="pagination"
				@change="tableChangeHandle"
			></ztable>
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/tag.list.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin],
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
				queryApi: '/api/tag/page',
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
