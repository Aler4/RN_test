import React, {useCallback} from 'react';
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {valuesSelector} from "../../redux/reducers/CipherReducer/selector";
import {updateMessage} from "../../redux/reducers/CipherReducer/action";



const MsgInput = (props) => {

    const [message, setMessage] = React.useState('');
    const dispatch = useDispatch();

    const getData = useCallback(() =>{
        props.update(message)
        dispatch(updateMessage(message))
    },[message])

    return (
        <SafeAreaView>
            <TextInput
                // multiline
                onChangeText={setMessage}
                onBlur={getData}
                value={message}
                placeholder={'MESSAGE...'}
                style={message.length > 0 ? styles.msgAc : styles.msg}
                numberOfLines={7}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    msg: {
        backgroundColor: '#727272',
        width: 300,
        borderRadius: 5,
        marginTop: 25,
        opacity: 0.5,
    },
    msgAc: {
        backgroundColor: '#727272',
        width: 300,
        color: '#d82ef2',
        borderRadius: 5,
        marginTop: 25,
        padding: 15,
        fontWeight: 'bold',
        opacity: 1,
    }
})

export default MsgInput;