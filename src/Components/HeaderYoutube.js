import { Col, Row, Input, Avatar } from 'antd'
import React, { Component } from 'react'
import Icon, { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { CreateVideoIcon, MenuIcon, MicrophoneIcon, NotificationIcon, SearchIcon } from '../constant/IconsYt';

export default class HeaderYoutube extends Component {
    state = {
        showSearchIcon: false
    }
    handleShowSearhIcon = () => {
        this.setState({ showSearchIcon: !this.state.showSearchIcon })
    }
    handleHideSearhIcon = () => {
        this.setState({ showSearchIcon: !this.state.showSearchIcon })
    }
    render() {
        return (
            <Row align={'middle'} className='pl-3 pr-4 header' justify={'space-between'}>
                <Col span={4} className='d-flex align-items-center h-100'>
                    {/* <Icon component={MenuIcon} className='mr-2 icon-hover' style={{ fontSize: "18px" }} />
                    <img src="./img/logo.svg" alt="" style={{ height: "20px" }} /> */}
                </Col>
                <Col xl={10} xxl={9} className='d-flex align-items-center h-75 search-bar justify-content-end'>
                    <div className="input-prefix">{this.state.showSearchIcon ? <SearchOutlined /> : <span />}</div>
                    <Input size="large" placeholder="Search" className={`search-input ${this.state.showSearchIcon ? "selecting" : ""}`} onClick={this.handleShowSearhIcon} onBlur={this.handleHideSearhIcon} />
                    <Icon component={SearchIcon} className='i-search mr-3' />
                    <Icon component={MicrophoneIcon} className='i-mic' />
                </Col>
                <Col span={4} className='d-flex align-items-center h-100 justify-content-end'>
                    <Icon component={CreateVideoIcon} className='mx-1 icon-hover' />
                    <Icon component={NotificationIcon} className='mx-1 icon-hover' />
                    <Avatar size={32} src='https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg' className='mx-3' />
                </Col>
            </Row>
        )
    }
}
