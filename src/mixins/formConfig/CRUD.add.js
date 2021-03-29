import axios from "@/axios"
export const addFormMixin = {
    data() {
        return {
            addFormConfig: {
                formLayout: "horizontal",
                validateFirst: true,
                // expression: [{
                //         rule: 'props.pageType === 0',
                //         showProps: ['parentUid', 'path']
                //     },
                //     {
                //         rule: 'props.pageType !== 0',
                //         hideProps: ['parentUid', 'path']
                //     }
                // ],
                columns: [{
                    type: "input",
                    props: "zhName",
                    label: this.$t('zh'),
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                }, {
                    props: "enName",
                    type: "input",
                    label: this.$t('en'),
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                },
                {
                    props: 'type',
                    type: 'radioGroup',
                    label: this.$t('pageType'),
                    defaultValue: 0,
                    options: [{
                        label: this.$t('list'),
                        value: 2
                    },
                    {
                        label: this.$t('detail'),
                        value: 3
                    },
                    {
                        label: this.$t('form'),
                        value: 1
                    }
                    ]
                },
                // {
                //     label: this.$t('parentMenu'),
                //     type: "tree-select",
                //     props: 'parentUid',
                //     allowClear: true,
                //     treeData: [],
                //     isHidden: true,
                // }, {
                //     type: "input",
                //     props: 'path',
                //     label: this.$t('pathOrIcon'),
                //     isHidden: true,
                // },
                {
                    type: "select",
                    searchApi: "/metadataApi/tableDict",
                    searchFetch: true,
                    searchLoading: false,
                    useToken: "jwt",
                    multiple: true,
                    options: [],
                    axios: axios,
                    props: "includeTables",
                    mode: "multiple",
                    label: this.$t("dataSource"),
                    fieldNames: {
                        text: 'code',
                        value: 'code',
                    },
                    rules: [{
                        required: true,
                        message: this.$t("common.verify.required")
                    }],
                },
                {
                    type: "select",
                    options: [],
                    props: "pageConfigId",
                    label: "发布版本",
                },
                    // {
                    //     type: "textarea",
                    //     props: "remark",
                    //     label: "版本日志",
                    //     isDisabled: true
                    // },

                ]
            }
        }
    }
}
