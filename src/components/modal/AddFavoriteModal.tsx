import React, { useEffect } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

export const AddFavoriteModal = ({isModalOpen, setIsModalOpen, dataModal1}:any) => {
    console.log('dataModal1', typeof dataModal1)
    
    
    return (
        <>
            <Modal
                visible={isModalOpen}
                transparent={true}
                animationType={'fade'}
            >
                <View style={styles.modalContainerStyle}>
                    <View style={styles.modalStyle}>
                        <Text style={styles.titleSubRaza}>Añadido a favoritos</Text>
                        <Text style={styles.textStyleSub}>{dataModal1}</Text>
                       
                        <Button title='Close' onPress={() => setIsModalOpen(!isModalOpen)}></Button>
                    </View>
                </View>
            </Modal>
        </>
      )
}

const styles = StyleSheet.create({ 
    modalContainerStyle:{
        flex: 1,
        justifyContent: 'center'
        
    },

    modalStyle:{
        backgroundColor:'#fff',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin:20,
        borderRadius:16,
        paddingHorizontal:30,
        paddingVertical:20
    },
     //containStylesSubDogs:{
        
    //     width:'60%',
    //     justifyContent:'space-between',
    //     flexDirection:'row',
        
    // },
     textStyleSub:{
         fontSize:20,
         color:'#000',
         marginBottom:10
        
     },
     titleSubRaza: {
         fontSize:25,
         color: '#000',
         marginBottom:5,

     }

})
