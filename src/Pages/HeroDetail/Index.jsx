import React, {Component} from 'react'

import HeroDetail from '@/Components/HeroDetail/HeroDetail'

class index_HeroDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id
        }

    }


    render() {
        return (
            <HeroDetail id={this.state.id}/>
        )
    }

}


export default index_HeroDetail