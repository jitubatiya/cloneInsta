import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../Resource/Colors';
import styles from './Styles';

const You = () => {

    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default You