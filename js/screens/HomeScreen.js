import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import FriendListItem from './../components/FriendListItem';
export default class Home extends Component {
    state = { data: [], isLoading: true };

    _fetchData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=20');
            const responseJson = await response.json();
            //  console.log(responseJson);
            this.setState({ data: responseJson.results, isLoading: false });
            //this.setState({ isLoading: false });
        } catch (error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this._fetchData();

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="orange" />
                </View>

            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.email} //Dynamisch generierter Key auch moeglich
                    renderItem={({ item }) => (
                        //FriendListItem
                        <FriendListItem friend={item} onPress={() =>
                            this.props.navigation.navigate('FriendScreen', { friend: item })} />)}
                    ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmpty}>Keine Daten geladen</Text>
                    )}
                />

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        justifyContent: 'center'
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightsalmon',
        marginVertical: 5
    },
    listEmpty: {
        paddingTop: 100,
        fontSize: 32,
        textAlign: 'center'
    }
});
