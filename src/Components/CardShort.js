import React, { Component } from 'react'
import { shorts } from '../constant/YtApi'
import CardShortItem from './CardShortItem'
import { Col, Row } from 'antd'
import Icon from '@ant-design/icons';
import { ShortIconColor } from '../constant/IconsYt'

export default class CardShort extends Component {
    renderShortList = () => {
        let { quantity, from } = this.props
        let shortList = shorts.slice(from, from + quantity)
        return shortList.map((video, index) => {
            return <CardShortItem video={video} key={index} quantity={quantity} />
        })
    }
    render() {
        return (
            <Row className='card-short py-4 mb-5'>
                <Col span={24} className='d-flex align-items-center mb-4'>
                    <Icon component={ShortIconColor} />
                    <span style={{ fontSize: "20px", marginLeft: "8px" }}>Shorts</span>
                </Col>
                {this.renderShortList()}
            </Row>
        )
    }
}
