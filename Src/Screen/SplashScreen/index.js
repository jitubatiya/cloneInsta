import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Resource/Colors';
import { images } from '../../Resource/Images';

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Login")
        }, 2000);
    }, [])
    return (
        <View style={styles.mainView} >
            <StatusBar
                animated={true}
                backgroundColor="black"
            />
            <Image style={styles.imgLogo} source={images.instagram} resizeMode={"contain"} />
            <View style={styles.footerView}>
                <Text style={[styles.txtFont, { fontSize: 15, color: Colors.grey }]}>from</Text>
                <Text style={[styles.txtFont, { fontSize: 20 }]}>Rushabh</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1, backgroundColor: Colors.themeColor,
        alignItems: "center", justifyContent: "center"
    },
    imgLogo: { height: 70, width: 70 },
    footerView: {
        position: "absolute", bottom: 50,
    },
    txtFont: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }

})
export default SplashScreen;