/**
 * React版的图片懒加载
 */

import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class ImgLazy extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoaded: false,
        };
        this._handleScroll = this._handleScroll.bind(this);
        //使用函数节流，性能优先
        this.handleScroll = this.throttle(this._handleScroll, 100);
    }

    /**
     * 添加监听事件
     */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
        this._handleScroll();
    }

    /**
     * 移除事件
     */
    componentWillUnMount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }

    /**
     * 获取窗口的高度
     * @returns {XML}
     */
    getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    /**
     * 获取滚动条滚动的高度
     */
    getScrollTop() {
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        } else {
            scrollTop = window.scrollY || window.pageYOffset;
        }

        return scrollTop;
    }

    /**
     * 获取当前图片距离顶部的xy坐标
     */
    getNodeTop() {
        const viewTop = this.getScrollTop();

        const img = ReactDOM.findDOMNode(this); //当前节点
        const nodeTop = img.getBoundingClientRect().top + viewTop;
        const nodeBottom = nodeTop + img.offsetHeight;
        return {
            nodeTop: nodeTop,
            nodeBottom: nodeBottom,
        };
    }


    /**
     * 函数节流
     * @returns {XML}
     */
    throttle(fn, delay) {
        let timer = null;

        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    }

    /**
     * 处理滚动事件
     * @returns {XML}
     */
    _handleScroll() {
        const {offset} = this.props; //偏移量

        const {nodeTop ,nodeBottom} = this.getNodeTop();

        const viewTop = this.getScrollTop();
        const viewBottom = viewTop + this.getClientHeight();

        //当图片出现在视野范围内,设置真正的图片，同时移除监听
        if (nodeBottom + offset >= viewTop && nodeTop - offset <= viewBottom) {
            this.setState({
                isLoaded: true,
            });
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
        }
    }

    render() {
        const {
            className,
            style,
            src,
            placeholder} = this.props;
        const {isLoaded} = this.state;
        let true_src = isLoaded ? src : placeholder;
        return (
            <img className={className} style={style}
                 src={true_src}/>
        )
    }
}

ImgLazy.defaultProps = {
    placeholder: 'https://sf-static.b0.upaiyun.com/v-583bf474/global/img/user-64.png',//默认图片
    offset: 0,//默认距离
}