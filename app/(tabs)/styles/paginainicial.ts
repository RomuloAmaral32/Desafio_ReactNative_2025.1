import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerPai: {
        flex: 1,
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
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: "20%",
        minHeight: 70,
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    conjunto: {  
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conjuntoBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: "5%",
    },
    textConjunto: {
        color: 'white',
        fontSize: 18,
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