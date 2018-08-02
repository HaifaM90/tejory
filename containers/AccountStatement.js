import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Topbar from '../components/Topbar'
import AccountCard from '../components/AccountCard'
import Moment from 'moment';

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
      <View style={{backgroundColor: '#dddad7', height: '100%'}}>
        <Topbar title='Nasser Ali Khan'> </Topbar>

        <ScrollView style=  {{ marginTop:120}}>

        {
          this.state.account_statement.map((l, i) => (
        <AccountCard date={Moment(l.created_at).format('DD MMMM YYYY')} balance={l.amount} isDeposit={l.credit_account.id==1?'true':'false'} retailer={l.credit_account.owner_name}> </AccountCard>))
        }

        </ScrollView>
      </View>
   );
  }

}
