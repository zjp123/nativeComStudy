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

const splitImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAECAMAAACHiEKvAAAAolBMVEUjwn0jwn0Xvmgjwnwjwnwiwnwjwn0jwn0jwn0iwnwfw3sjwnwjwn0jwn0jwn0jwnwjwn0jwn0jw30gwXsjwn0jw30jwn0iwXwcv3Iiwn0jwn0jwnwjwnwjwnwjwn0jwnwjwn0jwn0kwn0jwn0jwn0jwnwjwn0iwn0jwn0jwnwiwn0hwXsiwHkhwXsgwnsjwn0iwn0jwn0hwnwkw30kwn0AAADMb4tdAAAANnRSTlNPSQXx9jHn3Ik9EPzXyMSYk3JVFeKdhEMKK6J70s68t7Ovq6eOdm1nYl5aJyMeGn856zXAagC/KqgEAAABBklEQVQoz7XS12rDQBQEUFmr1Wo36r333ov9/7+WDQERCAnYyPflvs5hhnmwLOu6hBDDmOdpGsdh8DwI4b6uGGPHud1uDMPoet93Xds2zb2uNa2qgmBZbNsWhLJUVUVRLMv3iyLPsyxNkySOD1mWJSmKwlAUEUKmyfP8tgHAcdzH19EPANg2njdNEyFRFMMwiiRJkuXjiOMkSdMsy/Oi8H3fshRFVdWyFATBtpclCKpK07S6vjdN23Zd3+u6TkPSqI7jYLyu+w6h53nDMI7TNM+GYRDiui6lPv4G79eDwU8wOMHof7D1Ghg+C17fBf7d8JVgfDZ8MZiKqfflSZ/eE/zuhsk3+BOiAVj+5fZYNwAAAABJRU5ErkJggg==';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
    title: 'four Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'five Item',
  },
];

const Item = ({item, onPress, style}) => (
  // <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  <View style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
  // </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  let startY = 0,
    endY = 0;
  let flalist = useRef();
  useEffect(() => {
    setTimeout(() => {
      // flalist.scrollToEnd();
      // flalist.scrollToIndex({
      //   animated: true,
      //   index: 4,
      //   viewPosition: 0.5,
      // });
      flalist.getScrollableNode();
    }, 2000);
  }, []);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  const _onEndReachedFn = info => {
    console.log(info, '_onEndReachedFn');
  };

  const _onViewableItemsChangedFn = info => {
    console.log(info, flalist.getScrollableNode(), '_onViewableItemsChangedFn');
  };

  const _onScrollBeginDragFn = () => {};

  const _onScrollEndDrag = event => {
    console.log(event, '_onScrollEndDrag');
  };

  const _calculateMove = () => {
    const {
      firstSelectIndex = 0,
      originalData = [],
      firstSelectData = {},
    } = this.state;

    let currentIndex = this._getMovePositionIndex(firstSelectIndex);

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    if (currentIndex >= originalData.length) {
      currentIndex = originalData.length - 1;
    }

    firstSelectData.isSelect = false;
    const itemData = originalData[currentIndex];

    if (itemData) {
      itemData.isSelect = true;
      const {subitems = []} = itemData;
      if (subitems.length > 0 && subitems[0].value === '') {
        // 默认选中第一个   全部
        subitems[0].isSelect = true;
      }

      this.setState(
        {
          firstSelectIndex: currentIndex,
          firstSelectData: itemData,
        },
        () => {
          if (this.firstFlatListRef && originalData.length > 0) {
            this.firstFlatListRef.scrollToIndex({index: currentIndex});
          }
        },
      );
    }
  };

  const _getMovePositionIndex = (originIndex = 0) => {
    // 计算偏移量
    const offsetY = Math.abs(parseInt(endY - startY));
    const scrollPosition = Math.floor(offsetY / 80 + 0.5);
    // 计算出需要滚动到的位置
    let currentIndex = originIndex;
    if (endY - startY > 0) {
      currentIndex = currentIndex + scrollPosition;
    } else {
      currentIndex = currentIndex - scrollPosition;
    }
    return currentIndex;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heightBox}>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={[styles.separator, highlighted && {marginLeft: 0}]}
              />
            ))
          }
          ref={fla => (flalist = fla)}
          data={DATA}
          // onScrollBeginDrag={_onScrollBeginDragFn}
          // onScrollEndDrag={_onScrollEndDrag}
          onScrollBeginDrag={event => {
            const {nativeEvent = {}} = event;
            // eslint-disable-next-line no-unused-vars
            startY = nativeEvent.contentOffset.y;
          }}
          onScrollEndDrag={event => {
            const {nativeEvent = {}} = event;
            // eslint-disable-next-line no-unused-vars
            endY = nativeEvent.contentOffset.y;
            // this._calculateMove();
          }}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          onEndReachedThreshold={0.3}
          onViewableItemsChanged={_onViewableItemsChangedFn}
          viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95,
          }}
          // scrollToEnd={_scrollToEndFn}
          getItemLayout={(data, index) => ({
            length: 80,
            offset: 80 * index,
            index,
          })}
          onEndReached={_onEndReachedFn}
          ListFooterComponent={() => <Text>没有更多数据了</Text>}
          ListHeaderComponent={() => <Text>这是列头</Text>}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            width: '100%',
            height: 80,
            top: 110,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
          pointerEvents={'none'}>
          <Image
            style={styles.splitImageViewStyle}
            source={{uri: splitImage}}
          />
          <Image
            style={styles.splitImageViewStyle}
            source={{uri: splitImage}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// 给FlatList指定extraData={this.state}属性，是为了保证state.selected变化时，
// 能够正确触发FlatList的更新。如果不指定此属性，则FlatList不会触发更新，因为它是一个PureComponent，其 props 在===比较中没有变化则不会触发更新。
// keyExtractor属性指定使用 id 作为列表每一项的 key。

// 如果有除data以外的数据用在列表中（不论是用在renderItem还是头部或者尾部组件中），
// 请在此属性中指定。同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的 Object 或者数组中），然后再修改其值，否则界面很可能不会刷新。

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20,
  },
  heightBox: {
    // height: 300,
    height: 300,
    backgroundColor: '#ddd',
  },
  separator: {
    backgroundColor: 'yellow',
  },
  item: {
    padding: 20,
    height: 80,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  splitImageViewStyle: {
    width: 200,
    height: 2,
  },
});

export default App;
