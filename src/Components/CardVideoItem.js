import { Image, Col, Card, Row, Avatar } from 'antd'
import React, { Component } from 'react'

const { Meta } = Card;

export default class CardVideoItem extends Component {
    render() {
        let { video } = this.props
        let maxCharTitle = 60
        let maxCharChannelName = 20
        return (
            <Col style={{ width: "calc(20% - 1px)" }}>
                <Card
                    hoverable
                    bordered={false}
                    style={{ width: "100%" }}
                    className='bg-default p-0'
                >
                    <div style={{ width: "100%", height: "175px", objectFit: 'cover', overflow: "hidden", borderRadius: "20px" }}>
                        <Image src={video.thumbnail} />
                    </div>
                    <Row className='mt-3' gutter={[30, 0]}>
                        <Col span={3}>
                            <Avatar src={video.channelAvatar}></Avatar>
                        </Col>
                        <Col span={21}>
                            <div style={{ color: "#fff", marginBottom: "" }}>
                                <b>{video.title.length > maxCharTitle ? video.title.slice(0, maxCharTitle) + "..." : video.title}</b>
                            </div>
                            <p className='mb-0 card-sub-info'>{video.channelName.length > maxCharChannelName ? video.channelName.slice(0, maxCharChannelName) + "..." : video.channelName}</p>
                            <div className="d-flex align-items-center card-sub-info">
                                <span className='card-view-seperator d-flex align-items-center'>{video.view}</span>
                                <span>{video.time}</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    }
}
