import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [{
                dataIndex: 'name',
                title: '姓名',
                width: '100px'
            }, {
                dataIndex: 'sex',
                title: '性别',
                width: '100px'
            }, {
                dataIndex: 'role',
                title: 'Page Type',
                width: '100px'
            },

            {
                dataIndex: 'status',
                title: 'status',
                width: '100px'
            },
            {
                dataIndex:'createTime',
                title:"创建时间",
                width:'100px'
            },
            {
                dataIndex: 'action',
                title: this.$t('common.label.action'),
                width: "140px"
            }],
            detailColumns: [],
        }
    }
}
