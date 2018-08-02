import React from 'react'
import { StyleSheet, View, StatusBar} from 'react-native'
import Registration from './containers/Registration'
import Dashboard from './containers/Dashboard'
import Routes from './Routes';

export default class App extends React.Component {

 render() {
   return (
     <View style={styles.container}>
        <Routes/>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});
