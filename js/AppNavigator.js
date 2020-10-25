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
                        tabBarIcon: (object) => {
                            const { focused, size, color } = object; //Destruierendes Object
                            const icon = focused ? 'home' : 'home-outline';
                            return (<Icon.MaterialCommunityIcons
                                name={icon}
                                size={size}
                                color={color}
                            />); //Für den Fall das man mal mehere Zeilen benötigt (Beispiel weiter unten einzeilig)
                        }
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

