import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main : {
        flex:1,
        alignItems: 'center',
        justifyContent:"center"
    },

    inputs : {
        height: 45,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderColor: '#00000',
        borderWidth:1.3,
        borderRadius:15
    },

    boxOverInputs : {
        paddingBottom: 118
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

    title : {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: "bold",
        paddingVertical: 120
    },

    subTitle : {
        paddingBottom: 70
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

    textNext : {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight:'bold'
    },
    
    boxBack : {
        paddingTop: 35
    },

    textBack : {
        color: '#5987CC',
        fontSize: 20
    }
})