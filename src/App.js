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
import CardBody from './Components/CardBody';



export default class App extends Component {
	componentDidMount() {
		Scrollbar.init(document.querySelector('#my-scrollbar'), { alwaysShowTracks: true });
		Scrollbar.init(document.querySelector('#my-scrollbar-2'), { alwaysShowTracks: true });
	}
	render() {
		return (
			<div className='bg-black'>
				<Row>
					<Col style={{ position: "fixed", left: "0", top: "0", zIndex: 2, width: "240px" }}>
						<SidebarYoutube />
					</Col>
				</Row>
				<Row className='header-tag-list' justify={'end'}>
					<HeaderYoutube />
					<Col style={{ width: "calc(100vw - 240px)" }}>
						<TagList className="ml-5" />
					</Col>
				</Row>
				<div id="my-scrollbar-2" data-scrollbar style={{ width: "100vw", height: "100vh" }}>
					<Row justify={'end'} style={{ marginTop: "116px" }}>
						<Col style={{ width: "calc(100vw - 240px)" }}>
							<CardBody className="ml-5" />
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
