import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'

const Tabs = createBottomTabNavigator()

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { Image } from 'react-native'
import StackNavigator from './StackNavigator'
const icons = {
    Stack: {
        lib: MaterialCommunityIcons,
        name: 'home-outline'
    },
    Explorer: {
        lib: MaterialIcons,
        name: 'search'
    },
    CheckIn: {
        lib: Octicons,
        name: 'location'
    },
    Notifications: {
        lib: MaterialCommunityIcons,
        name: 'bell-outline'
    },
    Profile: {
        lib: MaterialIcons,
        name: 'perm-identity'
    }
}

export default function TabNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} size={size} color={color} />
                },

                headerShown: false
            })}
        >
            <Tabs.Screen
                name="Stack"
                options={{ title: 'Home' }}
                component={StackNavigator}
            />
            <Tabs.Screen name="Explorer" component={Home} />
            <Tabs.Screen name="CheckIn" component={Home} />
            <Tabs.Screen
                name="Notifications"
                options={{ tabBarBadge: 3 }}
                component={Home}
            />
            <Tabs.Screen name="Profile" component={Home} />
        </Tabs.Navigator>
    )
}
