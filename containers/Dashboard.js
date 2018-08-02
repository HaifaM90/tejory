import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity, Modal,TextInput,Linking} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Topbar from '../components/Topbar';

import {Actions} from 'react-native-router-flux';


export default class Dashboard extends React.Component {
 state = {
   balance: '',
   password: '',
   modalVisible: false,
 }
 setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 goAccountS = () => {
    Actions.account_statement();
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

componentWillMount() {
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
     <View style={{backgroundColor: '#dddad7', height: '100%'}}>


     <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          >

          <View style={styles2.container}>
          <Topbar title='Nasser Ali Khan'> </Topbar>
            <TextInput style={styles2.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Code"
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
           <TouchableOpacity
                style={styles2.button2}
                onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                <Text style={styles2.buttonText}>Cancel</Text>
          </TouchableOpacity>
          </View>
        </Modal>


     <Topbar title='Nasser Ali Khan'> </Topbar>

        <View style = {styles.middle}>
          <View style = {styles.balance_box}>
            <Image style={styles.money_icon} source={require('../images/rich.png')} />
              <Text style={styles.balance}>{this.state.balance}</Text>
              <Text style={styles.heading_title}>Current Balance</Text>
          </View>
        </View>



        <View style={styles.quick_actions}>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
              <View style = {styles.first_box}>
                <View style={styles.sms_box}>
                <Image style={styles.icon} source={require('../images/sms.png')} />
                </View>
                <View style={styles.left_text}>
                  <Text style={styles.label}>Pay by SMS</Text>
                 </View>
              </View>
            </TouchableOpacity>
            <View style = {styles.second_box}>
                <View style={styles.qr_box}>
            <Image style={styles.icon} source={require('../images/qr-code.png')} />
            </View>
          <View style={styles.left_text}>
            <Text style={styles.label}>Pay by QR</Text>
            </View>
            </View>
            <TouchableOpacity onPress={() => {this.goAccountS();}}>
          <View style = {styles.last_box}>
            <View style={styles.log_box}>
          <Image style={styles.icon} source={require('../images/account_st.png')} />
          </View>
          <View style={styles.left_text}>
            <Text style={styles.label}>Account Statement</Text>
            </View>
          </View>
            </TouchableOpacity>
          </View>
        </View>

     </View>
   );
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



const styles = StyleSheet.create({
    middle: {
      flex: 10,
      alignItems:'center',
      paddingBottom: 30,
      marginTop: 120,
      backgroundColor: '#dddad7',

    },
    balance_box: {
      width: 340,
      backgroundColor:'#112340',
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
      height: 70,
      padding: 0,
      marginTop: 20,
      alignItems: 'center',
      justifyContent:'flex-start',
  flexDirection: 'row',

}, second_box: {
  backgroundColor:'#539e89',
      padding: 50,
      width: 340,
      height: 70,
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
      height: 70,
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
            height: 70,

    },qr_box: {
      backgroundColor:'#43806f',
      justifyContent:'center',
      alignItems: 'center',
      width: 90,
      height: 70,
    },
    log_box: {
      backgroundColor:'#2d5470',
      justifyContent:'center',
      alignItems: 'center',
      width: 90,
      height: 70,
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
       fontSize: 20,
    },
    quick_actions: {
      flexDirection: 'column',
      margin:0,
      flex: 10,
      alignItems:'center',
      backgroundColor: '#dddad7',
    },
    label: {
      fontSize: 18,
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
