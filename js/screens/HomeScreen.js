import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { name: 'Alice' },
                        { name: 'Bob' },
                        { name: 'Claudia' },
                        { name: 'Doro' },
                    ]}
                    keyExtractor={item => item.name} //Dynamisch generierter Key auch moeglich
                    renderItem={({ item }) => (<Button title={`gehe zu ${item.name}`} onPress={() =>
                        this.props.navigation.navigate('FriendScreen', { friend: item.name })} />)}
                />

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
});
