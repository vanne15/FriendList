import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import * as Icon from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => {
                    return {
                        tabBarIcon: ({ focused, size, color }) => {
                            let icon;
                            if (route.name === "Home")
                                icon = focused ? "home" : "home-outline";
                            if (route.name === "Settings")
                                icon = focused ? "settings" : "settings-outline";
                            return (
                                <Icon.MaterialCommunityIcons
                                    name={icon}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Freunde'
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Einstellungen'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

