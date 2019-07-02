
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "pages-detail-index": {
    "paddingTop": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5),
    "paddingLeft": scalePx2dp(10.5)
  },
  "pages-detail-index__empty": {
    "paddingLeft": scalePx2dp(10.5),
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__topic": {
    "display": "flex",
    "flexDirection": "column"
  },
  "pages-detail-index__topic__top": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "pages-detail-index__topic__top__left": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "pages-detail-index__topic__top__left__info": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": scalePx2dp(10.5),
    "alignItems": "baseline"
  },
  "pages-detail-index__topic__top__left__info__username": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__topic__top__left__info__subtitle__text": {
    "color": "#C9C9C9",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__topic__top__right": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "pages-detail-index__topic__top__right__title": {
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__topic__bottom": {
    "paddingTop": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5),
    "paddingLeft": scalePx2dp(10.5)
  },
  "pages-detail-index__topic__bottom__line": {
    "paddingTop": scalePx2dp(2.7),
    "paddingBottom": scalePx2dp(2.7),
    "borderBottomWidth": 1,
    "borderBottomColor": "#E4E7ED"
  },
  "pages-detail-index__topic__bottom__title__text": {
    "color": "#222327",
    "fontSize": scalePx2dp(16.2),
    "lineHeight": scalePx2dp(24.3)
  },
  "pages-detail-index__topic__bottom__content": {
    "paddingTop": scalePx2dp(10.5)
  },
  "pages-detail-index__topic__bottom__content__line": {
    "paddingTop": scalePx2dp(10.5),
    "borderBottomWidth": 1,
    "borderBottomColor": "#E4E7ED"
  },
  "pages-detail-index__topic__bottom__content__text": {
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5)
  },
  "pages-detail-index__reply__left": {
    "width": "90%",
    "display": "flex",
    "flexDirection": "row"
  },
  "pages-detail-index__reply__left__info": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": scalePx2dp(10.5)
  },
  "pages-detail-index__reply__left__info__top": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "pages-detail-index__reply__left__info__top__username": {
    "display": "flex",
    "flexDirection": "row",
    "color": "#80858c",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply__left__info__top__subtitle": {
    "display": "flex",
    "flexDirection": "row"
  },
  "pages-detail-index__reply__left__info__top__subtitle__time": {
    "color": "#C9C9C9",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply__left__info__top__subtitle__count": {
    "paddingLeft": scalePx2dp(16.2),
    "color": "#C9C9C9",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply__left__info__bottom": {
    "display": "flex",
    "flexDirection": "column",
    "paddingTop": scalePx2dp(10.5),
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply__left__info__bottom__content": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-detail-index__reply__right": {
    "width": "10%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "pages-detail-index__reply__right__text": {
    "color": "#C9C9C9",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  }
})
