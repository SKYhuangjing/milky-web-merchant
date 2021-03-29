import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            
            tableColumns: [
                {
                    dataIndex: 'code',
                    title: 'Code',
                },
                {
                    dataIndex: 'name',
                    title: 'Name',
                },
                {
                    dataIndex: 'description',
                    title: 'Description',
                },
                {
                    dataIndex: 'mobile',
                    title: 'Mobile',
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
                    
                return <span >{dataSource.country}/{dataSource.city}/{dataSource.area}/{dataSource.address}</span>
                },
            }
            ]
        }
    }
}
