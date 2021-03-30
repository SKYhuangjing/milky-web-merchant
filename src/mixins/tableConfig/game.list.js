import moment from 'moment'
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
                dataIndex: 'desc',
                title: '简介',
            }, 
             {
                dataIndex: 'style',
                title: '风格',
            }, 
            {
                dataIndex: 'hardLevel',
                title: '难度',
            }, 
            
            {
                dataIndex: 'duration',
                title: '时长',
            },
            {
                dataIndex: 'people',
                title: '人数',
            }, 
            {
                dataIndex: 'price',
                title: '价格',
            },
            
            {
                dataIndex: 'status',
                title: '状态',
            }, 
            {
                dataIndex:'createTime',
                title:"创建时间",
            },
            {
                dataIndex: 'action',
                title: 'action',
                // scopedSlots: {
                //     customRender: 'operations'
                // },
            }],
            detailColumns: [
                {
                    "props": "style",
                    renderContent: ({ value, dataSource }) => {
                       return <span >{dataSource.style}</span>
                    },
                },
                {
                    "props": "people",
                    renderContent: ({ value, dataSource }) => {
                        
                    return <span >{dataSource.malePeople}男{dataSource.femalePeople}女</span>
                    },
                },
                {
                    "props": "createTime",
                    renderContent: ({ value, dataSource }) => {                        
                    return dataSource.createTime
                    ? moment
                            .parseZone(dataSource.createTime)
                            .local()
                            .format('YYYY-MM-DD HH:mm:ss')
                    : ''
                    },
                },
                {
                    "props": "price",
                    renderContent: ({ value, dataSource }) => {
                        
                    return <span >工作日：{dataSource.weekdayPrice}<br></br>周末：{dataSource.weekendPrice}</span>
                    },
                },
                {

                    type: "text",
                    props: "status",
                    mapping: [{
                            text: '已购买',
                            value: '0',
                        },
                        {
                            text: '内测中',
                            value: '1',
                        }, {
                            text: '被埋',
                            value: '2',
                        }, {
                            text: '可预订',
                            value: '3',
                        }, {
                            text: '暂停预定',
                            value: '4',
                        }, {
                            text: '下架',
                            value: '5',
                        },
                    ]
                
                }
            ],
        }
    }
}
