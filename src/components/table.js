import React from 'react'
import {Table, Icon,Breadcrumb} from 'antd'


export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }
    //组件挂载后执行
    componentDidMount() {
        const data = []

        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Joe-zy朱越${i}`,
                age: 23,
                address: `高新区天府三街${i}号`,
                remark: 'http://sukitori.com',
                operate: '暂无'
            })
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">andt测试</a>
            }
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }]

        const { selectedRowKeys } = this.state

        //定义每行选择时效果
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        //定义分页
        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <div>
                <div className="bread-cont">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>功能演示</Breadcrumb.Item>
                        <Breadcrumb.Item>表格</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
            </div>
        )
    }
}
