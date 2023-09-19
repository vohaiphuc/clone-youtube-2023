import { Image, Col, Card, Row, Avatar } from 'antd'
import Icon from '@ant-design/icons';
import React, { Component } from 'react'
import { LiveIcon, VerifyIcon } from '../../constant/IconsYt';

const { Meta } = Card;

export default class VideoItem extends Component {
    render() {
        let { video, quantity } = this.props
        let colWidth = Math.floor((100 / quantity) * 100) / 100
        let maxCharTitle = 50
        let maxCharChannelName = 20
        return (
            <Col style={{ width: `calc(${colWidth}%)` }}>
                <Card
                    bordered={false}
                    style={{ width: "100%" }}
                    className='bg-default p-0'
                >
                    <div className='card-video-thumbnail'>
                        <a href={video.url}>
                            <Image src={video.thumbnail} preview={false} />
                        </a>
                        <span className='card-video-duration'>{video.duration}</span>
                    </div>
                    <Row className='mt-3' gutter={[30, 0]}>
                        <Col span={3}>
                            <Avatar src={video.channelAvatar}></Avatar>
                        </Col>
                        <Col span={21}>
                            <div style={{ color: "#fff", marginBottom: "" }}>
                                <a href={video.url} className='card-video-title'>
                                    {video.title.length > maxCharTitle ? video.title.slice(0, maxCharTitle) + "..." : video.title}
                                </a>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className='mb-0 mr-1 card-sub-info'>{video.channelName.length > maxCharChannelName ? video.channelName.slice(0, maxCharChannelName) + "..." : video.channelName}</p>
                                {video.verified && <span><Icon component={VerifyIcon} className='card-video-verify' /></span>}
                            </div>
                            <div className="d-flex align-items-center card-sub-info">
                                <span className='card-view-seperator d-flex align-items-center'>{video.view}</span>
                                <span>{video.time}</span>
                            </div>
                            <div className={`card-video-live align-items-center justify-content-center mt-1 ${video.live ? "d-flex" : "d-none"}`}>
                                <Icon component={LiveIcon} className='mr-1' />
                                <span>LIVE</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    }
}
