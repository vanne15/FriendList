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
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Freunde',
                        tabBarIcon: ({ focused, size, color }) =>
                            <Icon.MaterialIcons
                                name="home"
                                size={size}
                                color={color}
                            />
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Einstellungen',
                        tabBarIcon: ({ focused, size, color }) =>
                            <Icon.MaterialIcons
                                name="settings"
                                size={size}
                                color={color}
                            />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

