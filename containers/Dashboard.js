import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Topbar from '../components/Topbar';

export default class Dashboard extends React.Component {
 state = {
   email: '',
   password: '',
 }

componentWillMount() {
  // firebase.initializeApp({
  //   apiKey: "AIzaSyDIc8Dcpn03wvh8gA3rUWivuQt8rHKP0As",
  //   authDomain: "wallet-01.firebaseapp.com",
  //   databaseURL: "https://wallet-01.firebaseio.com",
  //   projectId: "wallet-01",
  //   storageBucket: "wallet-01.appspot.com",
  //   messagingSenderId: "270396117096"
  //   });
  // this.ref = firebase.firestore().collection('users')
  // this.ref.add({
  //   border_number: "1234",
  //   mobile_number:"056765342",
  //   name: "test",
  //   password: "1234"
  // })
}

 render() {
   return (
     <View style={{backgroundColor: '#dddad7', height: '100%'}}>

     <Topbar title='Nasser Ali Khan'> </Topbar>
        <View style = {styles.middle}>
          <View style = {styles.balance_box}>
            <Image style={styles.money_icon} source={require('../images/rich.png')} />
              <Text style={styles.balance}>500 SR</Text>
              <Text style={styles.heading_title}>Current Balance</Text>
          </View>
        </View>
        <View style={styles.quick_actions}>
        <View style={{alignItems: 'center'}}>
            <View style = {styles.first_box}>
            <View style={styles.sms_box}>
            <Image style={styles.icon} source={require('../images/sms.png')} />
            </View>
            <View style={styles.left_text}>
              <Text style={styles.label}>Pay by SMS</Text>
              </View>
            </View>
            <View style = {styles.second_box}>
                <View style={styles.qr_box}>
            <Image style={styles.icon} source={require('../images/qr-code.png')} />
            </View>
          <View style={styles.left_text}>
            <Text style={styles.label}>Pay by QR</Text>
            </View>
            </View>
          <View style = {styles.last_box}>
            <View style={styles.log_box}>
          <Image style={styles.icon} source={require('../images/account_st.png')} />
          </View>
          <View style={styles.left_text}>
            <Text style={styles.label}>Account Statement</Text>
            </View>
          </View>
          </View>
        </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
    middle: {
      flex: 4,
      alignItems:'center',
      paddingBottom: 30,
      marginTop: 20,
      backgroundColor: '#dddad7',

    },
    balance_box: {
      width: 340,
      backgroundColor:'#112340',
      paddingBottom: 40,
      height: 320,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
    },
    balance: {
      fontSize: 50,
      color: '#ca9e3b',
      fontWeight: 'bold',
    },
    first_box: {
      backgroundColor:'#b68e34',
      padding: 50,
      width: 340,
      height: 90,
      padding: 0,
      marginTop: 20,
      alignItems: 'center',
      justifyContent:'flex-start',
  flexDirection: 'row',

}, second_box: {
  backgroundColor:'#539e89',
      padding: 50,
      width: 340,
      height: 90,
      padding: 0,
      marginTop: 10,
      alignItems: 'center',
      justifyContent:'flex-start',
   flexDirection: 'row'

    },
    last_box: {
      backgroundColor:'#376587',
      padding: 50,
      width: 340,
      height: 90,
      padding: 0,
      marginTop: 10,
      alignItems: 'center',
      justifyContent:'flex-start',
   flexDirection: 'row'

    },sms_box: {
        backgroundColor:'#9e7c2d',
          justifyContent:'center',
            alignItems: 'center',
        width: 90,
            height: 90,

    },qr_box: {
      backgroundColor:'#43806f',
      justifyContent:'center',
      alignItems: 'center',
      width: 90,
      height: 90,
    },
    log_box: {
      backgroundColor:'#2d5470',
      justifyContent:'center',
      alignItems: 'center',
      width: 90,
      height: 90,
    },
    heading: {
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading_title: {
       color: '#dddad7',
       fontSize: 30,
    },
    quick_actions: {
      flexDirection: 'column',
      marginTop:80,
      flex: 10,
      alignItems:'center',
      backgroundColor: '#dddad7',
    },
    label: {
      fontSize: 24,
      color: '#dddad7',
      fontWeight: 'bold'
    },
    left_text: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10,
    },
    money_icon: {
      width: 120,
      height:120,

    },
});
