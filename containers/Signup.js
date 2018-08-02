
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component{

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
				<Image  style={{width:200, height: 250,marginTop: 60,marginBottom: 30}}
                source={require('../images/logo.png')}/>
				<Form type="Signup"/>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#dddad7',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    paddingBottom: 80
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});