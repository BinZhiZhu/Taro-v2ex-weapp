var _dec, _class, _class2, _temp2;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { showToast } from "@tarojs/taro-rn";
import { AtAvatar, AtFloatLayout } from "taro-ui";
import { connect } from "@tarojs/taro-redux-rn";
import { RichText, Text, View } from "@tarojs/components-rn";
import allNodes from "../../../utils/allNodes";
import indexStyleSheet from "./index_styles";
import callAPI from "../../../utils/callAPI";
import api from "../../../utils/api";
import { NODE_INFO_DATA } from "../../../constants";
import showLoading from "../../../utils/showLoading";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(state => state), _dec(_class = (_temp2 = _class2 = class Index extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isShow: false
      // goDetail = (name)=>{
      //   navigateTo({
      //     url:`/pages/nodes/detail/index?name=${name}`
      //   });
      // }

    }, this.onShowLayout = name => {
      showLoading();
      this.getNodeDetail(name);
      this.setState({
        isShow: true
      });
    }, this.handleClose = () => {
      this.setState({
        isShow: false
      }, () => {
        this.props.dispatch({
          type: NODE_INFO_DATA,
          data: null
        });
      });
    }, this.getNodeDetail = name => {
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

  render() {

    const { isShow } = this.state;

    const { getNodeInfo } = this.props;

    const allNodesList = allNodes;

    return <View style={_styleSheet["pages-nodes-index"]}>
        {allNodesList && allNodesList.map((node, i) => {
        return <View key={`${i}-${node.id}`} style={_styleSheet["pages-nodes-index__item"]}>
              <View style={_styleSheet["pages-nodes-index__item__title"]}>
                <Text style={_styleSheet["pages-nodes-index__item__title__text"]}>{node.title}</Text>
              </View>
              {node.nodes && node.nodes.map((item, j) => {
            return <Text onClick={this.onShowLayout.bind(this, item.short_name)} key={`${j}`} style={_styleSheet["pages-nodes-index__item__child"]}>
                    {item.full_name}
                  </Text>;
          })}
            </View>;
      })}

        {getNodeInfo ? <View style={_styleSheet["pages-nodes-index__layout"]}>
            <AtFloatLayout isOpened={isShow} title={getNodeInfo.title} onClose={this.handleClose.bind(this)}>
              <View style={_styleSheet["pages-nodes-index__layout__info"]}>
                <View style={_styleSheet["pages-nodes-index__layout__info__left"]}>
                  <AtAvatar image={getNodeInfo.avatar_normal} style={_styleSheet["pages-nodes-index__layout__info__left__avatar"]} />
                  <View style={_styleSheet["pages-nodes-index__layout__info__left__header"]}>
                    <Text style={_styleSheet["pages-nodes-index__layout__info__left__header__title"]}>{getNodeInfo.title}</Text>
                    <Text style={_styleSheet["pages-nodes-index__layout__info__left__header__subtitle"]}>{getNodeInfo.title_alternative}</Text>
                  </View>
                </View>
                <View style={_styleSheet["pages-nodes-index__layout__info__right"]}>
                  <Text style={_styleSheet["pages-nodes-index__layout__info__right__topics"]}>话题 {getNodeInfo.topics}</Text>
                  <Text style={_styleSheet["pages-nodes-index__layout__info__right__star"]}>收藏 {getNodeInfo.stars}</Text>
                </View>
              </View>
              <View style={_styleSheet["pages-nodes-index__layout__content"]}>
                <RichText nodes={getNodeInfo.header} style={_styleSheet["pages-nodes-index__layout__content__header"]} />
              </View>
            </AtFloatLayout>
          </View> : null}
      </View>;
  }
}, _class2.config = {
  navigationBarTitleText: '节点'
}, _temp2)) || _class);


export default Index;