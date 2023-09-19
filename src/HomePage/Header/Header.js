import { Col, Row, Input, Avatar } from 'antd'
import React, { Component } from 'react'
import Icon, { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { CreateVideoIcon, MenuIcon, MicrophoneIcon, NotificationIcon, SearchIcon } from '../../constant/IconsYt';
import "./style.scss"

export default class Header extends Component {
    state = {
        showSearchIcon: false
    }
    handleShowSearhIcon = () => {
        this.setState({ showSearchIcon: true })
    }
    handleHideSearhIcon = () => {
        this.setState({ showSearchIcon: false })
    }
    render() {
        return (
            <>
                <Col span={4} className='d-flex align-items-center h-100'>
                </Col>
                <Col xl={10} xxl={9} className='d-flex align-items-center search-bar justify-content-end'>
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
            </>
        )
    }
}
