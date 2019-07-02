
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "pages-member-index__avatar": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "pages-member-index__info": {
    "paddingTop": scalePx2dp(32),
    "paddingRight": scalePx2dp(32),
    "paddingBottom": scalePx2dp(32),
    "paddingLeft": scalePx2dp(32),
    "display": "flex",
    "flexDirection": "column"
  },
  "pages-member-index__info__inner": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#E4E7ED",
    "paddingTop": scalePx2dp(10.5),
    "paddingBottom": scalePx2dp(10.5)
  },
  "pages-member-index__info__inner__title": {
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "pages-member-index__info__inner__value": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "textAlign": "right",
    "color": "#222327",
    "fontSize": scalePx2dp(12.6),
    "lineHeight": scalePx2dp(18.9)
  },
  "at-list": {
    "backgroundColor": "#fff !important"
  }
})
