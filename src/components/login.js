import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from '../styles/login';

export default function Login({ navigation }) {

    const welcomeObj = {
        title: 'Here it is!',
        description: 'This is the new Project'
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/dragon.jpeg')}
            />
            <TextInput
                placeholder='Whats your email?'
                style={{ ...styles.input, marginTop: 10 }}
            />
            <TextInput
                placeholder='What about the password?'
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Welcome', welcomeObj)}
                style={styles.loginButton}
            >
                <Text style={styles.loggintButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

/* import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from '../styles/login';

export default class Login extends Component {

    showAlert = () => {
        alert('ReactNativeProject', 'Signin up');
    }

    loginButton =() => {
        this.props.navigation.navigate('Welcome')
    }

    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/dragon.jpeg')}
                />
                <TextInput
                    placeholder='Whats your email?'
                    style={{ ...styles.input, marginTop: 10 }}
                />
                <TextInput
                    placeholder='What about the password?'
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={this.showAlert}
                    style={styles.loginButton}
                >
                    <Text style={styles.loggintButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
} */