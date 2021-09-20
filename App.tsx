import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/routes/StackNavigator'
import TabNavigator from './src/routes/TabNavigator'

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />

            <StatusBar barStyle="light-content" translucent />
        </NavigationContainer>
    )
}
