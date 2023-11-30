import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main : {
        flex:1,
        alignItems: 'center',
        justifyContent:"center",
    },

    title : {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: "bold",
        paddingVertical: 120
    },

    inputs : {
        height: 45,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderColor: '#000000',
        borderWidth:1.3,
        borderRadius:15
    },

    boxInputs : {
        height: 90,
        width:350,
        gap: 15
    },

    textInputs : {
        color:'#FFFFFF',
        fontSize: 15,
        paddingLeft:10,
        fontWeight:"bold",
    },

    botao : {
        height:'100%',
        backgroundColor: '#01633D',
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 15,
    },

    boxBotao : {
        height: 50,
        width:'80%',
        justifyContent:"center"
    },

    loginText : {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight:'bold'
    },

    boxLogin : {
        paddingBottom: 50
    },
    
    boxSenha : {
        paddingTop: 200
    },

    textSenha : {
        color: '#5987CC',
        fontSize: 17
    }
})