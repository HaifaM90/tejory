import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Form extends Component {

  state = {
    mobile: '',
    border_num: '',
    password: '',
    password_confirmation: '',
    error: ''
  }
  go = () => {
    Actions.dashboard();
  }

  login = () => {
    const border_num = this.state.border_num;
    const password = this.state.password;
  }

	render(){
		return(

  			<View style={styles.container}>
            {this.state.error !== '' && (
                this.state({error})
              )}
            <TextInput style={styles.inputBox}
                placeholder="Border Number"
                placeholderTextColor = "#dddad7"
                selectionColor="#fff"
                keyboardType="email-address"
                value={this.state.border_num}
                onChangeText={border_num => this.setState({border_num})}
                />
            {this.props.type == 'Signup' && (
                <TextInput style={styles.inputBox}
                placeholder="Mobile Number"
                placeholderTextColor = "#dddad7"
                value={this.state.mobile}
                onChangeText={mobile => this.setState({mobile})}
                />
              )}
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={this.props.type == "Login" ? true : false}
              placeholderTextColor = "#dddad7"
              value={this.state.password}
              onChangeText={password=> this.setState({password})}
              />
              {this.props.type == 'Signup' && (
                <TextInput style={styles.inputBox}
                placeholder="Password Confirmation"
                secureTextEntry={true}
                placeholderTextColor = "#dddad7"
                value={this.state.password_confirmation}
                onChangeText={password_confirmation => this.setState({password_confirmation})}
                />
              )}
             <TouchableOpacity style={styles.button} onPress={this.go}>
               <Text style={styles.buttonText}>{this.props.type}</Text>
             </TouchableOpacity>
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  button: {
    width:300,
    backgroundColor:'#42806f',
    marginVertical: 5,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#dddad7',
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
