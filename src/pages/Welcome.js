import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Welcome() {

    const route = useRoute();
    const [slogan, setSlogan] = useState('Slogan Value');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}>
                {route.params.title}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setSlogan('Changed!')}>
                <Text>Change slogan state</Text>
            </TouchableOpacity>
            <Text
                style={styles.description}>
                {route.params.description}
            </Text>
            <Text style={{ marginTop: 10 }}>{slogan}</Text>
            <Text style={{ marginTop: 10 }}>
                What about we go to see some houses?
            </Text>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
                <Text>Let's go!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('TicTacToe')}>
                <Text>Wanna Play some TicTacToe?</Text>
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
    text: {
        color: 'green'
    },
    description: {
        color: 'black'
    },
    button: {
        justifyContent: 'center',
        height: 40,
        marginTop: 10
    },
    homeButton: {
        justifyContent: 'center',
        height: 35,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        width: 300,
        borderRadius: 100
    },
    ticTacToeButton: {
        justifyContent: 'center',
        height: 35,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        width: 200,
        borderRadius: 100
    }
});