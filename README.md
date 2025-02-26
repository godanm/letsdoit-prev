
## Overview

The technologies used in this app are the following:

* Navigation is done with: [react-navigation](https://reactnavigation.org/).

* Front end: [Expo](https://docs.expo.io/versions/latest/workflow/expo-cli/).

* Layout: [native-base](https://docs.nativebase.io/).

* Back end: [AWS Amplify](https://aws-amplify.github.io/).

## Authentication flow

* Users are taken to the welcome screen.

* Users can sign up, sign in, request a password change, navigate between screens.

* International phone input is included in the sign up screen.

* Users are redirected to the home screen after log in. 

* Users can navigate between screens using the bottom tab navigator or the drawer navigator.

* Users are kept logged in until they sign out from the app.

## Prerequisites

* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
  * `npm install -g expo-cli`
  
* [AWS account](https://aws.amazon.com/amplify/)

* [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* [AWS Amplify CLI](https://aws-amplify.github.io/)
  * `npm install -g @aws-amplify/cli`
  * `amplify configure` 
