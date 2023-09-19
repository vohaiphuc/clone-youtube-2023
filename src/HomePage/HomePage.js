import { Col, Row } from 'antd';
import React, { Component } from 'react'
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import TagList from './TagList/TagList';
import CardBody from './Card/CardBody';
import "./style.scss"
import { initScrollbar } from "./Init.js"

export default class HomePage extends Component {
    componentDidMount() {
        initScrollbar()
    }
    render() {
        return (
            <div className='bg-default'>
                <div className='sidebar'>
                    <Sidebar />
                </div>

                <div className='fixed-header d-flex flex-column align-items-end'>
                    <Row className='pl-3 pr-4 header' align={'middle'} justify={'space-between'}>
                        <Header />
                    </Row>
                    <Row className='tag-list-header'>
                        <TagList />
                    </Row>
                </div>

                <div id="body-scrollbar" data-scrollbar>
                    <Row className='card-video' justify={'end'}>
                        <Col>
                            <CardBody />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
