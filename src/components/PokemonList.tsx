import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Button, TextInput, ActivityIndicator } from 'react-native'

import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { useNavigation } from '@react-navigation/core';
import { setDogs } from '../context/dogsSlice/DogsSlice';
import { reqResApi } from '../api/ApiRequest';
import { favorite, PlacesRes } from '../models/DogsAll';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackScreenProps } from '@react-navigation/stack';
import { OpenModal } from './modal/OpenModal';
import { AddFavoriteModal } from './modal/AddFavoriteModal';
import { saveFavorite } from '../context/dogsSlice/SaveSlice';



export const PokemonList = () => {
    const navigator = useNavigation()
    const dispatch = useAppDispatch();
    const currentDogs = useAppSelector(state => state.dogs.message);
    const saveAll = useAppSelector(state => state.saveFavorite);
    const [dogsitems, setDogsitems] = useState<any>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [dataModal, setDataModal] = useState()
    const [dataModal1, setDataModal1] = useState<string>()
    const [saveAllFavorite, setSaveAllFavorite] = useState<any[]>([])
    const [masterDataSource, setMasterDataSource] = useState<any>([]);
    const [search, setSearch] = useState('');
    const [isDialogo, setIsDialogo] = useState(false);
    useEffect(() => {
        getMoviesFromApi()
    }, [])

    const getMoviesFromApi = async () => {

        try {
            setIsDialogo(true)
            const respuesta = await reqResApi.get<PlacesRes>('/all');
            console.log(respuesta.data.message);
            if (respuesta.data.status === 'success') {
                let datos = respuesta.data;
                console.log('dato', datos)
                dispatch(setDogs(datos));
                setIsDialogo(false)
            }

        } catch (error) {
            console.log(error)
            setIsDialogo(false)
        }

    };
    useEffect(() => {
        console.log('currentDogs', currentDogs)
        transforData()
    }, [currentDogs])

    const transforData = () => {
        console.log('hola mundo', currentDogs)
        let datosUnicos = Object.entries(currentDogs);
        console.log('datosUnicos--------', datosUnicos)
        setDogsitems(datosUnicos);
        setMasterDataSource(datosUnicos);
    }

    const nombreDogs = (items: any, index: any) => {
       
        const temp = dogsitems.slice()
       
        console.log('temp[index]', temp[index])
        setDataModal(temp[index])
        setIsModalOpen(!isModalOpen)
    }

    const detailsDogs = (items: any, index: any) => {
        console.log('va a la pantallas')
        const temp = dogsitems.slice()
        console.log('temp[index]', temp[index])
        navigator.navigate('DetailsDogsScreen', { data: temp[index] })
    }

    const onPressFavorite = (items: string, index: number) => {
        setIsModalOpen1(!isModalOpen1);
        setDataModal1(items);
        var info = {"items": items, status: true};
        var data: any[] = []
        data.push(info)
        dispatch(saveFavorite(data))
    }

    useEffect(() => {
        console.log('saveAll', saveAll)
        getFavoriteView();

    }, [saveAll])
    const getFavoriteView = () => {
        setSaveAllFavorite(saveAll.dogsItems);
    }

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
              console.log('item', item[0])
            // Applying filter for the inserted text in search bar
            const itemData = item[0]
              ? item[0].toUpperCase()
              : ''.toUpperCase();
            const textData =  text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setDogsitems(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setDogsitems(masterDataSource);
          setSearch(text);
        }
      };

    

    const renderFooter = () => {
        return (
            <>
                <Text style={{ fontSize: 30, backgroundColor: '#fff', height: 110 }}></Text>
            </>

        )
    }

    const renderItem = ({ item, index }: any) => (
        <View style={styles.generalBox}>
            <TouchableWithoutFeedback
                key={item.key}
                onPress={() => detailsDogs(item[0], index)}
            >
                <View style={styles.boxitem}>
                    <View style={styles.flexBoxitem}>
                        <Text style={styles.title}>{item[0]}</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            {
                                item[1].length != 0 ?
                                    (
                                        <Button title='open' color="#000" onPress={() => nombreDogs(item[0], index)}></Button>
                                    )
                                    :
                                    (
                                        <></>
                                    )
                            }
                            <View style={{ paddingTop: 10 }}>
                                
                                <Text>
                                    <Icon.Button
                                        name="favorite-outline"
                                        backgroundColor="#fff"
                                        size={30}
                                        color="#000"
                                        onPress={() => onPressFavorite(item[0], index)
                                        }
                                    ></Icon.Button>;
                                </Text> 
                            </View>
                        </View>

                    </View>
                    {/* <View>
                    <Text>
                        <Icon name="favorite-outline" size={30} color="#000" />;
                    </Text>
                    </View> */}

                </View>
            </TouchableWithoutFeedback>

        </View>
    );
    return (
        <>
            <View >
                <Text style={styles.titleList}>Dogs</Text>
            </View>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
                placeholderTextColor="#000"
                />
                {
                    isDialogo != true 
                    ?
                    (<FlatList
                        data={dogsitems}
                        renderItem={renderItem}
                        keyExtractor={item => item[0]}
                        ListFooterComponent={renderFooter}
                    />)
                    :
                    (
                        <View style={{ marginTop: '5%',
                            paddingLeft: 22}}>
                            {/* <Text style={styles.noDogs}>No tiene Dogs Favoritos</Text>  */}
                             <ActivityIndicator color='red' /> 
                        </View>
                    )
                }
            
            <OpenModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                dataModal={dataModal}
            />
            <AddFavoriteModal
                isModalOpen={isModalOpen1}
                setIsModalOpen={setIsModalOpen1}
                dataModal1={dataModal1}
            />
        </>
    )
}

const styles = StyleSheet.create({
    generalBox: {
        backgroundColor: 'white',
        //marginBottom:30,
        //paddingBottom:50


    },
    container: {

        marginTop: 20,
    },
    boxitem: {

        padding: 20,
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.00,
        elevation: 3,
    },
    flexBoxitem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 10
        //backgroundColor: 'yellow',
        //width: 330
    },
    title: {
        fontSize: 32,
        color: '#000'
    },
    titleList: {
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 20
    },
    containSubItmes: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 16,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginBottom: 10,
    },
    open: {
        color: '#45f',
        fontSize: 25,
        textDecorationLine: 'underline'
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
        color: '#000'
      },
    textColorSearch:{
        color:'#000'
    }
});
