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
                   
                }, {
                    
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
                }, {
                    props: 'maxPeople',
                    title: '最多人数',
                    sorter: true
                },
                {
                    props: 'status',
                    title: 'status',
                    width: '100px',
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
                    props:'createTime',
                    title:"创建时间",
                    width:'200px',
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
