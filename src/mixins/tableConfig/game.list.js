import moment from 'moment'
export const listTableMixin = {
    data() {
        return {
            tableConfig: {
                scroll: {
                    x: 900
                },
                disableFlex: true,
                columns: [
                    {
                        props: 'code',
                        title: '编号',
                    },
                {
                    props: 'name',
                    title: '名称',
                },
                {
                    props: 'desc',
                    title: '简介',
                }, 
                 {
                    props: 'style',
                    title: '风格',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                        let arr=record.style.split(',')
                        console.log("arr",arr)
                        let resoult = ''
                        for (let i = 0; i < arr.length; i++) {
                            resoult += `<span style="border:1px solid #b7becb;padding:0px 7px;border-radius:4px;background:#eef1f4;word-wrap: break-word;word-break: keep-all; white-space: pre-wrap">${arr[i]}</span> `
                        }
                        return resoult
                    }
                }, 
                {
                    props: 'hardLevel',
                    title: '难度',
                }, 
                
                {
                    props: 'duration',
                    title: '时长',
                },
                {
                    props: 'people',
                    title: '人数',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                       return  `<span >${record.malePeople}男${record.femalePeople}女</span>`
                    },
                }, 
                {
                    props: 'price',
                    title: '价格',
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                       return  `<span >工作日：${record.weekdayPrice}<br></br>周末：${record.weekendPrice}</span>`
                    },
                },
                
                {
                    props: 'status',
                    title: '状态',
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
                }, 
                {
                    props:'createTime',
                    title:"创建时间",
                    type: 'render',
                    renderContent: ({
                        record
                    }) => {
                        return record.createTime
                    ? moment
                            .parseZone(record.createTime)
                            .local()
                            .format('YYYY-MM-DD HH:mm:ss')
                    : ''
                    },
                },

                ]
            },
           
        }
    }
}
