import Taro from '@tarojs/taro'
import {Image, Swiper, SwiperItem, View} from '@tarojs/components'
import {AtButton, AtDrawer, AtGrid, AtImagePicker, AtNoticebar, AtSearchBar, AtTimeline} from "taro-ui"
import './index.scss'
import navigateTo from "../../helper/navigateTo";

class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    notice: '这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏',
    showDrawer: false,
    files: [
      {
      url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
      },
      {
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
      },
      {
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
      }
    ],
    swiperList:[
      {
        url:'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      },
      {
        url:'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'
      },
      {
        url:'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180'
      },
    ],
    items: [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '找折扣'
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      },
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '新品首发'
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '领京豆'
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '手机馆'
      }
    ],
    value: '',
    drawerList: ['幕帘', '菜单2']
  }

  onClose = ()=>{

  }

  onChange () {
    // this.setState({
    //   files
    // })
  }

  clickButton = ()=>{
    this.setState({
      showDrawer: true
    })
  }

  onClickDrawer = (index)=>{
    console.log('index',index)
    switch (index) {
      case 0:
        navigateTo('/pages/curtain/index')
    }
  }

  render () {
    const {showDrawer,swiperList,items,notice,files,value,drawerList}  =this.state;

    return (
      <View className='pages-index-index'>
        <View className='pages-index-index__notice'>
          <AtNoticebar
            marquee
          >
            {notice}
          </AtNoticebar>
        </View>
        <View className=''>
          <AtSearchBar
            value={value}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <View className='pages-index-index__swiper'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical
            circular
            indicatorDots
            autoplay
          >
            {swiperList && swiperList.length > 0 && swiperList.map((item,i)=>{
              return (
                <SwiperItem>
                  <View
                    className='pages-index-index__swiper__item'
                    key={i}
                  >
                    <Image
                      src={item.url}
                      className='pages-index-index__swiper__item__img'
                    />
                  </View>
                </SwiperItem>
              )
            })}
          </Swiper>
        </View>
        {/*<View className='pages-index-index__image-picker'>*/}
          {/*<AtImagePicker*/}
            {/*files={files}*/}
            {/*onChange={this.onChange.bind(this)}*/}
          {/*/>*/}
        {/*</View>*/}
        <View className='pages-index-index__timeline'>
          <AtTimeline
            items={[
              { title: '刷牙洗脸' },
              { title: '吃早餐', color: 'green' },
              { title: '上班', color: 'red' },
              { title: '睡觉', color: 'yellow' },
              { title: '刷牙洗脸' },
              { title: '吃早餐', color: 'green' },
              { title: '上班', color: 'red' },
            ]}
          >
          </AtTimeline>
          <AtTimeline
            items={[
              { title: '刷牙洗脸', icon: 'check-circle' },
              { title: '吃早餐', icon: 'clock' },
              { title: '上班', icon: 'clock' },
              { title: '睡觉', icon: 'clock' },
              { title: '刷牙洗脸', icon: 'check-circle' },
              { title: '吃早餐', icon: 'clock' },
              { title: '上班', color: 'red' },
            ]}
          >
          </AtTimeline>
          <AtTimeline
            pending
            items={[
              { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
              { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' },
              { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' },
              { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
            ]}
          >
          </AtTimeline>
        </View>
        <View className='pages-index-index__grid'>
          <AtGrid
            mode='rect'
            // hasBorder={false}
            data={items}
          />
        </View>
        {/*<AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0' />*/}
        <View className='pages-index-index__button'>
          <AtButton
            type='primary'
            circle
            onClick={this.clickButton}
          >
            显示组件
          </AtButton>
        </View>
        <AtDrawer
          show={showDrawer}
          right
          mask
          onItemClick={this.onClickDrawer}
          onClose={this.onClose.bind(this)}
          items={drawerList}
        />
      </View>
    )
  }
}

export default Index
