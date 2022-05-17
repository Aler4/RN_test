/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import KeyInput from "./components/key-input";
import MsgInput from "./components/msg-input";
import Buttons from "./components/buttons";
import {SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/reduxStore';
import {ModalWind} from "./components/modal";


const store = configureStore();

const App = () => {
    const [state,setState] = useState({key: '', msg: ''});
    const getKey = (value) => {
        console.log(state)
       return setState({key: value, msg:state.msg})
    };

    const getMsg = (value) => {
        console.log(state)
        return setState({key: state.key, msg:value})
    };
    const btns = (val) => {
        if(val.key.length > 0 && val.msg.length > 0){
          return   (<Buttons data={state} />);
        }
        else return undefined;
    }

  return (
      <Provider store={ store }>
          <SafeAreaProvider>
              <SafeAreaView style={styles.body}>
                  <View style={styles.container}>
                      <KeyInput update={getKey}/>
                      <MsgInput update={getMsg}/>
                      {btns(state)}
                      <ModalWind/>

                  </View>
              </SafeAreaView>
          </SafeAreaProvider>
      </Provider>
  );
};
const styles = StyleSheet.create({
  body : {
    height: "100%",
    width: '100%',
  },
  container: {
    marginTop: 100,
    alignItems: 'center'
  },
  image: {
    flex: 1,
  },

})

export default App;
