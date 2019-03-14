import React, {Component} from 'react'
import './style';
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
 

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
          mode: 'top',
          qbdata:[],
          hzdata:[],
          cosdata:[]
        }
        }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className='acbox'>
                    <div className="accontent">
                        <div className="acnav">
                        <Tabs>
                            <TabPane tab="全部活动" key="1">
                                <ul className="aclist">
                                    <li>
                                        <a href="#" className="imgbox">
                                            <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_2a235cbf21645df35e79ad2048097bc4/0" alt=""/>
                                            <p className="dal">以"金猪开盟红，峡谷年味浓"作为主题进行同人创作，赢取年限皮肤Q币奖励</p>
                                        </a>
                                        <p className="actitle">金猪开盟红-2019春节同人创作大赛</p>
                                        <p className="actdate">2019.1.25 - 2019.2.15</p>
                                        {/* <i className="status">已结束</i> */}
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane tab="正在进行" key="2">
                                <ul className="aclist">
                                    <li>
                                        <a href="#" className="imgbox">
                                            <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_2a235cbf21645df35e79ad2048097bc4/0" alt=""/>
                                            <p className="dal">以"金猪开盟红，峡谷年味浓"作为主题进行同人创作，赢取年限皮肤Q币奖励</p>
                                        </a>
                                        <p className="actitle">金猪开盟红-2019春节同人创作大赛</p>
                                        <p className="actdate">2019.1.25 - 2019.2.15</p>
                                        {/* <i className="status">已结束</i> */}
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane tab="已结束" key="3">
                                <ul className="aclist">
                                    <li>
                                        <a href="#" className="imgbox">
                                            <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_2a235cbf21645df35e79ad2048097bc4/0" alt=""/>
                                            <p className="dal">以"金猪开盟红，峡谷年味浓"作为主题进行同人创作，赢取年限皮肤Q币奖励</p>
                                        </a>
                                        <p className="actitle">金猪开盟红-2019春节同人创作大赛</p>
                                        <p className="actdate">2019.1.25 - 2019.2.15</p>
                                        {/* <i className="status">已结束</i> */}
                                    </li>
                                </ul>
                            </TabPane>
                        </Tabs>  
                        </div>
                    </div>
            </div>
        )
    }

}

export default Content