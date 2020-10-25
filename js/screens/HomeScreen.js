import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import FriendListItem from './../components/FriendListItem';
export default class Home extends Component {
    state = { data: [], isLoading: true };

    _fetchData = async () => {
        const data = [
            { first: 'Anton', last: 'smith', email: 'test1@example.com' },
            { first: 'Berta', last: 'smith', email: 'test2@example.com' },
            { first: 'Cesar', last: 'smith', email: 'test3@example.com' },
            { first: 'Dora', last: 'smith', email: 'test4@example.com' },
            { first: 'Emil', last: 'smith', email: 'test5@example.com' },
        ];
        //fake langes warten 3 sekunden
        await new Promise(_ => setTimeout(_, 3000));
        this.setState({ data, isLoading: false });
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
    }
});
