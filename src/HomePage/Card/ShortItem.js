import { Card, Col, Image } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { Component } from 'react'

export default class ShortItem extends Component {
    render() {
        let { quantity, video } = this.props
        let colWidth = Math.floor((100 / quantity) * 100) / 100
        return (
            <Col style={{ width: `calc(${colWidth}%)` }}>
                <Card
                    hoverable
                    bordered={false}
                    style={{ width: "100%" }}
                    className='bg-default p-0'
                >
                    <div style={{ overflow: "hidden", borderRadius: "20px", marginBottom: "12px" }}>
                        <Image src={video.thumbnail} />
                    </div>
                    <Meta
                        title={video.title}
                        description={video.view}
                    />
                </Card>
            </Col>
        )
    }
}
