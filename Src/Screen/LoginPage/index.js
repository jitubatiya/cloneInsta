import React, { useState, useMemo } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../Component/CustomButton';
import { images } from '../../Resource/Images';
import { strings } from '../../Resource/Strings';
import styles from './Styles';
import Toast from 'react-native-simple-toast';
import { Colors } from '../../Resource/Colors';
import { FloatingTextInput } from '../../Component/FloatingTextInput';
import LinearGradient from 'react-native-linear-gradient';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onPress = (flag) => {
        if (flag == "Log In") {
            signInProcess()
        }
    }
    function signInProcess() {
    }
    const _updateMasterState = (attrName, value) => {
        if (attrName === strings.attrName)
            setEmail(value)
        else if (attrName === strings.attrNamePass)
            setPassword(value)
    }
    return (
        <LinearGradient colors={['#23395d', '#152238']} style={styles.container}>
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.themeColor}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    style={styles.scrollViewStyle}
                    showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Image source={images.backArrow} style={styles.backImg} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <Text style={styles.txthintLabel}>{"English (India)"}</Text>

                    <Image style={styles.imgLogo} source={images.instagram} resizeMode={"contain"} />
                    <FloatingTextInput
                        attrName={strings.attrName}
                        title={strings.emailHintText}
                        value={email}
                        updateMasterState={_updateMasterState}
                        textInputStyles={{ // here you can add additional TextInput styles
                            color: Colors.white,
                            fontSize: 15,
                            marginLeft: 8
                        }}

                        titleActiveColor={Colors.borderActive}
                        titleInactiveColor={Colors.borderInActive}
                    />
                    <FloatingTextInput
                        attrName={strings.attrNamePass}
                        title={strings.passwordHintText}
                        value={password}
                        updateMasterState={_updateMasterState}
                        textInputStyles={{ // here you can add additional TextInput styles
                            color: Colors.white,
                            fontSize: 15,
                            marginLeft: 8

                        }}

                        titleActiveColor={Colors.borderActive}
                        titleInactiveColor={Colors.borderInActive}


                    />
                    <CustomButton
                        btnStyle={styles.signInBtn}
                        btnText={strings.signIn}
                        btnTextStyle={styles.btnTextSignStyle}
                        onPress={onPress}
                        btnFlag={"Log In"}
                    />
                    <Text style={styles.txtForgetStyle}>{strings.txtForgetPassword}</Text>

                </ScrollView>
                <View style={styles.bottomView}>
                    <CustomButton
                        btnStyle={styles.contactBtn}
                        btnText={strings.createNewAccount}
                        btnTextStyle={styles.btnTextContactStyle}
                        onPress={onPress}
                        btnFlag={strings.createNewAccount}

                    />
                    <Text style={styles.txtDontHave}>{"Rushabh"}</Text>

                </View>
            </View>

        </LinearGradient>
    )
}
export default Login