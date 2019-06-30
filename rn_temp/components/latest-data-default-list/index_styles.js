
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "pages-index-index-homepage__block": {
    "paddingTop": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5),
    "paddingLeft": scalePx2dp(10.5),
    "display": "flex",
    "flexDirection": "column"
  },
  "pages-index-index-homepage__block__top": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column"
  },
  "pages-index-index-homepage__block__top__left": {
    "display": "flex",
    "flexDirection": "row"
  },
  "pages-index-index-homepage__block__top__left__info": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": scalePx2dp(10.5),
    "justifyContent": "space-between",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-index-index-homepage__block__top__left__info__username": {
    "color": "#222327"
  },
  "pages-index-index-homepage__block__top__left__info__subtitle": {
    "color": "#CCC",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": scalePx2dp(10.8),
    "lineHeight": scalePx2dp(16.2)
  },
  "pages-index-index-homepage__block__top__left__info__subtitle__dot": {
    "color": "#CCC",
    "paddingLeft": scalePx2dp(7.2),
    "paddingRight": scalePx2dp(7.2)
  },
  "pages-index-index-homepage__block__top__left__info__subtitle__text": {
    "color": "#CCC",
    "paddingRight": scalePx2dp(7.2)
  },
  "pages-index-index-homepage__block__top__left__right": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-end"
  },
  "pages-index-index-homepage__block__top__left__right__top": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": scalePx2dp(7.2),
    "paddingRight": scalePx2dp(7.2),
    "color": "#CCC",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-index-index-homepage__block__top__left__right__top__node": {
    "paddingRight": scalePx2dp(7.2)
  },
  "pages-index-index-homepage__block__top__left__right__top__reply": {
    "paddingLeft": scalePx2dp(7.2)
  },
  "pages-index-index-homepage__block__bottom__text": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  }
})
