import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26211D',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
