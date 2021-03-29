import TYPE_MAP from "@/views/Merchant/mapping.js";
export const listTableMixin = {
    data() {
        return {
            tableColumns: [{
                dataIndex: 'gid',
                title: 'Page',
                sorter: true
            }, {
                dataIndex: 'zhName',
                title: 'Page Title',
                sorter: true
            }, {
                dataIndex: 'type',
                title: 'Page Type',
                sorter: true
            },

            {
                dataIndex: 'publishVersion',
                title: 'Version',
                width: '100px'
            },
            {
                dataIndex: 'action',
                title: this.$t('common.label.action'),
                // scopedSlots: {
                //     customRender: 'operations'
                // },
                width: "140px"
            }],
            detailColumns: [{
                props: "gid",
                type: "link"
            }, {
                props: "zhName",
                type: "link"
            }, {
                props: 'type',
                type: "text",
                mapping: TYPE_MAP(this)
            }],
            express: [{
                props: 'status',
                rule: 'props == 1',
                color: 'lime', //灰色系
            },
            {
                props: 'status',
                rule: 'props == 2',
                color: 'green' //绿色系
            }
            ]
        }
    }
}
