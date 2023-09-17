import React, { Component } from 'react'
import { TAG_LIST } from '../constant/TagList'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';

export default class TagList extends Component {
    constant = {
        minSlidePrev: 0,
        slideStep: 100
    }
    state = {
        translateX: this.constant.minSlidePrev,
    }
    renderButtonList = () => {
        return TAG_LIST.map((item, index) => {
            return <button key={index} className="btn btn-youtube-tag mr-3">{item}</button>
        })
    }
    handleSlideBackward = () => {
        let newPos = this.state.translateX + this.constant.slideStep
        if (newPos >= this.constant.minSlidePrev) {
            newPos = this.constant.minSlidePrev
        }
        this.setState({
            translateX: newPos
        })
    }
    handleSlideForward = () => {
        let exceedWidth = this.calTagListWidth()
        if (exceedWidth < 0) {
            let newPos = this.state.translateX - this.constant.slideStep
            if (newPos <= exceedWidth) {
                newPos = exceedWidth
            }
            this.setState({
                translateX: newPos
            })
        }
    }
    calTagListWidth = () => {
        let tagsElem = document.querySelectorAll(".btn.btn-youtube-tag.mr-3")
        let tagListWidth = 0
        for (let i = 0; i < tagsElem.length; i++) {
            const ele = tagsElem[i];
            tagListWidth = tagListWidth + ele.offsetWidth + 16
        }
        let containerWidth = document.querySelectorAll(".tag-container")[0].offsetWidth
        let exceedWidth = containerWidth - tagListWidth
        return exceedWidth
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
                <div className={`tag-arrow tag-arrow-next ${this.state.translateX <= this.calTagListWidth() ? "d-none" : ""}`}>
                    <RightOutlined className='icon' onClick={this.handleSlideForward} />
                </div>
            </div>
        )
    }
}
