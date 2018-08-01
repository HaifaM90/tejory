import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase'
import Input from '../components/Input'
import Button from '../components/Button'

export default class Registration extends React.Component {
 state = {
   email: '',
   password: '',
   password_confirmation: '',
   mobile: '',
   authenticating: false,
   error: ''
 }
 componentWillMount() {
   firebase.initializeApp({
     apiKey: "AIzaSyDIc8Dcpn03wvh8gA3rUWivuQt8rHKP0As",
     authDomain: "wallet-01.firebaseapp.com",
     databaseURL: "https://wallet-01.firebaseio.com",
     projectId: "wallet-01",
     storageBucket: "wallet-01.appspot.com",
     messagingSenderId: "270396117096"
     });
 }

 onPressSignIn() {
   const { email, password } = this.state;
   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(() => { this.setState({ authenticating:true }); })
     .catch((er) => {
       console.log(er);
         //Login was not successful, let's create a new account
         firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(() => { this.setState({ authenticating:true }); })
             .catch((er) => {
               console.log(er);
               this.setState({authenticating:false,error: 'faild' });
             });
     });

 }

 savaData() {
   const { email, password } = this.state;
   firebase.database().ref('Wallet/' + userId).set({
       username: name,
       email: email,
     });
 }

 renderCurrentState(){
   if( this.state.authenticating ) {
     return (
       <View>
         <ActivityIndicator size="large"/>
         <Button onPress={() => this.savaData()}>save</Button>
       </View>
     )
   }

   return (
     <View style={styles.form}>
       <Input
           style={styles.input}
           placeholder="Border Number..."
           label="Border Number"
           onChangeText={email => this.setState({email})}
           value={this.state.email}
         />
         <Input
             style={styles.input}
             placeholder="Mobile Number..."
             label="Mobile Number"
             onChangeText={mobile => this.setState({mobile})}
             value={this.state.mobile}
           />
         <Input
           style={styles.input}
           placeholder='Enter your password...'
           label="Password"
           secureTextEntry
           onChangeText={password => this.setState({password})}
           value={this.state.password}
         />
         <Input
           style={styles.input}
           placeholder='Confirm your password...'
           label="Password Confirmation"
           secureTextEntry
           onChangeText={password => this.setState({password_confirmation})}
           value={this.state.password_confirmation}
         />
         <Button onPress={() => this.onPressSignIn()}>Register</Button>
     </View>
   )
 }

 render() {
   return (
     <View style={styles.container}>
         {this.state.error != '' && (<Text>{this.state.error}</Text>)}

         {this.renderCurrentState()}
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 20,
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row'
 },
 form: {
   flex: 1,
 },
 input: {
   marginTop: 60,
 }
});
