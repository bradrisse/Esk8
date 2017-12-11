import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LargeStat extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.largeStatWrap}>
                    <View>
                        <Text style={{color: 'white', textAlign: 'center', marginBottom: 5, fontSize: 30}}>21 mph</Text>
                        <View style={styles.hr}/>
                        <Text style={{color: 'white', textAlign: 'center', marginTop: 5, fontSize: 10}}>CURRENT SPEED</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    hr: {
        height: 1,
        backgroundColor: '#ffffff'
    },
    largeStatWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'black',
        width: 200,
        height: 200,
        padding: 10,
        borderRadius: 200
    }
});
