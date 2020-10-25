import React from 'react';
import { Button } from 'react-native';

export default function (props) {
    const { friend, onPress } = props;
    return <Button title={`gehe zu ${friend.name}`} onPress={onPress} />;
}