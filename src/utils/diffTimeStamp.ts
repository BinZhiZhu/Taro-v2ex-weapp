const getDiffTimeStamp = (dateTimeStamp: number): string => {
  var result = ''
  var minute = 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var now = new Date().getTime()
  now = parseInt(now.toString().substr(0, 10))
  var diffValue = now - dateTimeStamp
  if (diffValue < 0) return "未知";
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  if (monthC >= 1) {
    result = "" + parseInt(monthC.toString()) + "月前"
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC.toString()) + "周前"
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC.toString()) + "天前"
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC.toString()) + "小时前"
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC.toString()) + "分钟前"
  } else {
    result = "刚刚"
  }
  return result
}


export default getDiffTimeStamp
