import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home.js';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import TicTacToe from './pages/TicTacToe';

const Stack = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Login'
					component={Login}
				/>
				<Stack.Screen
					name='Welcome'
					component={Welcome}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'Rental',

						headerRight: () => (
							<TouchableOpacity style={{ marginRight: 15 }}>
								<Feather
									name="shopping-bag"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						)
					}}
				/>
				<Stack.Screen
					name="Detail"
					component={Detail}
					options={{
						title: 'Detalhe',
						headerTitleStyle: {
							fontFamily: 'Montserrat_700Bold'
						},

						headerRight: () => (
							<TouchableOpacity style={{ marginRight: 15 }}>
								<Feather
									name="shopping-bag"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						)
					}}
				/>
				<Stack.Screen
					name="TicTacToe"
					component={TicTacToe}
					options={{
						title: 'TicTacToe',
						headerTitleStyle: {
							fontFamily: 'Montserrat_700Bold'
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;