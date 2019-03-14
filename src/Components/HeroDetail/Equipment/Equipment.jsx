import React, {Component} from 'react';


class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentIndex: 0,
            blocks: []
        }

    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps);
        this.setState({
            blocks: nextProps.blocks
        })

    }

    fn_Change_equipment_Index(value) {
        this.setState({
            equipmentIndex: value
        })
    }

    render() {
        let summonerSmiteArr = [];
        let aramArr = [];
        let blocks = this.state.blocks;
        if (blocks.length > 0) {
            // console.log(blocks);
            summonerSmiteArr.push(
                <div id='summoner_smite' key={'SummonerSmite'}
                     style={{display: this.state.equipmentIndex === 0 ? 'block' : 'none'}}>
                    {
                        blocks[1].recommended.map((item, index) => {
                            if (index === 0 || index === 4 || index === 6 || index === 7) {
                                return (
                                    <dl key={index}>
                                        <dt><span>{item.type.toUpperCase()}</span></dt>
                                        {
                                            item.items.map((v, i) => {
                                                return (
                                                    <dd key={i}>
                                                        <img key={i}
                                                             src={`https://ossweb-img.qq.com/images/lol/img/item/${v.id}.png`}/>
                                                    </dd>
                                                )
                                            })
                                        }
                                    </dl>
                                )
                            }
                        })
                    }
                </div>
            );
            aramArr.push(
                <div id='aram' key={'Aram'}
                     style={{display: this.state.equipmentIndex === 1 ? 'block' : 'none'}}>
                    {
                        blocks[0].recommended.slice(0, 4).map((item, index) => {
                            return (
                                <dl key={index}>
                                    <dt><span>{item.type.toUpperCase()}</span></dt>
                                    {
                                        item.items.map((v, i) => {
                                            return (
                                                <dd key={i}>
                                                    <img key={i}
                                                         src={`https://ossweb-img.qq.com/images/lol/img/item/${v.id}.png`}/>
                                                </dd>
                                            )
                                        })
                                    }
                                </dl>
                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div className="equipment">
                <div className={`equipment-li ${this.state.equipmentIndex === 0 ? "active" : ""}`}
                     onClick={this.fn_Change_equipment_Index.bind(this, 0)}>召唤师峡谷
                </div>
                <div className={`equipment-li ${this.state.equipmentIndex === 1 ? "active" : ""}`}
                     onClick={this.fn_Change_equipment_Index.bind(this, 1)}>极地大乱斗
                </div>
                {summonerSmiteArr}
                {aramArr}
            </div>

        )
    }
}

export default Equipment