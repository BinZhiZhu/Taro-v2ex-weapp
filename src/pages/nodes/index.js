import Taro from "@tarojs/taro"
import {Text, View} from "@tarojs/components";
import allNodes from "../../utils/allNodes";

class Index extends Taro.Component{

  config = {
    navigationBarTitleText: '节点'
  }

  render() {

    const allNodesList = allNodes;

    return (
      <View className='pages-nodes-index'>
        {allNodesList && allNodesList.map((node,i)=>{
          return (
            <View
              className='pages-nodes-index__item'
              key={`${i}-${node.id}`}
            >
              <View className='pages-nodes-index__item__title'>
                <Text className='pages-nodes-index__item__title__text'>{node.title}</Text>
              </View>
              {node.nodes && node.nodes.map((item,j)=>{
                return (
                  <Text
                    className='pages-nodes-index__item__child'
                    key={`${j}`}

                  >
                    {item.full_name}
                  </Text>
                )
              })}
            </View>
          )
        })}
      </View>
    )
  }
}

export default Index
