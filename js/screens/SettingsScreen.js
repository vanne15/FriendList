import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {
                            title: 'Abschnitt Obst',
                            data: [
                                { name: 'Ananas' },
                                { name: 'Banane' },
                                { name: 'Clementine' },
                                { name: 'Dattel' },
                            ]
                        },
                        {
                            title: 'Abschnitt Länder',
                            data: [
                                { name: 'Albanien' },
                                { name: 'Belgien' },
                                { name: 'China' },
                                { name: 'Dänemark' },
                            ]
                        }
                    ]}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    renderSectionHeader={({ section }) => <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{section.title}</Text>}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
});
