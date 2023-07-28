import React from 'react';
import { Text, View } from 'react-native';
import { HomeProps } from '@navigations/types';

const HomeScreen = ({ navigation, route }: HomeProps) => {
    console.log(navigation, route);
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};
export default HomeScreen;
