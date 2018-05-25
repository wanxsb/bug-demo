/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Modal} from 'antd-mobile';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  clickMe () {
     Modal.prompt('填写要绑定的手机号', null, (mobile) => {
        Modal.alert('确认绑定手机号', '绑定后不可更改', [{text: '取消', onPress: () => {}},{text: '立即绑定', onPress: () => {console.log('bind')}}]
      }, 'default', '', ['手机号'])
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.clickMe()}>
          点我开始测试
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
