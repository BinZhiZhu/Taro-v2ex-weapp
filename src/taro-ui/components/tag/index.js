import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.scss'
import defaultFunc from '../../../utils/defaultFunc'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}

class AtTag extends Taro.Component {

  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    type: PropTypes.oneOf(['', 'primary']),
    name: PropTypes.string,
    circle: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    active: false,
    disabled: false,
    customStyle: {},
    onClick: defaultFunc,
    title: '',
  };

  state = {};

  onClick () {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick({ name: this.props.name, active: this.props.active })
    }
  }

  render () {
    const {
      className,
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
      customStyle,
    } = this.props
    const rootClassName = ['at-tag']

    const classObject = {
      [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      [`at-tag--${type}`]: TYPE_CLASS[type],
      'at-tag--disabled': disabled,
      'at-tag--active': active,
      'at-tag--circle': circle,
      [`at-tag--${type}--disabled`]: disabled,
      [`at-tag--${type}--active`]: active,
      [`at-tag--${type}--circle`]: circle,
    }

    return (
      <View
        className={classNames(rootClassName, classObject, className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </View>
    )
  }
}

export default AtTag;
