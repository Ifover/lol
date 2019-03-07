import React, {Component} from 'react'
import './style';
import { Tabs } from 'antd';
 

class Content extends Component {
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className='ctbox'>
                <div className="con">
                    <div className="content">
                        <div className="nav">
                            <div className="card-container">
                                <Tabs type="card">
                                <TabPane tab="全部" key="1">
                                    <div>
                                    <li>111</li>
                                    </div>
                                </TabPane>
                                <TabPane tab="只看画作" key="2">
                                    <p>2</p>
                                </TabPane>
                                <TabPane tab="只看COS" key="3">
                                    <p>3</p>
                                </TabPane>
                                </Tabs>
                            </div>
                            <div className="rnav">
                                <Tabs>
                                    <TabPane tab="推荐" key="1">1</TabPane>
                                    <TabPane tab="最新" key="2">2</TabPane>
                                </Tabs>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Content