import React, {Component} from 'react'
import './style.scss'
import ajax from '@/api/axios'

class InfoItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsList: {},
            flag: false
        }
    }

    mouseCoords = function (ev) {
        let obj = {}
        // console.log(ev);
        // console.log(ev.clientX, ev.clientY);
        if (ev.clientX || ev.clientY) {
            obj = {x: ev.clientX + 10, y: ev.clientY + 10};
            // console.log(obj);
        }
        // $('#popPupItem').css({top: obj.y, left: obj.x})
    }

    componentWillMount() {
        ajax.get('/v1/items').then(data => {
            this.setState({itemsList: data.data.data}, () => {
                this.setState({flag: true})
            })
            // console.log(data.data.data);
        })
    }

    render() {
        let obj = {}
        let htmlArr = [];
        if (this.state.flag) {
            obj = this.state.itemsList;
            for (let i in obj) {
                htmlArr.push(
                    <li key={i}>
                        <img src={`//ossweb-img.qq.com/images/lol/img/item/${i}.png`} alt="" onMouseMove={(e) => {  //
                            // this.mouseCoords(e);
                            // this.setState({showItem: item})
                        }}/>
                        <p>{obj[i].name}</p>
                    </li>
                )
            }

        }
        return (
            <div id='infoitems'>
                <ul className='items-box'>
                    {htmlArr}
                </ul>
                {/*<div id="popPupItem" className="poppup-item">*/}
                {/*<div id="itemFromTop">*/}
                {/*<div className="item-title">*/}
                {/*<img src="//ossweb-img.qq.com/images/lol/img/item/3031.png" alt=""/>*/}
                {/*<h4>{this.state.showItem.name}</h4>*/}
                {/*<p className="cons">*/}
                {/*售价或合成费用：<span>1225</span>*/}
                {/*</p>*/}
                {/*</div>*/}
                {/*<div className="item-desc">*/}

                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }


}

export default InfoItems