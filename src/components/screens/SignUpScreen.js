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
  Modal,
  FlatList,
  Animated,
    ScrollView,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/css/styles'

import {
  Container,
  Item,
  Input} from 'native-base'

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'

// Import data for countries
import data from '../countriesData'

// Load the app logo
const logo = require('../images/logo.png')

// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'United States'
  )[0].flag

// Default render of country code
const defaultCode = data.filter(
  obj => obj.name === 'United States'
  )[0].dial_code

export default class SignUpScreen extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        fadeIn: new Animated.Value(0),  // Initial value for opacity: 0
        fadeOut: new Animated.Value(1),  // Initial value for opacity: 1
        isHidden: false,
        flag: defaultFlag,
        modalVisible: false,
        authCode: '',
        name:'',
        given_name:'',
    }
  // Get user input
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  // Methods for logo animation
  componentDidMount() {
    this.fadeIn()
  }
  fadeIn() {
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
    this.setState({isHidden: true})
  }
  fadeOut() {
    Animated.timing(
      this.state.fadeOut,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
    this.setState({isHidden: false})
  }
  // Functions for Phone Input
  showModal() {
    this.setState({ modalVisible: true })
    // console.log('Shown')
  }
  hideModal() {
    this.setState({ modalVisible: false })
    // refocus on phone Input after selecting country and/or closing Modal
    this.refs.FourthInput._root.focus()
    // console.log('Hidden')
  }
  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      // Set data from user choice of country
      this.setState({ phoneNumber: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }
  // Sign up user with AWS Amplify Auth
  async signUp() {
    const { username, password, email, phoneNumber, name, given_name} = this.state
    // rename variable to conform with Amplify Auth field phone attribute
    const phone_number = phoneNumber
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number, name, given_name}
    })
    .then(() => {
      console.log('sign up successful!')
      Alert.alert('Enter the confirmation code you received.')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when signing up: ', err)
        Alert.alert('Error when signing up: ', err)
      } else {
        console.log('Error when signing up: ', err.message)
        Alert.alert('Error when signing up: ', err.message)
      }
    })
  }
  // Confirm users and redirect them to the SignIn page
  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.confirmSignUp(username, authCode)
    .then(() => {
      this.props.navigation.navigate('SignIn')
      console.log('Confirm sign up successful')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when entering confirmation code: ', err)
        Alert.alert('Error when entering confirmation code: ', err)
      } else {
        console.log('Error when entering confirmation code: ', err.message)
        Alert.alert('Error when entering confirmation code: ', err.message)
      }
    })
  }
  // Resend code if not received already
  async resendSignUp() {
    const { username } = this.state
    await Auth.resendSignUp(username)
    .then(() => console.log('Confirmation code resent successfully'))
    .catch(err => {
      if (! err.message) {
        console.log('Error requesting new confirmation code: ', err)
        Alert.alert('Error requesting new confirmation code: ', err)
      } else {
        console.log('Error requesting new confirmation code: ', err.message)
        Alert.alert('Error requesting new confirmation code: ', err.message)
      }
    })
  }
  render() {
    let { fadeOut, fadeIn, isHidden, flag } = this.state
    const countryData = data
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          enabled>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Container style={styles.infoContainer}>
                <View style={styles.container}>
                  {/* username section  */}
                  <Item style={styles.itemStyle}>
                    <Ionicons name="ios-person" style={styles.iconStyle} />
                    <Input
                      style={styles.input}
                      placeholder='Username'
                      placeholderTextColor='#adb4bc'
                      keyboardType={'email-address'}
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                      onChangeText={value => this.onChangeText('username', value)}
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                  </Item>
                  {/*  password section  */}
                  <Item style={styles.itemStyle}>
                    <Ionicons name="ios-lock" style={styles.iconStyle} />
                    <Input
                      style={styles.input}
                      placeholder='Password'
                      placeholderTextColor='#adb4bc'
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      // ref={c => this.SecondInput = c}
                      ref='SecondInput'
                      onSubmitEditing={(event) => {this.refs.ThirdInput._root.focus()}}
                      onChangeText={value => this.onChangeText('password', value)}
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                  </Item>
                  {/* email section */}
                  <Item style={styles.itemStyle}>
                    <Ionicons name="ios-mail" style={styles.iconStyle} />
                    <Input
                      style={styles.input}
                      placeholder='Email'
                      placeholderTextColor='#adb4bc'
                      keyboardType={'email-address'}
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={false}
                      ref='ThirdInput'
                      onSubmitEditing={(event) => {this.refs.FourthInput._root.focus()}}
                      onChangeText={value => this.onChangeText('email', value)}
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                  </Item>
                    {/* firstname section */}
                    <Item style={styles.itemStyle}>
                        <Ionicons name="ios-person" style={styles.iconStyle} />
                        <Input
                            style={styles.input}
                            placeholder='First Name'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'default'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            ref='FourthInput'
                            onSubmitEditing={(event) => {this.refs.FifthInput._root.focus()}}
                            onChangeText={value => this.onChangeText('name', value)}
                            onFocus={() => this.fadeOut()}
                            onEndEditing={() => this.fadeIn()}
                        />
                    </Item>
                    {/* given name section */}
                    <Item style={styles.itemStyle}>
                        <Ionicons name="ios-person" style={styles.iconStyle} />
                        <Input
                            style={styles.input}
                            placeholder='Given Name'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'default'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            ref='FifthInput'
                            onSubmitEditing={(event) => {this.refs.SixthInput._root.focus()}}
                            onChangeText={value => this.onChangeText('given_name', value)}
                            onFocus={() => this.fadeOut()}
                            onEndEditing={() => this.fadeIn()}
                        />
                    </Item>
                  {/* phone section  */}
                  <Item style={styles.itemStyle}>
                    <Ionicons name="ios-call" style={styles.iconStyle} />
                    {/* country flag */}
                    <View><Text style={{fontSize: 40}}>{flag}</Text></View>
                    {/* open modal */}
                    <Ionicons
                      name="md-arrow-dropdown"
                      style={[styles.iconStyle, { marginLeft: 5 }]}
                      onPress={() => this.showModal()}
                    />
                    <Input
                      style={styles.input}
                      placeholder=''
                      placeholderTextColor='#adb4bc'
                      keyboardType={'phone-pad'}
                      returnKeyType='done'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={false}
                      ref='EighthInput'
                      value={this.state.phoneNumber}
                      onChangeText={(val) => {
                        if (this.state.phoneNumber===''){
                          // render UK phone code by default when Modal is not open
                          this.onChangeText('phoneNumber', defaultCode + val)
                        } else {
                          // render country code based on users choice with Modal
                          this.onChangeText('phoneNumber', val)
                        }}
                      }
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                    {/* Modal for country code and flag */}
                    <Modal
                      animationType="slide" // fade
                      transparent={false}
                      visible={this.state.modalVisible}>
                      <View style={{ flex: 1 }}>
                        <View style={{ flex: 10, paddingTop: 80, backgroundColor: '#5059ae' }}>
                          <FlatList
                            data={countryData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                              ({ item }) =>
                                <TouchableWithoutFeedback
                                  onPress={() => this.getCountry(item.name)}>
                                  <View
                                    style={
                                      [
                                        styles.countryStyle,
                                        {
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'space-between'
                                        }
                                      ]
                                    }>
                                    <Text style={{fontSize: 45}}>
                                      {item.flag}
                                    </Text>
                                    <Text style={{fontSize: 20, color: '#fff'}}>
                                      {item.name} ({item.dial_code})
                                    </Text>
                                  </View>
                                </TouchableWithoutFeedback>
                            }
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => this.hideModal()}
                          style={styles.closeButtonStyle}>
                          <Text style={styles.textStyle}>
                            Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                  </Item>
                  {/* End of phone input */}
                  <TouchableOpacity
                    onPress={() => this.signUp()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                  {/* code confirmation section  */}
                  <Item style={styles.itemStyle}>
                    <Ionicons name="md-apps" style={styles.iconStyle} />
                    <Input
                      style={styles.input}
                      placeholder='Confirmation code'
                      placeholderTextColor='#adb4bc'
                      keyboardType={'numeric'}
                      returnKeyType='done'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={false}
                      onChangeText={value => this.onChangeText('authCode', value)}
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                  </Item>
                  <TouchableOpacity
                    onPress={() => this.confirmSignUp()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Confirm Sign Up
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.resendSignUp()}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Resend code
                    </Text>
                  </TouchableOpacity>
                </View>
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
