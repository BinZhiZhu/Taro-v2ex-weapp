var _dec, _class;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { navigateTo, showToast } from "@tarojs/taro-rn";
import { AtAvatar, AtTag } from "taro-ui";
import { ScrollView, Text, View } from "@tarojs/components-rn";

import isEmpty from "lodash/isEmpty";
import { connect } from "@tarojs/taro-redux-rn";
import indexStyleSheet from "./index_styles";
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import showLoading from "../../utils/showLoading";
import showAlert from "../../utils/showAlert";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import { HOT_TOPIC_DATA } from "../../constants";

var _styleSheet = indexStyleSheet;
let LatestDataList = (_dec = connect(state => state), _dec(_class = class LatestDataList extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.getList = () => {
      switch ("rn") {
        case 'h5':
          showAlert('暂不支持H5哦~');
          break;
        case 'weapp':
          this.getLatestTopic();
          break;
      }
    }, this.getLatestTopic = () => {
      callAPI({
        url: api.getHotNodes()
      }).then(result => {
        Taro.hideLoading();
        if (result.status === 'error') {
          showToast(result.message);
        }
        console.log('获取最热节点', result);
        this.props.dispatch({
          type: HOT_TOPIC_DATA,
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

    const { hotTopics } = this.props;

    if (isEmpty(hotTopics)) {
      return null;
    }

    return <ScrollView scrollY>
        {hotTopics && hotTopics.length > 0 && hotTopics.map((item, i) => {
        const avatar = formatAvatar(item.member.avatar_normal);
        const lastReplyText = getDiffTimeStamp(item.last_modified);

        return <View key={`${i}-${item.id}`} onClick={this.goDetail.bind(this, item.id)} style={_styleSheet["pages-index-index-homepage__block"]}>
              <View style={_styleSheet["pages-index-index-homepage__block__left"]}>
                <View style={_styleSheet["pages-index-index-homepage__block__left__thumb"]}>
                  <AtAvatar image={avatar} size="small" style={_styleSheet["pages-index-index-homepage__block__left__thumb__img"]} />
                </View>
                <View style={_styleSheet["pages-index-index-homepage__block__left__info"]}>
                  <Text style={_styleSheet["pages-index-index-homepage__block__left__info__title"]}>{item.title}</Text>
                  <View style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle"]}>
                    {}
                    <AtTag
                // active
                size="small" type="primary" style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__node-title"]}>
                      {item.node.title}
                    </AtTag>
                    <View style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__dot"]}>
                      <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__dot__inner"]}>•</Text>
                    </View>
                    <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__username"]}>{item.member.username}</Text>
                    {item.last_reply_by ? <View style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_icon"]}>
                        <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__inner"]}>•</Text>
                        <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__username"]}>{lastReplyText}</Text>
                        <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__inner"]}>•</Text>
                      </View> : null}

                    {item.last_reply_by && <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_by"]}>最新回复来自
                        <Text style={_styleSheet["pages-index-index-homepage__block__left__info__subtitle__last_reply_by__username"]}> {item.last_reply_by}</Text>
                      </Text>}

                  </View>
                </View>
              </View>
              <View style={_styleSheet["pages-index-index-homepage__block__right"]}>

                <View style={_styleSheet["pages-index-index-homepage__block__right__inner"]}>
                  <AtTag active size="small" type="primary" style={_styleSheet["pages-index-index-homepage__block__right__inner__tag"]}>
                    {item.replies}
                  </AtTag>
                </View>
              </View>
            </View>;
      })}
      </ScrollView>;
  }
}) || _class);


export default LatestDataList;