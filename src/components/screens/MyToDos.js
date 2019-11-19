import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/css/styles'
const logo = require('../images/questlogo.png')

export default class MyToDos extends React.Component {
    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#000000',
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={logo}
                        style={{ width: 300, height: 200 }}
                    />
                </View>
                <View style={styles.container}>
                        <ListItem
                            title="First Name"
                            rightTitle="Godan"
                            hideChevron
                        />
                        <ListItem
                            title="Given Name"
                            rightTitle="Mannazhi"
                            hideChevron
                        />
                        <ListItem
                            title="Username"
                            rightTitle="godansudha"
                            hideChevron
                        />
                        <ListItem
                            title="Email"
                            rightTitle="reachgodan@gmail.com"
                            hideChevron
                        />
                        <ListItem
                            title="Phone"
                            rightTitle="609-977-0877"
                            hideChevron
                        />
                        <ListItem
                            title="Address"
                            rightTitle="9050 W Redbird Rd. Peoria, AZ - 85383"
                            hideChevron
                        />
                </View>
            </ScrollView>

        )
    }
}
