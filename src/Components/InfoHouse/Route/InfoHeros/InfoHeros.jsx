import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Radio} from 'antd';
import ajax from '@/api/axios'

const RadioGroup = Radio.Group;

class InfoHeros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            indexType: "ALL",
            realData: []
        }
    }

    componentDidMount() {
        ajax.get('/v1/champion').then(data => {
            let arr = []
            for (let i in data.data.data) {
                arr.push(data.data.data[i])
            }
            this.setState({
                //存放英雄数据
                imgData: arr,
                //存放循环数据
                realData: arr,
                //存放装备数据
                zhuangBei: [],
                //存放召唤师技能数据
                cD: [],
                heroList: {}
            }, () => {
                this.setState({
                    flag: true
                })
            });
        })
    }

    change2(type) {
        if (type !== 'ALL') {
            let heroDetial = this.state.imgData;
            let arr = []
            for (let item of heroDetial) {
                let flag = false;
                item.tags.map(v => {
                    if (v === type) {
                        flag = true
                    }
                });
                if (flag) {
                    arr.push(item)
                }
            }
            this.setState({
                realData: arr
            });
        } else {
            this.setState({
                realData: this.state.imgData
            });
        }
    }

    render() {
        let heroArr = [];
        // console.log(this.state.realData);

        if (this.state.flag) {
            // console.log(this.state.realData);
            this.state.realData.map((item, index) => {
                // console.log(item);
                heroArr.push(
                    <li key={index}>
                        <Link to={'/info-detail/' + item.id}>
                            <img src={`http://ossweb-img.qq.com/images/lol/img/champion/${item.id}.png`}/>
                            <p>{item.name}</p>
                        </Link>
                    </li>
                )
            })
        }
        return (
            <div>
                <RadioGroup onChange={(e) => {
                    this.change2(e.target.value)
                }} defaultValue={'ALL'}>
                    <Radio value={'ALL'}>所有英雄</Radio>
                    <Radio value={'Fighter'}>战士</Radio>
                    <Radio value={'Mage'}>法师</Radio>
                    <Radio value={'Assassin'}>刺客</Radio>
                    <Radio value={'Tank'}>坦克</Radio>
                    <Radio value={'Marksman'}>射手</Radio>
                    <Radio value={'Support'}>辅助</Radio>
                </RadioGroup>
                <ul className="herohouse-img">
                    {heroArr}
                </ul>
            </div>
        );
    }

}

export default InfoHeros