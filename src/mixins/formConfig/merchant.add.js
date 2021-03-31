import axios from "@/axios"
import { getUid } from '@/utils'
export const addFormMixin = {
    data() {
        return {
            zmodalFormConfig: {
                formLayout: "horizontal",
                validateFirst: true,
                columns: [
                {
                        props: "name",
                        type: "input",
                        label: "姓名",
                        col:12
                       
                },
                 {
                    props: "description",
                    type: "input",
                    label: "简介",
                    col:12
                   
                },
                {
                    props:"mobile",
                    type:'input',
                    label:"手机号码",
                    col:12
                },
                {
                    props: "status",
                    type: "select",
                    label: "状态", 
                    col:12,
                    options:[
                        {
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
                },
                {
                    props: "source",
                    type: "select",
                    label: "来源", 
                    col:12,
                    options:[
                        {
                            text: 'Internal',
                            value: 'Internal',
                        },
                    ]
                },

                ],
                detailColumns: [  
                    {
                    "props": "address",
                    renderContent: ({ value, dataSource }) => {
                       return <span >{dataSource.country}/{dataSource.city}/{dataSource.area}/{dataSource.address}</span>
                    },
                }
                ]
            }
        }
    }
}
