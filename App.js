import React from 'react'
import { StyleSheet, View} from 'react-native'
import SignIn from './containers/SignIn'
import Registration from './containers/Registration'
import Dashboard from './containers/Dashboard'

export default class App extends React.Component {

 render() {
   return (
     <View style={styles.container}>
         <Dashboard />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 form: {
   flex: 1,
 }
});
