import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  // TouchableOpacity,
} from 'react-native';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
     <View style={styles.container}>
        <Text style={styles.lhbox}>哈哈哈</Text>
        <View style={styles.vbox}>
          <Text style={styles.textbox}>看舒克舒克是</Text>
        </View>
        <View style={styles.borderYYY}>
          <Text>阿拉啦啦啦啦啦啦</Text>
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
    borderTopColor: 'red',
    borderTopWidth: 1,
    borderStyle: 'dotted'
  }
});

export default App;
