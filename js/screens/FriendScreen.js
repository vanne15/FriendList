import React, { Component } from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';
export default class FriendScreen extends Component {
    render() {
        const friend = this.props.route.params.friend;
        return (
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                <Image style={styles.image} source={require('../../assets/icon.png')} />

                <Text>Freund {friend.name.first} {friend.name.last}</Text>
                <Text>Email: {friend.email}</Text>
                <Button title="gehe zurück" onPress={() => this.props.navigation.goBack()} />
            </ScrollView>
        );

    }
}
const width = Dimensions.get('window').width * 0.75;
const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    scrollView: {
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: width,
        marginBottom: 20
    }

});
