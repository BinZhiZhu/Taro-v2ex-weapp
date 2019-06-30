var _dec, _class, _class2, _temp2;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { showToast } from "@tarojs/taro-rn";
import isEmpty from "lodash/isEmpty";
import { View } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";
import callAPI from "../../../utils/callAPI";
import api from "../../../utils/api";
import { NODE_INFO_DATA } from "../../../constants";
import showLoading from "../../../utils/showLoading";

let Index = (_dec = connect(state => state), _dec(_class = (_temp2 = _class2 = class Index extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      name: ''
    }, this.getNodeDetail = () => {
      const { name } = this.state;
      callAPI({
        url: api.getNodeInfo({
          name
        })
      }).then(result => {
        Taro.hideLoading();
        if (result.status === 'error') {
          showToast(result.message);
        }
        console.log('获取节点信息', result);
        this.props.dispatch({
          type: NODE_INFO_DATA,
          data: result.data
        });
      }).catch(error => {
        showToast(error.message);
      });
    }, _temp;
  }

  componentWillMount() {
    showLoading();
    const params = this.$router.params;
    if (params.name) {
      this.setState({
        name: params.name || ''
      }, () => {
        this.getNodeDetail();
      });
    }
  }

  render() {

    const { getNodeInfo } = this.props;

    if (isEmpty(getNodeInfo)) {
      return null;
    }

    return <View className="at-article">
          <View className="at-article__h1">{getNodeInfo.title}</View>
          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__h3">{getNodeInfo.header}</View>
              <View className="at-article__p" />
            </View>
          </View>
        </View>;
  }
}, _class2.config = {
  navigationBarTitleText: '节点'
}, _temp2)) || _class);


export default Index;