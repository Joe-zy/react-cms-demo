import React from 'react'
import { Calendar,Breadcrumb } from 'antd';

export default class myCalendar extends React.Component {
    dateCellRender = (value) => {
        return <div>自定义日数据 {value.getDayOfMonth()}</div>
    }

    monthCellRender = (value) => {
        return <div>自定义月数据 {value.getMonth()}</div>
    }

    render() {
        return (
            <div>
                <div className="bread-cont">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>功能演示</Breadcrumb.Item>
                        <Breadcrumb.Item>日历</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            <Calendar defaultValue={new Date('2010-10-10')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
            </div>
        )
    }
}