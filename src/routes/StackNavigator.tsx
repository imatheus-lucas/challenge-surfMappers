import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import { Image } from 'react-native'
import Album from '../screens/Album'

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
                            style={{ width: 140, height: 45, marginLeft: 20 }}
                            resizeMode="cover"
                        />
                    ),

                    title: ''
                }}
                name="Home"
                component={Home}
            />
            <Stack.Screen name="Album" component={Album} />
        </Stack.Navigator>
    )
}
