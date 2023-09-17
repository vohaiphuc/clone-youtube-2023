import React, { Component } from 'react'
import CardVideo from './CardVideo'
import CardShort from './CardShort'

export default class MainBody extends Component {
    render() {
        return (
            <div>
                <CardVideo />
                <CardShort />
            </div>
        )
    }
}
