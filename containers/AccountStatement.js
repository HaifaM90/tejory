import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Topbar from '../components/Topbar'
import AccountCard from '../components/AccountCard'

export default class AccountStatement extends React.Component {

state={account_statement:[]}

  componentWillMount() {
    return fetch('http://ec2-54-244-199-67.us-west-2.compute.amazonaws.com:3000/transactions')
     .then((response) => response.json())
     .then((responseJson) => {
      this.setState({account_statement: responseJson});
     })
     .catch((error) => {
       console.error(error);
     });
  }

  render() {
    return (
      <View style={{backgroundColor: '#dddad7'}}>
      <Topbar title='Nasser Ali Khan'> </Topbar>
      <ScrollView style={{ marginTop:20}}>
      {
        this.state.account_statement.map((l, i) => (
      <AccountCard date={l.created_at} balance={l.amount} isDeposit={l.credit_account.id==1?'true':'false'} retailer={l.credit_account.owner_name}> </AccountCard>

  ))
    }
      </ScrollView>
    </View>  );
  }

}