
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Platform,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Form from '../components/Form';

export default class Pay extends Component {

  state = {
    amount: '',
    code: '',
  }

  getAccounts() {
    return fetch('http://ec2-54-244-199-67.us-west-2.compute.amazonaws.com:3000/accounts/1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    // this.getAccounts();
  }

  sendData = () => {
      const uid = 2;
      const toID = 1;

      const url = 'sms:+13342924340?body=From:'+uid+'\nTo:'+toID+'\nAmount:'+this.state.amount

      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Unsupported url: ' + url)
        } else {
          return Linking.openURL(url)
        }
      }).catch(err => console.error('An error occurred', err))
  }

	render() {
		return(
			<View style={styles.container}>
        <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Code"
                placeholderTextColor = "#dddad7"
                selectionColor="#fff"
                keyboardType="email-address"
                value={this.state.code}
                onChangeText={code => this.setState({code})}
        /> 
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Amount"
              placeholderTextColor = "#dddad7"
              value={this.state.amount}
              onChangeText={amount => this.setState({amount})}
              /> 

        <TouchableOpacity style={styles.button} onPress={this.sendData}>
         <Text style={styles.buttonText}>Send</Text>
       </TouchableOpacity>  
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#dddad7',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'#fff',
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    padding:10
  },
  button: {
    width:300,
    backgroundColor:'#42806f',
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  icon: {
    width:30,
    height: 30,
    marginTop: 70,
    left: 0,
    position: 'absolute',
  }
  
});