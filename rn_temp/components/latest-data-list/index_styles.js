
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "pages-index-index-homepage__block": {
    "width": "100%",
    "paddingTop": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5),
    "paddingLeft": scalePx2dp(10.5),
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "pages-index-index-homepage__block__left": {
    "width": "85%",
    "display": "flex",
    "flexDirection": "row"
  },
  "pages-index-index-homepage__block__left__info": {
    "paddingLeft": scalePx2dp(10.5),
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "pages-index-index-homepage__block__left__info__title": {
    "color": "#222327",
    "overflow": "hidden",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-index-index-homepage__block__left__info__subtitle": {
    "display": "flex",
    "flexDirection": "row",
    "overflow": "hidden",
    "color": "#CCC",
    "alignItems": "center",
    "fontSize": scalePx2dp(10.8),
    "lineHeight": scalePx2dp(16.2)
  },
  "pages-index-index-homepage__block__left__info__subtitle__username": {
    "fontWeight": "bold"
  },
  "pages-index-index-homepage__block__left__info__subtitle__dot": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": scalePx2dp(2.7),
    "paddingRight": scalePx2dp(2.7)
  },
  "pages-index-index-homepage__block__left__info__subtitle__last_reply_icon": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": scalePx2dp(2.7),
    "paddingRight": scalePx2dp(2.7)
  },
  "pages-index-index-homepage__block__left__info__subtitle__dot__inner": {
    "fontSize": scalePx2dp(6),
    "lineHeight": scalePx2dp(9)
  },
  "pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__inner": {
    "fontSize": scalePx2dp(6),
    "lineHeight": scalePx2dp(9)
  },
  "pages-index-index-homepage__block__left__info__subtitle__dot__username": {
    "color": "#C9C9C9"
  },
  "pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__username": {
    "color": "#C9C9C9"
  },
  "pages-index-index-homepage__block__left__info__subtitle__text": {
    "paddingLeft": scalePx2dp(7.2),
    "paddingRight": scalePx2dp(7.2),
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-index-index-homepage__block__left__info__subtitle__last_reply_by": {
    "width": scalePx2dp(110),
    "overflow": "hidden",
    "color": "#C9C9C9"
  },
  "pages-index-index-homepage__block__left__info__subtitle__last_reply_by__username": {
    "paddingLeft": scalePx2dp(2.7),
    "color": "#222327"
  },
  "pages-index-index-homepage__block__right": {
    "width": "15%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  }
})
