import { Row } from 'antd'
import React, { Component } from 'react'
import { videos } from '../constant/YtApi'
import CardVideoItem from './CardVideoItem'

export default class CardVideo extends Component {
    renderVideoList = () => {
        let { quantity, from } = this.props
        let videoList = videos.slice(from, from + quantity)
        return videoList.map((video, index) => {
            return <CardVideoItem video={video} key={index}></CardVideoItem>
        })
    }
    render() {
        return (
            <Row style={{ height: "520px", width: "100%" }}>
                {this.renderVideoList()}
            </Row>
        )
    }
}
