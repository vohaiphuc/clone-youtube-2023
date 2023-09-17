import React, { Component } from 'react'
import Scrollbar from 'smooth-scrollbar';


export default class ScrollbarBlock extends Component {
    componentDidMount() {
        Scrollbar.init(document.querySelector('#my-scrollbar'));
    }
    render() {
        return (
            <div data-scrollbar id="my-scrollbar" style={{
                width: "300px",
                height: "100px",
                background: "white",
                overflow: "auto"
            }}>
                <img src='./img/logo2.png' width={300}></img>
            </div>
        )
    }
}
