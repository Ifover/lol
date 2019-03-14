import React, {Component} from 'react';
import './style.scss'
import ajax from '@/api/axios'


class PopularActivities extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      //存放正在进行的数据
      Hotdata: [],
      flag: false,
      //判断的唯一标准
      index: 0,
      //存放商城特惠的数据
      shopArr: [],
      //存放当前循环的数据
      realData: []
    })
  }
  //请求数据钩子函数
  componentDidMount() {
    //axios请求数据
    ajax.get('/v1/hot_activity').then(data => {
      //存数据
      this.setState({
        //把数据存到Hotdata里面
        Hotdata: data.data,
        //把数据存到realData里面
        realData: data.data
        //存完之后触发回调函数
      }, () => {
        //再存一个flag
        this.setState({
          flag: true
        })
      });
      // console.log(data.data);
    })
  }

  //自定义点击函数存一个value参数
  change(value) {
    //存数据的容器
    this.setState({
      //根据点击那个index-----value传值给index
      index: value,
      realData: []
    });
    //如果value是0
    switch (value) {
      case 0 :
        this.setState({
          realData: this.state.Hotdata
        })
        break;
      case 1 :
        if (this.state.shopArr.length > 0) {
          this.setState({
            realData: this.state.shopArr
          })
        } else {
          ajax.get("/v1/preferential").then(data => {
            console.log(data.data);
            this.setState({
              shopArr: data.data,
              realData: data.data
            })
          })
        }
        break;

      case 2:
        let arr = []
        this.state.Hotdata.map(item => {
          if (item.iStatus == 999) {
            arr.push(item)
          }
        })
        this.setState({
          realData: arr
        })
        break
    }
  }

  render() {
    let arr = [];
    if (this.state.flag) {
      this.state.realData.slice(0, 4).map((item, index) => {
        arr.push(
          <li key={index}>
            <div className="a-1"><img src={item.sSmallnewImgUrl}/></div>
            <div className="a-2">
              <p>{item.sName}</p>
              <a>{item.dtEnd}为止</a>
            </div>
          </li>
        )
      })
    }
    return (
      <div className="popular">
        <div className="margin_pac">
          <div className="popular-left">
            <div className="popular-left-top">
              <h3>热门活动</h3>
              <div className="popular-left-title">
                <span className={`a-1 ${this.state.index === 0 ? "active1" : ""}`}
                      onClick={this.change.bind(this, 0)}>正在进行</span>
                <span className={`a-1 ${this.state.index === 1 ? "active1" : ""}`}
                      onClick={this.change.bind(this, 1)}>商城特惠</span>
                <span className={`a-1 ${this.state.index === 2 ? "active1" : ""}`}
                      onClick={this.change.bind(this, 2)}>长期活动</span>
                <span className="te">更多</span>
              </div>
            </div>
            <div className="popular-left-bottom">
              <ul>

                {arr}

              </ul>
            </div>
          </div>
          <div className="popular-right">
            <div className="popular-right-top">
              <div className="left">
                <video className="side-down-video" autoPlay loop muted width="366" height="169">
                  <source src="//ossweb-img.qq.com/images/lol/v3/btn-download.mp4"/>
                </video>

              </div>
              <div className="right">
                <p>新手装备</p>
                <p>领取中心</p>
              </div>
            </div>
            <div className="popular-right-bottom">
              <ul>
                <li><a className="a-1"></a>在线客服</li>
                <li><a className="a-2"></a>秩序殿堂</li>
                <li><a className="a-3"></a>游戏资料</li>
                <li><a className="a-4"></a>峡谷之巅</li>
              </ul>
              <div className="threebox">
                <p className="b-1"><a className="b-4"></a>微信绑定<a className="b-5"></a></p>
                <p className="b-2"><a className="b-6"></a>LOL宇宙</p>
                <p className="b-3"><a className="b-7"></a>玩家社区</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default PopularActivities