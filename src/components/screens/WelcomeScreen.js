import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

// Load the app logo
const logo = require('../images/questlogo.png')

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }
    render() {
        return (
      <View style={styles.container}>
        {/* App Logo */}
        <Image
          source={logo}
          style={{ width: 300, height: 200 }}
        />
        <TouchableOpacity
          onPress={() => this.handleRoute('SignIn')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleRoute('SignUp')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleRoute('ForgetPassword')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Forgot password ?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // #b13366
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 15,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#E15A46'
  }
})
