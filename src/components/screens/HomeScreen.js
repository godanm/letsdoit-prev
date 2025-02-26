import React from 'react'
import {
    StyleSheet,
    View,
    Button, Alert,
} from 'react-native'
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTrip, createGroup } from '../../graphql/mutations'
import styles from '../../assets/css/styles'

import config from '../../aws-exports'

API.configure(config)             // Configure Amplify
PubSub.configure(config);

async function createNewEntry() {

    try {
        const entry2 = {
            groupname: "Amex hiking group"
        }
        await API.graphql(graphqlOperation(createGroup, {input: entry2}))
        console.log("SUCCESS")
    }
    catch (err) {
        console.log(err)
    }

}
function HomeScreen() {
    return (
        <View style={styles.container}>
                <Button title="Add Entry" onPress={createNewEntry}></Button>
        </View>
    );
}

export default HomeScreen;