import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import HeaderYoutube from './Components/HeaderYoutube';
import SidebarYoutube from './Components/SidebarYoutube';
import Scrollbar from 'smooth-scrollbar';
import React, { Component } from 'react'
import TagList from './Components/TagList';
import { Col, Row } from 'antd';



export default class App extends Component {
  componentDidMount() {
    console.log("Did mount");
    Scrollbar.init(document.querySelector('#my-scrollbar'), { alwaysShowTracks: true });
  }
  render() {
    return (
      <div className='bg-black'>
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <HeaderYoutube />
        <Row justify={'space-between'} gutter={[200, 0]}>
          <Col span={3}>
            <SidebarYoutube className="mr-3" />
          </Col>
          <Col span={21}>
            <TagList className="ml-5" />
          </Col>
        </Row>
      </div>
    );
  }
}
