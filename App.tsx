import React from 'react';
import { RnpTheme } from '@constants/Theme';
import Dispatcher from '@navigations/dispatcher';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@redux/store';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={RnpTheme}>
                <NavigationContainer>
                    <Dispatcher />
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
}
