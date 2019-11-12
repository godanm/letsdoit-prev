import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import styles from '../../assets/css/styles'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Home</Text>
      </View>
    )
  }
}
