import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    formContainer:{
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 100,
      
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color:'white',
        fontWeight:'bold'
    },
    inputField:{
        color: 'white',
        fontSize: 20
    },

    inputFieldIos:{
        borderBottomColor:'white',
        borderBottomWidth: 2,
        paddingBottom:4
    },

    bottomContainer:{
        alignItems:'center',
        marginTop: 50
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    newUserContainer:{
        alignItems: 'flex-end',
        marginTop: 10
    }
})