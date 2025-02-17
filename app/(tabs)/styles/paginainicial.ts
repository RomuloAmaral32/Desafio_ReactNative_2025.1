import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerPai: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999393',
    },
    logo : { 
        width: 50,
        height: 50,
        marginLeft: 10,
    },
    NavBar: {
        backgroundColor: '#2640A8',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        width: '100%',
        minHeight: 70,
        height: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
    },
});