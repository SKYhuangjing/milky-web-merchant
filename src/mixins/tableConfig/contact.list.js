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
            }, {
                
                dataIndex: 'sex',
                title: '性别',
            }, 
            {
                dataIndex: 'mobile',
                title: '联系方式',
            },
            {
                dataIndex: 'role',
                title: '角色',
            },
            {
                dataIndex: 'type',
                title: '类型',
            },
            {
                dataIndex: 'status',
                title: 'status',
                width: '100px'
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
            detailColumns: [
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
                
                }, {
                
                    type: "text",
                    props: "type",
                    mapping: [{
                            text: '兼职',
                            value: '0',
                        },
                        {
                            text: '全职',
                            value: '1',
                        },
                    ]
                
                } ,
                {
                
                    type: "text",
                    props: "status",
                    mapping: [{
                            text: '已签约',
                            value: '0',
                        },
                        {
                            text: '培训中',
                            value: '1',
                        }, {
                            text: '可带本',
                            value: '2',
                        }, {
                            text: '休假',
                            value: '3',
                        }, {
                            text: '离职',
                            value: '4',
                        },
                    ]
                
                },
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
            ],
        }
    }
}
