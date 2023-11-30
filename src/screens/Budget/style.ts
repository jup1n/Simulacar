import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main : {
        flex:1,
        alignItems: 'center',
        justifyContent:"center",
    },

    textSubTitle : {
        color:'#FFFFFF',
        fontSize: 15,
        paddingLeft:10,
        fontWeight:"bold",
    },

    title : {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: "bold",
        paddingVertical: 100
    },

    boxSubTitle : {
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
    },

    boxAll : {
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        paddingBottom: 35
    },

    boxResults : {
        flexDirection: "row",
        backgroundColor: '#D9D9D9',
        width:'90%',
        height: 45,
        justifyContent: "center",
        alignItems:"center",
        gap: 200
    },

    textResults : {
        color:'#1A254E',
        fontSize: 15,
        paddingLeft:10,
        fontWeight:"bold",
    },

    boxTotal : {
        paddingTop: 25,
        flexDirection: "row"
    },

    boxCheked : {
        paddingBottom: 35
    }
})