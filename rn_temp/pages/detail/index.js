var _dec, _class;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { navigateTo, showToast } from "@tarojs/taro-rn";
import { AtAvatar, AtTag } from "taro-ui";
import isEmpty from "lodash/isEmpty";
import { RichText, Text, View } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";
import showLoading from "../../utils/showLoading";
import showAlert from "../../utils/showAlert";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import { TOPIC_DETAIL_DATA, TOPIC_REPLIES_DATA } from "../../constants";
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import { TaroRichText } from 'taro_rich_text';
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(state => state), _dec(_class = class Index extends Taro.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      topic_id: 0
    }, this.clearData = () => {
      this.props.dispatch({
        type: TOPIC_REPLIES_DATA,
        data: null
      });
      this.props.dispatch({
        type: TOPIC_DETAIL_DATA,
        data: null
      });
    }, this.getList = () => {
      switch ("rn") {
        case 'h5':
          showAlert('暂不支持H5哦~');
          break;
        case 'weapp':
          this.getTopicReplies();
          this.getTopicDetail();
          break;
      }
    }, this.getTopicReplies = () => {
      const { topic_id } = this.state;
      callAPI({
        url: api.getReplies({
          topic_id
        })
      }).then(result => {
        Taro.hideLoading();
        console.log('获取帖子回复', result);
        this.props.dispatch({
          type: TOPIC_REPLIES_DATA,
          data: result.data
        });
      }).catch(error => {
        showToast(error.message);
      });
    }, this.getTopicDetail = () => {
      const { topic_id } = this.state;
      callAPI({
        url: api.getTopics({
          id: topic_id
        })
      }).then(result => {
        Taro.hideLoading();
        if (result.status === 'error') {
          showToast(result.message);
        }
        console.log('获取帖子详情', result);
        this.props.dispatch({
          type: TOPIC_DETAIL_DATA,
          data: result.data
        });
      }).catch(error => {
        showToast(error.message);
      });
    }, this.getMemberData = username => {
      navigateTo({
        url: `/pages/member/index?username=${username}`
      });
    }, _temp;
  }

  componentWillMount() {

    showLoading();

    this.clearData();

    const params = this.$router.params;
    console.log('params', params);
    if (params.topic_id) {
      this.setState({
        topic_id: params.topic_id
      }, () => {
        this.getList();
      });
    }
  }

  /**
   * 获取回复
   */


  /**
   * 获取话题
   */


  render() {

    const { topicDetail, topicReplies } = this.props;

    if (isEmpty(topicDetail)) {
      return null;
    }

    const data = topicDetail[0];

    const difftime = getDiffTimeStamp(data.last_modified);

    return <View style={_styleSheet["pages-detail-index"]}>
        <View style={_styleSheet["pages-detail-index__topic"]}>
          <View style={_styleSheet["pages-detail-index__topic__top"]}>
          <View onClick={this.getMemberData.bind(this, data.member.username)} style={_styleSheet["pages-detail-index__topic__top__left"]}>
            {data.member.avatar_normal ? <AtAvatar size="small" image={formatAvatar(data.member.avatar_normal)} style={_styleSheet["pages-detail-index__topic__top__left__thumb"]} /> : null}

            {data && difftime ? <View style={_styleSheet["pages-detail-index__topic__top__left__info"]}>
                <Text style={_styleSheet["pages-detail-index__topic__top__left__info__username"]}>{data.member.username}</Text>
                <View style={_styleSheet["pages-detail-index__topic__top__left__info__subtitle"]}>
                  <Text style={_styleSheet["pages-detail-index__topic__top__left__info__subtitle__text"]}>at {difftime}，{data.replies}回复</Text>
                </View>
              </View> : null}

          </View>
            <View style={_styleSheet["pages-detail-index__topic__top__right"]}>
              {data ? <AtTag size="small" type="primary" style={_styleSheet["pages-detail-index__topic__top__right__title"]}>
                  {data.node.title}
                </AtTag> : null}
            </View>
          </View>

          {data && <View style={_styleSheet["pages-detail-index__topic__bottom"]}>
              <View style={_styleSheet["pages-detail-index__topic__bottom__title"]}>
                <Text style={_styleSheet["pages-detail-index__topic__bottom__title__text"]}>{data.title}</Text>
              </View>
              <View style={_styleSheet["pages-detail-index__topic__bottom__line"]} />
              <View style={_styleSheet["pages-detail-index__topic__bottom__content"]}>
                {}
                  {}
                  {}
                {}
                <TaroRichText raw={false} type="markdown" richText={data.content} />
                {data.content && <View style={_styleSheet["pages-detail-index__topic__bottom__content__line"]} />}
              </View>
            </View>}
        </View>
        {topicReplies && topicReplies.length > 0 && topicReplies.map((item, i) => {
        const avatar = formatAvatar(item.member.avatar_normal);
        const lastReplyText = getDiffTimeStamp(item.last_modified);
        return <View key={`${i}-${item.id}`} style={_styleSheet["pages-detail-index__reply"]}>
              <View style={_styleSheet["pages-detail-index__reply__left"]}>
                <View style={_styleSheet["pages-detail-index__reply__left__thumb"]}>
                  {avatar ? <AtAvatar size="small" image={item.member.avatar_normal} /> : null}
                </View>
                <View style={_styleSheet["pages-detail-index__reply__left__info"]}>
                  <View style={_styleSheet["pages-detail-index__reply__left__info__top"]}>
                    <Text style={_styleSheet["pages-detail-index__reply__left__info__top__username"]}>{item.member.username}</Text>
                    <View style={_styleSheet["pages-detail-index__reply__left__info__top__subtitle"]}>
                      <View style={_styleSheet["pages-detail-index__reply__left__info__top__subtitle__time"]}>{lastReplyText}</View>
                      <Text style={_styleSheet["pages-detail-index__reply__left__info__top__subtitle__count"]}>#{i + 1}楼</Text>
                    </View>
                  </View>
                  <View style={_styleSheet["pages-detail-index__reply__left__info__bottom"]}>
                    <RichText nodes={item.content} style={_styleSheet["pages-detail-index__reply__left__info__bottom__content"]} />
                  </View>
                </View>
              </View>
              <View style={_styleSheet["pages-detail-index__reply__right"]} />
            </View>;
      })}

        {topicReplies && topicReplies.length === 0 && <Text style={_styleSheet["pages-detail-index__empty"]}>该话题目前没有回复</Text>}
      </View>;
  }
}) || _class);


export default Index;