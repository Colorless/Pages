/**
 * @Component 包装 - Wrapper
 * @Type 容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/12/2 15:20
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="main_wrapper">
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}