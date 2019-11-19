import React from 'react'
import {
    StyleSheet,
    View,
    Button, Alert,
} from 'react-native'
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTrip } from '../../graphql/mutations'
import styles from '../../assets/css/styles'

import config from '../../aws-exports'

API.configure(config)             // Configure Amplify
PubSub.configure(config);

async function createNewEntry() {
    const entry2 = {
        tripdestination: "Yosemite falls",
        tripstart: "2020-06-04",
        tripend: "2020-06-08",
        thumpbnails:"https://static.greatbigcanvas.com/images/square/robert-harding-world-imagery/upper-and-lower-yosemite-falls-california,2319379.jpg?max=128",
        status:true

    }
    await API.graphql(graphqlOperation(createTrip, { input: entry2 }))
    console.log("SUCCESS")

}
function MyTrips() {
    return (
        <View style={styles.container}>
            <Button title="Add Entry" onPress={createNewEntry}></Button>
        </View>
    );
}

export default MyTrips;