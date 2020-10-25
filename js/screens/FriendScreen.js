import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
export default class FriendScreen extends Component {
    render() {
        const friend = this.props.route.params.friend;
        return (
            <View style={styles.container}>
                <Text>Freund {friend}</Text>
                <Button title="gehe zurück" onPress={() => this.props.navigation.goBack()} />
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
