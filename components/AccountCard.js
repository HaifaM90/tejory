import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';

const AccountCard = ({date,balance,isDeposit='false',retailer})=> {
  return (

      <View style={styles.card}>
          <View style={isDeposit=='true'?styles.log_box_deposit:styles.log_box_withdraw}>
          </View>
          <View style={styles.left_text}>
          <View style={styles.info_side}>
            <Text style={styles.retailer_label}>{retailer}</Text>
              <Text style={styles.date_label}>{date}</Text>
          </View>
          <View style={styles.balance_side}>
            <Text style={styles.balance_label}>{isDeposit=='true'?'+':'-'}{balance} SR</Text>
            </View>
          </View>
      </View>
    )
  };

const styles = StyleSheet.create({
  card: {
      marginBottom: 10,
    marginLeft: 10,
     width: 345,
     flex: 1,
     height: 100,
     alignItems:'flex-end',
     flexDirection: 'row',
     backgroundColor:'#fff'
  },
  log_box_deposit: {
    width: 10,
    height: 100,
        backgroundColor:'#127c4b',
  },
   log_box_withdraw: {
      width: 10,
      height: 100,
        backgroundColor:'#a20c28',
    },

  left_text: {
      height: 100,
      width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
     backgroundColor:'#fff'
  },
  info_side: {
        height: 100,
    flexDirection:'column',
        paddingTop: 30,
        marginLeft: 20,
         backgroundColor:'#fff'
  },
  balance_side:{
        height: 100,
    marginRight: 30,
      paddingTop: 30,
       backgroundColor:'#fff'
  },
  balance_label: {
    fontSize: 26,
    color: '#5c5a58',
    fontWeight: 'bold'
  },
  date_label: {
    fontSize: 16,
    color: '#9e9994'
  },
  retailer_label: {
    fontSize: 19,
    color: '#9e9994'
  }
})

export default AccountCard
