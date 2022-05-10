import React from 'react'
import { Text, View, Modal, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const OpenModal = ({isModalOpen, setIsModalOpen, dataModal }:any) => {

    // console.log('dataModal', dataModal[1])
    



  return (
    <>
        <Modal
            visible={isModalOpen}
            transparent={true}
            animationType={'fade'}
        >
            <View style={styles.modalContainerStyle}>
                <View style={styles.modalStyle}>
                    <Text style={styles.titleSubRaza}>Sub razas</Text>
                    <View >
                        {
                            dataModal != null 
                            ?
                            (

                                dataModal[1].map((dat:string, index:any) => 
                                <View key={index} style={styles.containStylesSubDogs}>
                                    <Text style={styles.textStyleSub}>{dat.charAt(0).toUpperCase() + dat.slice(1)}</Text>
                                    <Text >
                                        <Icon name="favorite-outline" size={35} color="#000"/>
                                    </Text>
                                </View>
                                )
                            )
                            :
                            (
                                
                            <>
                                <Text>Not info Dogs</Text>
                            </>
                            )
                             
                        }
                    </View>
                    <Button title='Close and Save' onPress={() => setIsModalOpen(!isModalOpen)}></Button>
                </View>
            </View>
        </Modal>
    </>
  )
}

const styles = StyleSheet.create({ 
    modalContainerStyle:{
        flex: 1,
        justifyContent: 'flex-end'
        
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
    containStylesSubDogs:{
        
        width:'60%',
        justifyContent:'space-between',
        flexDirection:'row',
        
    },
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
