import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/css/styles'
const logo = require('../images/questlogo.png')
import config from '../../aws-exports'
import { listGroups } from '../../graphql/queries'
import { Connect } from "aws-amplify-react-native";

API.configure(config)             // Configure Amplify
PubSub.configure(config);

class MyGroups extends React.Component {

    render() {
        const ListView = ({ groups }) => (
            <ScrollView>
                    {groups.map(groups => <Text key={groups.id}>{groups.groupname} </Text>)}
            </ScrollView>
        );
        return (
            <Connect query={graphqlOperation(listGroups)}>
                {({ data: { listGroups }, loading, errors }) => {
                    if (loading || !listGroups) return (<Text>Loading...</Text>);
                    return (<ListView groups={listGroups.items} /> );
                }}
            </Connect>
        )
    }
}

export default MyGroups
