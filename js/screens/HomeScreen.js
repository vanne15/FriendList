import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home / Freunde!</Text>
                <Button title="gehe zu Alice!" onPress={() =>
                    this.props.navigation.navigate('FriendScreen', { friend: 'Alice' })} />
                <Button title="gehe zu Bob!" onPress={() =>
                    this.props.navigation.navigate('FriendScreen', { friend: 'Bob' })} />
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
    },
});
