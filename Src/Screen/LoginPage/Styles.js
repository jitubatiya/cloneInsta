import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../Resource/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        marginHorizontal: 20,
        flex: 1,
        marginBottom: 10
    },
    txtStyle: {
        color: "#202150",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: "30%"
    },
    txtForgetStyle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
        alignSelf: "center"
    },
    signInBtn: {
        backgroundColor: Colors.royalBlue,
        height: 50,
        flex: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    btnTextSignStyle: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    imgLogo: { height: 60, width: 60, alignSelf: "center", marginTop: 70, marginBottom: 60 },
    txthintLabel: {
        marginTop: 70,
        alignSelf: "center"
    },
    bottomView: {
        bottom: 0,
        justifyContent: "center",
        marginHorizontal:20
    },
    txtDontHave:{
        color: "white",
        fontSize: 13,
        fontWeight: "700",
        alignSelf:"center",
        marginVertical:5
    },
    contactBtn: {
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:0.5,
        borderColor:Colors.white
    },
    btnTextContactStyle: {
        color: Colors.white,
        fontSize: 15,
    },
    backImg:{
        height:20,
        width:20,
        tintColor:Colors.white,
        top:20
    }
})
export default styles