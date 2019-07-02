var _dec, _class;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { hideLoading, navigateTo, showToast } from "@tarojs/taro-rn";
import { AtAvatar, AtIcon, AtTag } from "taro-ui";
import { ScrollView, Text, View } from "@tarojs/components-rn";

import { connect } from "@tarojs/taro-redux-rn";
import indexStyleSheet from "./index_styles";
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import showLoading from "../../utils/showLoading";

import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import { LATEST_TOPIC_LIST } from "../../constants";

var _styleSheet = indexStyleSheet;
let LatestDataDefaultList = (_dec = connect(state => state), _dec(_class = class LatestDataDefaultList extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.getList = () => {
      switch ("rn") {
        case 'h5':
          this.props.dispatch({
            type: LATEST_TOPIC_LIST,
            data: null
          });
          hideLoading();
          break;
        case 'weapp':
          this.getLatestTopic();
          break;
      }
    }, this.getLatestTopic = () => {
      callAPI({
        url: api.getLatestTopic()
      }).then(result => {
        Taro.hideLoading();
        if (result.status === 'error') {
          showToast(result.message);
        }
        console.log('获取最新节点', result);
        this.props.dispatch({
          type: LATEST_TOPIC_LIST,
          data: result.data
        });
      }).catch(error => {
        showToast(error.message);
      });
    }, this.goDetail = topic_id => {
      navigateTo({
        url: `/pages/detail/index?topic_id=${topic_id}`
      });
    }, _temp;
  }

  // static defaultProps = {
  //   latestTopicList: [
  //     {
  //       last_reply_by: '',//最新回复者
  //       last_modified: '', //最新回复时间戳
  //       replies: 0, //回复数
  //       title: '',
  //       member: {
  //         avatar_normal: '', //默认头像
  //         username: '',//昵称
  //       },
  //       node: {
  //         title: '',  //节点
  //       }
  //     }
  //   ]
  // }
  //
  //
  // static propTypes = {
  //   latestTopicList: propTypes.array
  // }


  componentWillMount() {
    showLoading();
    this.getList();
  }

  render() {

    const { latestTopicList } = this.props;

    return <ScrollView scrollY>
        {latestTopicList && latestTopicList.length > 0 && latestTopicList.map((item, i) => {
        const avatar = formatAvatar(item.member.avatar_normal);
        const lastReplyText = getDiffTimeStamp(item.last_modified);

        return <View key={`${i}-${item.id}`} onClick={this.goDetail.bind(this, item.id)} style={_styleSheet["pages-index-index-homepage__block"]}>
              <View style={_styleSheet["pages-index-index-homepage__block__top"]}>
                <View style={_styleSheet["pages-index-index-homepage__block__top__left"]}>
                  {avatar ? <AtAvatar size="small" image={avatar} style={_styleSheet["pages-index-index-homepage__block__top__left__thumb"]} /> : null}
                    <View style={_styleSheet["pages-index-index-homepage__block__top__left__info"]}>
                      <Text style={_styleSheet["pages-index-index-homepage__block__top__left__info__username"]}>{item.member.username}</Text>
                      <View style={_styleSheet["pages-index-index-homepage__block__top__left__info__subtitle"]}>
                        <Text style={_styleSheet["pages-index-index-homepage__block__top__left__info__subtitle__time"]}>{lastReplyText}</Text>
                        {item.last_reply_by && <Text style={_styleSheet["pages-index-index-homepage__block__top__left__info__subtitle__dot"]}>•</Text>}

                        {item.last_reply_by && <Text style={_styleSheet["pages-index-index-homepage__block__top__left__info__subtitle__text"]}>最后回复</Text>}

                        {item.last_reply_by && <Text style={_styleSheet["pages-index-index-homepage__block__top__left__info__subtitle__username"]}>{item.last_reply_by}</Text>}

                      </View>
                    </View>
                  <View style={_styleSheet["pages-index-index-homepage__block__top__left__right"]}>
                    <View style={_styleSheet["pages-index-index-homepage__block__top__left__right__top"]}>
                      <View style={_styleSheet["pages-index-index-homepage__block__top__left__right__top__node"]}>
                        <AtTag size="small" type="primary" style={_styleSheet["pages-index-index-homepage__block__top__left__right__top__node__title"]}>
                          {item.node.title}
                        </AtTag>
                      </View>
                      <AtIcon value="message" color="#666" size={12} style={_styleSheet["pages-index-index-homepage__block__top__left__right__top__icon"]} />
                      <Text style={_styleSheet["pages-index-index-homepage__block__top__left__right__top__reply"]}> {item.replies}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={_styleSheet["pages-index-index-homepage__block__bottom"]}>
                <Text style={_styleSheet["pages-index-index-homepage__block__bottom__text"]}> {item.title}</Text>
              </View>
            </View>;
      })}
      </ScrollView>;
  }
}) || _class);


export default LatestDataDefaultList;