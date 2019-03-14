import React, {Component} from 'react';
import ajax from '@/api/axios'
import {Icon} from 'antd'

class Strategy extends Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            strategy: []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps);
        if (nextProps.id) {
            ajax.get('/v1/strategy', {
                params: {
                    page: 1,
                    pagesize: 20,
                    p3: nextProps.id
                }
            }).then(data => {
                // console.log(data.data);
                if (data.data.status !== '-1') {
                    this.setState({
                        strategy: data.data.msg.result
                    })
                }
            })
        }
    }

    render() {
        let htmlArr = []
        // console.log(this.state.strategy);
        if (this.state.strategy.length > 0) {
            this.state.strategy.map((item, index) => {
                htmlArr.push(
                    <li key={index}>
                        <p className="a-1">
                            <span className="b-1" title={item.sTitle}><Icon type="caret-right"/>{item.sTitle.substr(0, 15)}</span>
                            <span className="b-2">来源:{item.sSource}</span>
                        </p>
                        <p className="a-2">
                            <span className="b-1">{item.dDate.split(" ")[0]}</span>
                            <span className="b-2">评分:<a><i style={{width: `${item.iScore * 10}%`}}></i></a></span>
                        </p>
                    </li>
                )
            })
        }
        return (
            <div className="strategy">
                <ul>
                    {htmlArr}
                </ul>
            </div>
        )
    }
}


export default Strategy