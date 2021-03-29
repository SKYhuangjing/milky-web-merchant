import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [
                {
                
                    dataIndex: 'type',
                    title: '类型',
                }, 
            {
                dataIndex: 'value',
                title: '名称',
            }, 
          
            {
                dataIndex:'createTime',
                title:"创建时间",
                width:'200px'
            },
            {
                dataIndex: 'action',
                title: this.$t('common.label.action'),
                width: "140px"
            }],
            detailColumns: [ {
                "props": "createTime",
                renderContent: ({ value, dataSource }) => {
                    console.log("dataSource",dataSource)
                    
                return dataSource.createTime
                ? moment
                        .parseZone(dataSource.createTime)
                        .local()
                        .format('YYYY-MM-DD HH:mm:ss')
                : ''
                },
            },],
        }
    }
}