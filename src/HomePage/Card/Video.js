import { Row } from 'antd'
import React, { Component } from 'react'
import { videos } from '../../constant/YtApi'
import VideoItem from "./VideoItem";

export default class Video extends Component {
    renderVideoList = () => {
        let { quantity, from } = this.props
        let videoList = videos.slice(from, from + quantity)
        return videoList.map((video, index) => {
            return <VideoItem video={video} key={index} quantity={quantity}></VideoItem>
        })
    }
    render() {
        return (
            <Row className='mb-4 pl-3 pr-4 video-list' style={{ width: "100%" }}>
                {this.renderVideoList()}
            </Row>
        )
    }
}
