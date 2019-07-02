
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "pages-nodes-index__item": {
    "paddingLeft": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5)
  },
  "pages-nodes-index__item__title": {
    "backgroundColor": "#F7F7F7",
    "justifyContent": "center",
    "display": "flex",
    "marginTop": scalePx2dp(10.5),
    "marginBottom": scalePx2dp(10.5),
    "paddingTop": scalePx2dp(7.2),
    "paddingBottom": scalePx2dp(7.2)
  },
  "pages-nodes-index__item__title__text": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-nodes-index__item__child": {
    "color": "#80858c",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9),
    "paddingRight": scalePx2dp(10.5)
  },
  "pages-nodes-index__layout__info": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": scalePx2dp(10.5),
    "paddingRight": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5),
    "paddingLeft": scalePx2dp(10.5),
    "justifyContent": "space-around"
  },
  "pages-nodes-index__layout__info__left": {
    "alignItems": "center",
    "display": "flex",
    "flexDirection": "row"
  },
  "pages-nodes-index__layout__info__left__header": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "paddingLeft": scalePx2dp(10.5)
  },
  "pages-nodes-index__layout__info__left__header__title": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-nodes-index__layout__info__right": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "pages-nodes-index__layout__content": {
    "paddingLeft": scalePx2dp(10.5),
    "paddingTop": scalePx2dp(10.5)
  }
})
