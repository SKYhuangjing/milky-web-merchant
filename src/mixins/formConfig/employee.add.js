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
                       
                },
                {
                    type: "input",
                    props: "contactUid",
                    label: "imgUrl",
            
                },
                 {
                    props: "sex",
                    type: "input",
                    label: "性别",
                   
                },
                {
                    props:"role",
                    type:'input',
                    label:"角色"
                },
                {
                    props: "status",
                    type: "input",
                    label: "状态", 
                },
                {
                    props: "type",
                    type: "input",
                    label: "类型", 
                },

                ],
            }
        }
    }
}
