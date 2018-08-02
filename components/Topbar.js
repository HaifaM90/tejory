import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import {Actions} from 'react-native-router-flux';

export default class Topbar extends React.Component {
  goDashboard = () => {
     Actions.dashboard();
   }
   goLogin = () => {
     this.getBalance();
      Actions.login();
    }
    getBalance =() => {
      return fetch('http://ec2-54-244-199-67.us-west-2.compute.amazonaws.com:3000/accounts/1')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({balance:responseJson.balance})
        })
        .catch((error) => {
          console.error(error);
        });
    }
   render() {
     return (
         <View style = {styles.topbar}>
         <TouchableOpacity onPress={() => {this.goDashboard();}}>
           <Image style={styles.icon} source={require('../images/backbutton.png')} />
           </TouchableOpacity>
           <Text style={styles.title}>Nasser Ali Khan</Text>
           <TouchableOpacity onPress={() => {this.goLogin();}}>
           <Image style={styles.icon} source={require('../images/logout.png')} />
           </TouchableOpacity>
         </View>
       )
   }
}


const styles = StyleSheet.create({
  topbar: {
     width: '100%',
     flex: 1,
     height: 100,
     alignItems:'flex-end' ,
     marginTop:5,
     paddingRight: 15,
     paddingLeft: 15,
     paddingTop: 40,
     paddingBottom: 20,
     flexDirection: 'row',
     justifyContent: 'space-between',
     borderBottomWidth: 2,
     borderColor:'#fff',
     position: 'absolute',
     top: 0,

  },
  title: {
    color: '#112340',
    fontSize: 20,
  },
})
