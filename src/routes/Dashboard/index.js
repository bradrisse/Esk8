'use strict';

import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
// import Map from '../../common/Map';

import Stat from '../../common/Stat'
import LargeStat from '../../common/LargeStat'
export default class Dashboard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <LargeStat/>
                </View>
                <View style={styles.halfContainer}>
                    <View style={styles.columns}>
                        <View style={styles.column}>
                            <Stat title="TRIP DISTANCE" data="0 mi" icon="ios-pin-outline"/>
                            <Stat title="TRIP ARRIVAL" data="25min" icon="ios-clock-outline"/>
                            <Stat title="AVG SPEED" data="8mph" icon="ios-speedometer-outline"/>
                            <Stat title="MOTOR LEFT" data="PASS" icon="ios-thumbs-up-outline"/>
                        </View>
                        <View style={styles.column}>
                            <View>
                                <Image style={{flex:1, height: undefined, width: undefined}} resizeMode='cover' source={require('../../assets/board.png')} />
                            </View>
                        </View>
                        <View style={styles.column}>
                            <Stat title="REGEN BATTERY" data="0%" icon="ios-battery-full-outline"/>
                            <Stat title="ESC TEMP" data="97° F" icon="ios-thermometer-outline"/>
                            <Stat title="MOTOR TEMP" data="98° F" icon="ios-thermometer-outline"/>
                            <Stat title="MOTOR RIGHT" data="FAIL" icon="ios-thumbs-down-outline"/>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
        backgroundColor: '#26211D'
    },
    columns: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    halfContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    column: {
        width: '33%',
        padding: 10
    },
    text: {
        color: 'white',
        textAlign: 'center',
        margin: 5
    }
});
