import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import Album from '../screens/Album'
import CartButton from '../components/Header/CartButton'
import ChatButton from '../components/Header/ChatButton'
import OptionsButton from '../components/Header/OptionsButton'
import GoBackButton from '../components/Header/GoBackButton'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()
export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: 140, height: 45 }}
                            resizeMode="cover"
                        />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <CartButton />
                            <ChatButton />
                        </View>
                    ),

                    headerShadowVisible: false,

                    title: ''
                }}
                name="Home"
                component={TabNavigator}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerLeft: () => <GoBackButton title="Album" />,
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <CartButton />
                            <ChatButton />
                            <OptionsButton />
                        </View>
                    ),

                    headerShadowVisible: false,

                    title: ''
                }}
                name="Album"
                component={Album}
            />
        </Stack.Navigator>
    )
}
