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
			>
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
import { listTableMixin } from '@/mixins/tableConfig/game.list.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin],
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
