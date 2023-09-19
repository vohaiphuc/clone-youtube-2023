import React, { Component } from 'react'
import Video from './Video'
import Short from './Short'
import "./style.scss"

export default class CardBody extends Component {
    render() {
        return (

            <>
                <Video quantity={5} from={0} />
                <Video quantity={5} from={5} />
                <Short quantity={7} from={0} />
                <Video quantity={5} from={10} />
                <Video quantity={5} from={15} />
                <Short quantity={7} from={7} />
                <Video quantity={5} from={20} />
            </>
        )
    }
}
