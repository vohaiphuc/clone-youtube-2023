import React, { Component } from 'react'
import { Col, Row, Space, Typography } from 'antd';

const { Text, Link } = Typography;

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Text type="success">Ant Design (warning)</Text>
                    </Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </div>
        )
    }
}
