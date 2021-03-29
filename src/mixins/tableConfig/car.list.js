import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [
                {
                
                    dataIndex: 'merchantName',
                    title: '商家',
                }, 
            {
                dataIndex: 'roomName',
                title: '房间',
            }, 
            {
                dataIndex: 'gameName',
                title: '剧本',
            }, 
            {
                dataIndex:'startTime',
                title:"开车时间",
            },
            {
                dataIndex: 'peopleNum',
                title: '当前人数',
            }, 
            {
                dataIndex: 'price',
                title: '价格',
            }, 
            {
                dataIndex: 'shared',
                title: '拼车状态',
            }, 
            {
                dataIndex: 'stage',
                title: '阶段',
            }, 
            {
                dataIndex: 'createTime',
                title: '创建时间',
            }, 
            {
                dataIndex: 'status',
                title: '状态',
            }, 
            {
                dataIndex: 'action',
                title: this.$t('common.label.action'),
                width: "140px"
            }],
            detailColumns: [ 
                {
                    props: "peopleNum",
                    renderContent: ({ value, dataSource }) => {
                        console.log("dataSource",dataSource)
                        
                    return <span >剧本:{dataSource.malePeople}男{dataSource.femalePeople}女<br></br>当前:{dataSource.readyMale}男{dataSource.readyFemale}女</span>
                    },
                },
                {
                    props: "stage",
                    renderContent: ({ value, dataSource }) => {
                        console.log("dataSource",dataSource)
                        
                    return <span >玩家已就位:{dataSource.playerReady?'是':'否'}<br></br>DM 已就位:{dataSource.actorReady?'是':'否'}</span>
                    },

                },
                {
                    props: "shared",
                    renderContent: ({ value, dataSource }) => {
                      return dataSource.shared?'是':'否'
                    },

                },
                {

                    type: "text",
                    props: "status",
                    mapping: [{
                            text: '想法',
                            value: '0',
                        },
                        {
                            text: '预定中',
                            value: '1',
                        }, {
                            text: '锁场',
                            value: '2',
                        }, {
                            text: '开场',
                            value: '3',
                        }, {
                            text: '完成',
                            value: '4',
                        }, {
                            text: '放弃',
                            value: '5',
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
                        .format('YYYY-MM-DD HH:mm')
                : ''
                },
                
                
                
            },],
        }
    }
}
