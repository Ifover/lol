import React, {Component} from 'react'
import './style.css'

class InfoRune extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='runepage'>
                <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://lol.qq.com/act/preseason/rune.html" style={{width: '100%', height: '735px'}}>
                </iframe>
            </div>
        )
    }


}

export default InfoRune