import { SigninScreen, SignupScreen } from '@features/auth/screens';
import { HomeScreen } from '@features/home/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '@routes';

const AuthNativeStack = createNativeStackNavigator();
const HomeNativeStack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <AuthNativeStack.Navigator>
            <AuthNativeStack.Screen name={screens.LOGIN} component={SigninScreen} />
            <AuthNativeStack.Screen name={screens.SIGNUP} component={SignupScreen} />
        </AuthNativeStack.Navigator>
    );
};

export const HomeStack = () => {
    return (
        <HomeNativeStack.Navigator>
            <HomeNativeStack.Screen name={screens.HOME} component={HomeScreen} />
        </HomeNativeStack.Navigator>
    );
};
