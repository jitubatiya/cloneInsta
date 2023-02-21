import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/LoginPage';
import SplashScreen from '../Screen/SplashScreen';
import ForgetPassword from '../Screen/ForgetPassword';
import Authorize from '../Screen/Authorize';
import TabNavigation from './TabNavigation';
import { strings } from '../Resource/Strings';
const Stack = createNativeStackNavigator();

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false, headerBackTitleVisible: false
    }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Authorize" component={Authorize} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name={strings.TabNavigation} component={TabNavigation} />

    </Stack.Navigator>
)
export default RootStack;