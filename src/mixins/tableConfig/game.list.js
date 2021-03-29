import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [{
                dataIndex: 'name',
                title: '姓名',
                width: '100px'
            }, {
                dataIndex: 'style',
                title: '风格',
                width: '100px'
            }, 
            {
                dataIndex: 'desc',
                title: 'Desc',
                width: '100px'
                
            },
            {
                dataIndex: 'femalePeople',
                title: 'femalePeople',
                width: '100px'
            },
            {
                dataIndex: 'weekdayPrice',
                title: 'weekdayPrice',
                width: '100px'
            },
            {
                dataIndex: 'weekendPrice',
                title: 'weekendPrice',
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
