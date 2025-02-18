import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerPai: {
        width:"100%",
        height:"100%",
        flex: 1,
        backgroundColor: '#999393',
    },
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    destaqueProduto: {
        width: "80%",
        height: 150,
        backgroundColor: 'white',
        borderRadius: 16,
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
        gap: "28%",
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
    textos: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    descricao: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'regular',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
    containerredes: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: "2%",
        marginBottom: 80,
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: "8%",
    },
    nomerede: {
        fontSize: 20,
    }
});