import React from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
    Image,
} from 'react-native'

import {
  Container,
  Item,
  Input
} from 'native-base'

import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/css/styles'
const logo = require('../images/questlogo.png')

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

export default class SettingsScreen extends React.Component {
  state = {
    password1: '',
    password2: '',
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  // Change user password for the app
  changePassword = async () => {
    const { password1, password2 } = this.state
    await Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.changePassword(user, password1, password2)
    })
    .then(data => console.log('Password changed successfully', data))
    .catch(err => {
      if (! err.message) {
        console.log('Error changing password: ', err)
        Alert.alert('Error changing password: ', err)
      } else {
        console.log('Error changing password: ', err.message)
        Alert.alert('Error changing password: ', err.message)
      }
    })
  }
  // Sign out from the app
  signOutAlert = async () => {
    await Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out from the app?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        {text: 'OK', onPress: () => this.signOut()},
      ],
      { cancelable: false }
    )
  }
  signOut = async () => {
    await Auth.signOut()
    .then(() => {
      console.log('Sign out complete')
      this.props.navigation.navigate('Authloading')
    })
    .catch(err => console.log('Error while signing out!', err))
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
          <View style={{
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <Image
                  source={logo}
                  style={{ width: 300, height: 200 }}
              />
          </View>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              {/*Infos*/}
              <Container style={styles.infoContainer}>
                <View style={styles.container}>
                  <View style={[styles.buttonStyle, {borderRadius: 4, marginBottom: 20}]}>
                    <Text style={styles.buttonText}>Change password</Text>
                  </View>
                  {/* Old password */}
                  <Item style={styles.itemStyle}>
                    <Ionicons style={styles.iconStyle} name="ios-lock" />
                    <Input
                      style={styles.input}
                      placeholder='Old password'
                      placeholderTextColor='#adb4bc'
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                      onChangeText={value => this.onChangeText('password1', value)}
                    />
                  </Item>
                  {/* New password */}
                  <Item style={styles.itemStyle}>
                    <Ionicons style={styles.iconStyle} name="ios-lock" />
                    <Input
                      style={styles.input}
                      placeholder='New password'
                      placeholderTextColor='#adb4bc'
                      returnKeyType='go'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      ref='SecondInput'
                      onChangeText={value => this.onChangeText('password2', value)}
                    />
                  </Item>
                  <TouchableOpacity
                    onPress={this.changePassword}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center', marginBottom: 100}}/>
                  <TouchableOpacity
                    style={[styles.buttonStyle, {flexDirection: 'row', justifyContent: 'center'}]}
                    onPress={this.signOutAlert}>
                    <Ionicons
                      name="md-power"
                      style={{color: '#fff', marginRight: 10, fontSize: 24}}
                    />
                    <Text style={styles.buttonText}>
                      Sign out
                    </Text>
                  </TouchableOpacity>
                </View>
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

