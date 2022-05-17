
import React, {useCallback, useEffect} from 'react';
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import {valuesSelector} from "../../redux/reducers/CipherReducer/selector";
import {updateKey} from "../../redux/reducers/CipherReducer/action";
import {useDispatch, useSelector} from "react-redux";


const KeyInput = (props) => {
    const data = useSelector(valuesSelector);
    let key = '';
    useEffect(() => {
        if(data.key.length > 0){
            key = data.key;
        }
    },[])
    const [value, setValue] = React.useState(key);
    const dispatch = useDispatch();



    const getData = useCallback(() =>{
        props.update(value)
        dispatch(updateKey(value))
    },[value])


    return (
        <SafeAreaView>
            <TextInput
                style={value.length > 0 ? styles.inpAct : styles.inp}
                onChangeText={setValue}
                onBlur={getData}
                value={value}
                placeholder={'KEY'}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    inp: {
        backgroundColor: '#727272',
        width: 300,
        opacity: 0.5,
        borderRadius: 5,

    },
    inpAct: {
        backgroundColor: '#727272',
        width: 300,
        opacity: 1,
        color:'red',
        fontWeight: 'bold',
        borderRadius: 5,
        padding: 10,
    }
})

export default KeyInput;