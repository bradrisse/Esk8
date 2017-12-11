import React from 'react';
import { StyleSheet, Platform, View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Dashboard from '../../routes/Dashboard'
import Trips from '../../routes/Trips'
import Settings from '../../routes/Settings'
import Statistics from '../../routes/Statistics'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    navigationPadding: {
        ...Platform.select({
            ios: {
                // pass
            },
            android: {
                paddingTop: 60,
                height: 60 + 56,
            },
        })
    }
});

function renderLeft() {
    return (
        <Icon name="rocket" size={30} color="#900" />
    );
}

const TabNav = TabNavigator(
    {
        DashboardTab: {
            screen: Dashboard,
            path: '/',
            navigationOptions: {
                title: 'Dashboard',
                tabBarLabel: 'Dashboard',
                tabBarIcon: <Icon name="tachometer" size={30} color="#F77E0E" />,
                headerTintColor: "#E4DEDD",
                headerStyle: [{
                    backgroundColor: '#191613',
                }]
            },
        },
        TripsTab: {
            screen: Trips,
            path: '/',
            navigationOptions: {
                title: 'Trips',
                tabBarLabel: 'Trips',
                tabBarIcon: <Icon name="map-marker" size={30} color="#F77E0E" />,
                headerTintColor: "#E4DEDD",
                headerStyle: [{
                    backgroundColor: '#191613',
                }]
            },
        },
        StatisticsTab: {
            screen: Statistics,
            path: '/',
            navigationOptions: {
                title: 'Statistics',
                tabBarLabel: 'Statistics',
                tabBarIcon: <Icon name="bar-chart" size={30} color="#F77E0E" />,
                headerTintColor: "#E4DEDD",
                headerStyle: [{
                    backgroundColor: '#191613',
                }]
            },
        },
        SettingsTab: {
            screen: Settings,
            path: '/',
            navigationOptions: {
                title: 'Dashboard',
                tabBarLabel: 'Dashboard',
                tabBarIcon: <Icon name="cogs" size={30} color="#F77E0E" />,
                headerTintColor: "#E4DEDD",
                headerStyle: [{
                    backgroundColor: '#191613',
                }]
            },
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: '#221E1D'
            },
            indicatorStyle: {
                backgroundColor: '#F77E0E'
            },
            showIcon: true,
            showLabel: false
        },
        animationEnabled: false,
        swipeEnabled: false
    }
);

const StacksOverTabs = StackNavigator({
    Root: {
        screen: TabNav
    }
    // NotifSettings: {
    //     screen: MyNotificationsSettingsScreen,
    //     navigationOptions: {
    //         title: 'Notifications',
    //     },
    // },
    // Profile: {
    //     screen: MyProfileScreen,
    //     path: '/people/:name',
    //     navigationOptions: ({ navigation }) => {
    //         title: `${navigation.state.params.name}'s Profile!`;
    //     },
    // },
});

export default StacksOverTabs;