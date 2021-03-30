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
                width:'200px'
            },
            {
                dataIndex: 'action',
                title: 'action',
                width: "140px"
            }],
            detailColumns: [
                {

                    type: "text",
                    props: "status",
                    mapping: [{
                            text: '新建',
                            value: '0',
                        },
                        {
                            text: '装修中',
                            value: '1',
                        }, {
                            text: '可使用',
                            value: '2',
                        }, {
                            text: '暂停使用',
                            value: '3',
                        }, {
                            text: '下线',
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
