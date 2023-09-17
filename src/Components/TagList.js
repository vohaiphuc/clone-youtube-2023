import React, { Component } from 'react'
import { TAG_LIST } from '../constant/TagList'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';

export default class TagList extends Component {
    constant = {
        slideStartPosition: 0,
        slideStep: 100,
        lengthDiff: 1, // length difference btw ".tag-list" and ".tag-container"
    }
    state = {
        translateX: this.constant.slideStartPosition,
    }
    renderButtonList = () => {
        return TAG_LIST.map((item, index) => {
            return <button key={index} className="btn btn-youtube-tag mr-3">{item}</button>
        })
    }
    handleSlideBackward = () => {
        this.setState({
            translateX: this.state.translateX + this.constant.slideStep
        })
    }
    handleSlideForward = () => {
        this.setState({
            translateX: this.state.translateX - this.constant.slideStep
        })
    }
    componentDidMount() {
        let tagsElem = document.querySelectorAll(".btn.btn-youtube-tag.mr-3")
        let tagListWidth = 0
        for (let i = 0; i < tagsElem.length; i++) {
            const ele = tagsElem[i];
            tagListWidth = tagListWidth + ele.offsetWidth + 16
        }
        let tagContainerWidth = document.querySelectorAll(".tag-container")[0].offsetWidth
        this.setState({ lengthDiff: tagContainerWidth - tagListWidth })
    }
    render() {
        return (
            <div className='tag-container'>
                <div className={`tag-arrow tag-arrow-prev ${this.state.translateX >= 0 ? "d-none" : ""}`}>
                    <LeftOutlined className='icon' onClick={this.handleSlideBackward} />
                </div>
                <div style={{
                    marginTop: "13px",
                    transform: "translateX(" + this.state.translateX + "px)"
                }} className='tag-list'>
                    {this.renderButtonList()}
                </div>
                <div className={`tag-arrow tag-arrow-next ${this.state.translateX <= this.state.lengthDiff ? "d-none" : ""}`}>
                    <RightOutlined className='icon' onClick={this.handleSlideForward} />
                </div>
            </div>
        )
    }
}
