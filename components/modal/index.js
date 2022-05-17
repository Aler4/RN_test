import React, {useCallback, useEffect, useState} from "react";
import {Pressable, Text, View, Modal, StyleSheet} from "react-native";
import {valuesSelector, modalSelector} from "../../redux/reducers/CipherReducer/selector";
import {useDispatch, useSelector} from "react-redux";
import {updateModal} from "../../redux/reducers/CipherReducer/action";

export const ModalWind = () => {
    const modalData = useSelector(modalSelector);
    const [modal, setModal] = useState(modalData);
    const dispatch = useDispatch();
    const data = useSelector(valuesSelector);
    const handleClick = useCallback((e) => {
        e.preventDefault();
        dispatch(updateModal({isVisible: !modalData.isVisible, title: ''}));
    },[modal]);

    useEffect(()=>{
        setModal(modalData)
    },[modalData]);

    return (
        <Modal

            animationType="slide"
            transparent={true}
            visible={modal.isVisible}
            onRequestClose={() => {

                setModal({isVisible: false, title: ''});
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{modal.title}</Text>
                    <Text >{data.result}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleClick}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})