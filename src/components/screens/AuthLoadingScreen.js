import React from 'react'
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Image, Alert,
} from 'react-native'

// AWS Amplify modular import
import Auth from '@aws-amplify/auth'
const logo = require('../images/questlogo.png')


export default class AuthLoadingScreen extends React.Component {
    state = {
    userToken: null
  }
    naviga
    async componentDidMount () {
    await this.loadApp()
  }
  // Get the logged in users and remember them
  loadApp = async () => {
    await Auth.currentAuthenticatedUser()
    .then(user => {
      this.setState({userToken: user.signInUserSession.accessToken.jwtToken})
        this.setState({currentUser: user})
    })
    .catch(err => console.log(err))
      this.props.navigation.navigate(this.state.userToken ? 'App' : 'Auth')
  }
  render() {
      return (
          <View style={styles.container}>
          <Image
              source={logo}
              style={{ width: 300, height: 200 }}
          />
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b44666',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
