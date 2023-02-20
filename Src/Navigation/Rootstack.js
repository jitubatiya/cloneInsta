import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/LoginPage';
import SplashScreen from '../Screen/SplashScreen';
const Stack = createNativeStackNavigator();

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false, headerBackTitleVisible: false
    }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
)
export default RootStack;