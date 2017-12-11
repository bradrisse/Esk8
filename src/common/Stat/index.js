import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default class Stat extends Component {
    render() {
        const {title, data, icon} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={{width: '50%'}}>
                        <Text style={{textAlign: 'right', color: '#FFFFFF'}}>{data}</Text>
                    </View>
                </View>
                <View style={styles.hr}/>
                <Text style={styles.bottomTitle}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F2A27',
        padding: 8,
        marginBottom: 5,
        borderRadius: 10
    },
    top: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 5
    },
    bottomTitle: {
        marginTop: 5,
        textAlign: 'center',
        color: '#626262',
        fontSize: 10
    },
    hr: {
        height: 1,
        backgroundColor: '#E4DEDD'
    }
});
