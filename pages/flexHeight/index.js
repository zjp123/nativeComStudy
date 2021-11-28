import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  // TouchableOpacity,
} from 'react-native';
// const image = { uri: "http://img.58cdn.com.cn/dist/jxt/images/Simulator/mnqTopbg.png" };
const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
     <View style={styles.container}>
        <Text style={styles.lhbox}>哈哈哈</Text>
        <View style={styles.vbox}>
          <Text style={styles.textbox}>看舒克舒克是</Text>
        </View>
        <View style={styles.borderYYY}>
          <Text style={{textDecorationLine: 'underline'}}>阿拉啦啦啦啦啦啦</Text>
        </View>
        {/* <Text style={styles.lines}>rr</Text> */}
        <View style={styles.lines}></View>
        <View style={styles.linesHHH}></View>
        <View style={styles.sha}>
          <ImageBackground resizeMode='contain' style={styles.imgBox} source={image}>
            <Text>Inside</Text>
          </ImageBackground>
          {/* <Image style={styles.imgBox} source={image}></Image> */}
        </View>
     </View>
     
  )
};

// 给FlatList指定extraData={this.state}属性，是为了保证state.selected变化时，
// 能够正确触发FlatList的更新。如果不指定此属性，则FlatList不会触发更新，因为它是一个PureComponent，其 props 在===比较中没有变化则不会触发更新。
// keyExtractor属性指定使用 id 作为列表每一项的 key。

// 如果有除data以外的数据用在列表中（不论是用在renderItem还是头部或者尾部组件中），
// 请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的 Object 或者数组中），然后再修改其值，否则界面很可能不会刷新。

const styles = StyleSheet.create({
  sha: {
    marginTop: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  container: {
    flex: 1,
    marginTop: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  lhbox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'blue',
    lineHeight: 30
  },
  vbox: {
    marginTop: 50,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'green',
    // lineHeight: 50
  },
  textbox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    lineHeight: 50
  },
  borderYYY: {
    marginTop: 50,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dotted'
  },
  lines: {
    marginTop: 20,
    borderColor: 'blue',
    borderWidth: 0.5,
    height: 0,
    borderStyle: 'dashed',
    // borderBottomColor: 'transparent',
    // borderBottomWidth: 0,
    // // borderTopWidth: 1,
    // borderLeftColor: 'transparent',
    // borderLeftWidth: 0,
    // borderRightWidth: 0,

    // borderRightColor: 'transparent',
    // borderRadius: 1
  },
  linesHHH: {
    marginTop: 20,
    marginLeft: 50,
    borderColor: 'red',
    borderWidth: 0.5,
    width: 0,
    height: 20,
    borderStyle: 'dashed',
  },
  imgBox: {
    width: '100%',
    height: 86,
    // resizeMode: "cover",
    // resizeMode: "contain",
    justifyContent: "center"
  }
});

export default App;
