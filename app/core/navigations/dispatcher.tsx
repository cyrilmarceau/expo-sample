import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@redux/hooks';
import { AuthStack, HomeStack } from './stacks';
import { screens } from './routes';

const Stack = createNativeStackNavigator();

const Dispatcher = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    console.log(isAuth);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {isAuth ? (
                <Stack.Screen name={screens.HOMESTACK} component={HomeStack} />
            ) : (
                <Stack.Screen name={screens.AUTHSTACK} component={AuthStack} />
            )}
        </Stack.Navigator>
    );
};

export default Dispatcher;
