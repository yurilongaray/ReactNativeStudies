import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/welcome';

export default function Welcome() {

    const route = useRoute();
    const [slogan, setSlogan] = useState('Slogan Value');

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
        </View>
    )
}