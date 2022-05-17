import React, {useCallback, useEffect } from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

import {useDispatch, useSelector} from "react-redux";
import {changeResult, updateKey, updateMessage, updateModal} from '../../redux/reducers/CipherReducer/action'
import {alphabetsSelector, modalSelector} from "../../redux/reducers/CipherReducer/selector";
import {Cipher} from "./services/cipher";


const DecButton = (props) => {
    let data = props.data;
    const alphabet = useSelector(alphabetsSelector);
    const modal = useSelector(modalSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateKey(data.key));
        dispatch(updateMessage(data.msg));
    },[])

    const handleClick = useCallback((e) => {
        e.preventDefault();

        const cipher = new Cipher(data.key, alphabet[0]);
        let res = cipher.decode(data.msg)

        dispatch(changeResult(res));
        dispatch(updateModal({isVisible: !modal.isVisible, title: 'Decoding'}));
    });

    return (

        <TouchableOpacity
            disabled={data.key.length <= 0}
            onPress={handleClick}
        style={styles.dec}>
                    <Icon
                        size={40}
                        name='key'
                        type='font-awesome-5'
                        color='#fff'

                    />
        </TouchableOpacity>
    )
};

const EncButton = (props) => {
    const modal = useSelector(modalSelector);
    const data = props.data;
    const dispatch = useDispatch();



    const alphabet = useSelector(alphabetsSelector);


    const handleClick = useCallback((e) => {
        e.preventDefault();
        dispatch(updateKey(props.data.key));
        dispatch(updateMessage(props.data.msg));

        const cipher = new Cipher(data.key, alphabet[0]);
        let res = cipher.encode(data.msg)

        dispatch(changeResult(res))
        dispatch(updateModal({isVisible: !modal.isVisible, title: 'Encoding'}));

    });
    return (
        <TouchableOpacity
            style={styles.enc}
            onPress={handleClick}>
            <Icon
                size={40}
                name='lock'
                type='font-awesome-5'
                color='yellow'
            />
        </TouchableOpacity>
    )
};
const Buttons = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <EncButton data ={props.data} />
            <DecButton data ={props.data} />
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dec: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#363d47',
    },
    enc: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#363d47',
    },

})

export default Buttons;