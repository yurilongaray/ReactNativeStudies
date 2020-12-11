import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0C4DE'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 50
    },
    input: {
        width: 300,
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        borderRadius: 2,
        fontSize: 15
    },
    loginButton: {
        justifyContent: 'center',
        height: 45,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#3498DB',
        width: 300,
        borderRadius: 400
    },
    loggintButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});