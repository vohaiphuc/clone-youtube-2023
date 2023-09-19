import React, { Component } from 'react'
import CardVideo from './CardVideo'
import CardShort from './CardShort'
import { Scrollbar } from 'smooth-scrollbar-react'

export default class CardBody extends Component {
    render() {
        return (

            <>
                <CardVideo quantity={5} from={0} />
                <CardVideo quantity={5} from={5} />
                <CardShort quantity={7} from={0} />
                <CardVideo quantity={5} from={10} />
                <CardVideo quantity={5} from={15} />
                <CardShort quantity={7} from={7} />
                <CardVideo quantity={5} from={20} />
            </>
        )
    }
}
