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

  go = () => {
    Actions.dashboard();
  }
  
	render(){
		return(

  			<View style={styles.container}>
            <TextInput style={styles.inputBox} 
                placeholder={this.props.type == "Login" || this.props.type == "Signup" ? "Border Number" : "Code"}
                placeholderTextColor = "#dddad7"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />  
            {this.props.type == 'Signup' && (
                <TextInput style={styles.inputBox} 
                placeholder="Mobile Number"
                placeholderTextColor = "#dddad7"
                />  
              )}
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={this.props.type == "Login" || this.props.type == "Signup" ? "Password" : "Amount"}
              secureTextEntry={this.props.type == "Login" ? true : false}
              placeholderTextColor = "#dddad7"
              />
              {this.props.type == 'Signup' && (
                <TextInput style={styles.inputBox} 
                placeholder="Password Confirmation"
                secureTextEntry={true}
                placeholderTextColor = "#dddad7"
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
    padding:5
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