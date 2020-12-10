import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/welcome';

export default class Welcome extends Component {

    /* State is private and can be only acessed for this component */
    state = {
        slogan: 'This will be replaced (empty string)'
    }

    alternate = () => {

        this.setState({
            slogan: this.state.slogan ? '' : 'Did u see?'
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}>
                    {this.props.title}
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.alternate}>
                    <Text>Change slogan state</Text>
                </TouchableOpacity>
                <Text
                    style={styles.description}>
                    {this.props.description}
                </Text>
                <Text style={{ marginTop: 10 }}>{this.state.slogan}</Text>
            </View>
        )
    }
}