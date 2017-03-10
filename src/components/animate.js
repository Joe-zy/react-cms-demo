import React from 'react'
import {Breadcrumb} from 'antd'

// 结尾组件
export default class myAnimate extends React.Component {
    constructor(props) {
        super(props)   
    }
    render() {
        return (
            <div>
                <div className="bread-cont">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>导航二</Breadcrumb.Item>
                        <Breadcrumb.Item>关注</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="ani-box">
                    <img src="./src/assets/images/myimage.jpg" width="150"className="animated fadeInUp lastPic" />
                    <span className="animated flipInX ege">我的头像</span>
                </div>
            </div>
        )
    }       
}