import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [{
                dataIndex: 'name',
                title: '姓名',
            }, {
                dataIndex: 'style',
                title: '风格',
            }, {
                dataIndex: 'maxPeople',
                title: '最多人数',
                sorter: true
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
                // scopedSlots: {
                //     customRender: 'operations'
                // },
                width: "140px"
            }],
            detailColumns: [],
        }
    }
}
