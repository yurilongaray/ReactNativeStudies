import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from './components/login';
import Welcome from './components/welcome';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Welcome' component={Welcome} options={{ title: 'Welcome' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

/* import React, { Component } from 'react';
import Welcome from './components/welcome';
import Login from './components/login';

export default class App extends Component {

	render() {
		// return (
		// 	<Welcome
		// 		title='Welcome'
		// 		description='React Native Project'
		// 	/>
		// );
		return (
			<Login/>
		)
	}
} */