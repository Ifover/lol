import React, {Component} from 'react';
import axios from 'axios';


class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentIndex: 0
        }

    }

    fn_Change_equipment_Index(value) {
        let htmlArr = []
        this.setState({
            equipmentIndex: value
        })
    }

    render() {
        return (
            <div className="equipment">
                <div className={`equipment-li ${this.state.equipmentIndex === 0 ? "active" : ""}`}
                     onClick={this.fn_Change_equipment_Index.bind(this, 0)}>召唤师峡谷
                </div>
                <div className={`equipment-li ${this.state.equipmentIndex === 1 ? "active" : ""}`}
                     onClick={this.fn_Change_equipment_Index.bind(this, 1)}>极地大乱斗
                </div>
                <div>
                    <span>起始装备</span>
                    <p>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                    </p>
                    <span>核心装备</span>
                    <p>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                        <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                    </p>
                </div>
            </div>

        )
    }
}

export default Equipment