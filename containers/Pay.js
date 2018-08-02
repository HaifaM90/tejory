
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Platform,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Topbar from '../components/Topbar'
import Form from '../components/Form'

export default class Pay extends Component {

  state = {
    amount: '',
    code: '',
  }


  componentWillMount() {
    // this.getAccounts();
  }
  sendData = () => {
      const uid = 1;
      const toID = this.state.code;

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
      <View style={styles2.container}>
      <Topbar > </Topbar>
        <TextInput style={styles2.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Merchant Code"
                placeholderTextColor = "#dddad7"
                selectionColor="#fff"
                keyboardType="email-address"
                value={this.state.code}
                onChangeText={code => this.setState({code})}
        />
        <TextInput style={styles2.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Amount"
              placeholderTextColor = "#dddad7"
              value={this.state.amount}
              onChangeText={amount => this.setState({amount})}
        />

        <TouchableOpacity style={styles2.button1} onPress={this.sendData}>
         <Text style={styles2.buttonText}>Send</Text>
       </TouchableOpacity>
      </View>
			)
	}
}
const styles2 = StyleSheet.create({
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
    color:'#636e72',
    marginVertical: 5,
    padding:10
  },
  button1: {
    width:300,
    backgroundColor:'#42806f',
    marginVertical: 5,
    paddingVertical: 13,
    marginTop:20
  },
  button2: {
    width:300,
    backgroundColor:'#b78e34',
    marginVertical: 5,
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
