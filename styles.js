import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    titulo:{
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imagem:{
        width: 210,
        height: 150,
        marginBottom: 30,
    },
    input:{
        height: 45,
        width: 330,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 20,
        padding: 10,
    },
    verificar:{
        width: 330,
        height: 50,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    resultado:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15,
        textDecorationLine: 'underline',
    },
})

export {styles};