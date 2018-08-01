import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import * as firebase from 'firebase'
import {Column as Col, Row} from 'react-native-flexbox-grid';

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
     <View>
        <View style = {styles.topbar}>
          <Image style={styles.icon} source={require('../images/user.png')} />
          <Text style={styles.username}>Mohammed Salem</Text>
          <Image style={styles.icon} source={require('../images/settings-work-tool.png')} />
        </View>
        <View style = {styles.middle}>
          <View style = {styles.balance_box}>
            <Text style={styles.balance}>500 SR</Text>
          </View>
        </View>
        <View style={styles.quick_actions}>
          <View style={{flexDirection: 'row'}}>
            <View style = {styles.right_box}>
              <Text style={styles.label}>SMS</Text>
            </View>
            <View style = {styles.left_box}>
            <Text style={styles.label}>QR</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
          <View style = {styles.bottom_box}>
            <Text style={styles.label}>العمليات</Text>
          </View>
          </View>
        </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
    topbar: {
       width: '100%',
       flex: 1,
       height: 100,
       alignItems:'flex-end' ,
       paddingBottom: 20,
       paddingRight: 15,
       paddingLeft: 15,
       paddingTop: 30,
       flexDirection: 'row',
       justifyContent: 'space-between',
       backgroundColor: '#0a2342',
    },
    middle: {
      flex: 4,
      alignItems:'center',
      paddingTop: 30,
      paddingBottom: 30,
      backgroundColor: '#e7ecef',
      borderBottomWidth: 1,
      marginTop: 10
    },
    balance_box: {
      backgroundColor:'#6ca6cd',
      padding: 40,
      borderRadius: 10
    },
    username: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
    },
    balance: {
      fontSize: 50,
      color: '#fff'
    },
    right_box: {
      backgroundColor:'#6ca6cd',
      padding: 50,
      borderRadius: 10,
      width: 120,
      height: 120,
      padding: 30,
      marginLeft:40,
      marginRight:10,
      marginBottom:10,
      alignItems: 'center',
      justifyContent:'center'
    },
    left_box: {
      backgroundColor:'#6ca6cd',
      padding: 50,
      borderRadius: 10,
      width: 120,
      height: 120,
      padding: 30,
      marginRight:40,
      marginLeft:10,
      marginBottom:10,
      alignItems: 'center',
        justifyContent:'center'
    },
    bottom_box: {
      backgroundColor:'#6ca6cd',
      padding: 50,
      borderRadius: 10,
      width: 260,
      height: 60,
      padding: 30,
      margin: 5,
      alignItems: 'center',
      justifyContent:'center'
    },
    quick_actions: {
      flexDirection: 'column',
      marginTop:50,
      flex: 10,
      alignItems:'center',
    },
    label: {
      fontSize: 20,
      color: '#fff',
      fontWeight: '700'
    }
});
