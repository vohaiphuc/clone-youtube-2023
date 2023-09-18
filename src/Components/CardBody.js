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
                <CardVideo quantity={5} from={10} />
                <CardVideo quantity={5} from={15} />
                <CardVideo quantity={5} from={20} />
            </>

        )
    }
}
