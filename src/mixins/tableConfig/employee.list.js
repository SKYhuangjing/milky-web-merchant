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
            }, 
            {
                dataIndex: 'role',
                title: '角色',
                width: '100px'
            },
            
            {
                dataIndex: 'type',
                title: '类型',
                width: '100px'
            },

            {
                dataIndex: 'status',
                title: '状态',
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
            detailColumns: [
                {
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
                },
                {
                    
                        type: "text",
                        props: "role",
                        mapping: [{
                                text: '普通员工',
                                value: '0',
                            },
                            {
                                text: '管理员',
                                value: '1',
                            },
                            {
                                text: '老板',
                                value: '2',
                            },
                        ]
                    
                }
            ],
        }
    }
}
