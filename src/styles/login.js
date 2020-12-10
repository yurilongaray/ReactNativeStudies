import { StyleSheet } from 'react-native';

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
})

export default styles;