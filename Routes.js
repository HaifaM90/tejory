import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Dashboard from './containers/Dashboard';
import Pay from './containers/Pay';

export default class Routes extends Component{
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="signup" component={Signup} title="Register"  />
			      <Scene key="login" component={Login} title="Login"   />
			      <Scene key="dashboard" component={Dashboard}/>
			      <Scene key="pay" component={Pay} initial={true} />
			    </Stack>
			 </Router>
			)
	}
}