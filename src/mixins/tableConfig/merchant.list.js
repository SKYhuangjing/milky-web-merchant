import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            
            tableColumns: [
                {
                    dataIndex: 'code',
                    title: '编号',
                },
                {
                    dataIndex: 'name',
                    title: '名称',
                },
                {
                    dataIndex: 'description',
                    title: '简介',
                },
                {
                    dataIndex: 'mobile',
                    title: '联系方式',
                },
                {
                    dataIndex: 'address',
                    title: "地址",
                    sorter: true
                }, 
                {
                    dataIndex: 'status',
                    title: 'Status',
                },
                {
                    dataIndex: 'action',
                    title: this.$t('common.label.action'),
                    // scopedSlots: {
                    //     customRender: 'operations'
                    // },
                    width: "140px"
                } ],
            detailColumns: [  
                {
                "props": "address",
                renderContent: ({ value, dataSource }) => {
                    const { address } = dataSource
                    console.log("dataSource",dataSource)
                    
                return <span >{dataSource.country} {dataSource.state} {dataSource.city} {dataSource.area} {dataSource.address}</span>
                },
            },
            {

                type: "text",
                props: "status",
                mapping: [{
                        text: '上线',
                        value: '1',
                    },
                    {
                        text: '下线',
                        value: '0',
                    }, {
                        text: '筹备中',
                        value: '2',
                    }, {
                        text: '可营业',
                        value: '3',
                    }, {
                        text: '暂停营业',
                        value: '4',
                    },
                ]
            
            }
            ]
        }
    }
}
