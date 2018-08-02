import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import {Column as Col, Row} from 'react-native-flexbox-grid';

const Topbar = ({title})=> {
  return (
      <View style = {styles.topbar}>
        <Image style={styles.icon} source={require('../images/user.png')} />
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.icon} source={require('../images/settings-work-tool.png')} />
      </View>
    )
  };

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
  },
  title: {
    color: '#112340',
    fontSize: 20,
  },
})

export default Topbar
