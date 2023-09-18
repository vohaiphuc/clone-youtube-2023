import { Col } from 'antd'
import React, { Component } from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default class CardVideoItem extends Component {
    render() {
        let { video } = this.props
        return (
            <Col className='mb-5 px-3' style={{ width: "20%" }}>
                <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        )
    }
}
