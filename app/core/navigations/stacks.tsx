import React from 'react';
import { SigninScreen, SignupScreen } from '@features/auth';
import { HomeScreen } from '@features/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '@routes';
import { AuthStackParamList, HomeStackParamList } from './types';

const AuthNativeStack = createNativeStackNavigator<AuthStackParamList>();

const HomeNativeStack = createNativeStackNavigator<HomeStackParamList>();

export const AuthStack = () => {
    return (
        <AuthNativeStack.Navigator id={screens.AUTHSTACK}>
            <AuthNativeStack.Screen name="Login" component={SigninScreen} />
            <AuthNativeStack.Screen name="Signup" component={SignupScreen} />
        </AuthNativeStack.Navigator>
    );
};

export const HomeStack = () => {
    return (
        <HomeNativeStack.Navigator id={screens.HOMESTACK}>
            <HomeNativeStack.Screen name="Home" component={HomeScreen} />
        </HomeNativeStack.Navigator>
    );
};
