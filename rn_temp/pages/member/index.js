var _dec, _class, _class2, _temp2;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { showToast } from "@tarojs/taro-rn";
import { AtAvatar, AtTag } from "taro-ui";
import { Text, View } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import { MEMBER_INFO_DATA } from "../../constants";
import showLoading from "../../utils/showLoading";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(state => state), _dec(_class = (_temp2 = _class2 = class Index extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      username: ''
    }, this.getMemberInfo = () => {
      const { username } = this.state;
      callAPI({
        url: api.getUserinfo({
          username
        })
      }).then(result => {
        Taro.hideLoading();
        console.log('获取用户信息', result);
        this.props.dispatch({
          type: MEMBER_INFO_DATA,
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
    if (params.username) {
      this.setState({
        username: params.username || ''
      }, () => {
        this.getMemberInfo();
      });
    }
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: MEMBER_INFO_DATA,
      data: null
    });
  }

  render() {

    const { memberInfo } = this.props;

    const avatar = memberInfo && memberInfo.avatar_normal;

    return <View style={_styleSheet["pages-member-index"]}>
        <View style={_styleSheet["pages-member-index__avatar"]}>
          <AtAvatar image={avatar} style={_styleSheet["pages-member-index__avatar__thumb"]} />
          {}
            {}
            {}
          {}
          <AtTag active size="small" type="primary" style={_styleSheet["pages-member-index__avatar__thumb__status"]}>
            ONELINE
          </AtTag>
        </View>
        <View style={_styleSheet["pages-member-index__info"]}>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>用户名</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.username}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>城市</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.location ? memberInfo.location : '未设置'}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
          <Text style={_styleSheet["pages-member-index__info__inner__title"]}>座右铭</Text>
          <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.tagline ? memberInfo.tagline : '未设置'}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>GitHub</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.github ? memberInfo.github : '未设置'}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>博客</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.website ? memberInfo.website : '未设置'}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>twitter</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.twitter ? memberInfo.twitter : '未设置'}</Text>
          </View>
          <View style={_styleSheet["pages-member-index__info__inner"]}>
            <Text style={_styleSheet["pages-member-index__info__inner__title"]}>传送门</Text>
            <Text style={_styleSheet["pages-member-index__info__inner__value"]}>{memberInfo.url}</Text>
          </View>
        </View>
      </View>;
  }
}, _class2.config = {
  navigationBarTitleText: '个人主页'
}, _temp2)) || _class);


export default Index;