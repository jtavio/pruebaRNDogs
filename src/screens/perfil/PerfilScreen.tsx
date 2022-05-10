import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useAppSelector } from '../../hooks/hooks';

interface misFavoritos {
  datos:{}
}

export const PerfilScreen = () => {
  const currentDogs = useAppSelector(state => state.login);
  const isDarkMode = useColorScheme() === 'light';
  const saveAll = useAppSelector(state => state.saveFavorite);
  const [saveAllFavorite, setSaveAllFavorite] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)


 

  useEffect(() => {
    saveFavoriteAll()
  }, [saveAll])
  

  const saveFavoriteAll = () => {
    console.log('saveAll ', saveAll)
    setIsLoading(true);
    // let myArray: any[] = [];
    // var misDatos = {
    //   "nombreFavorito": saveAll.breedsName,
    //   "idFavorite": saveAll.breedsId
    // }
    // myArray.push(misDatos);
     setSaveAllFavorite(saveAll.dogsItems);
    setIsLoading(false);
  }



  return (
    <View style={[styles.container]}>
      <View style={{flex:1}}>
        <Text style={styles.titleList}>Dogs</Text>
      </View>
      <View style={{flex:1, paddingHorizontal: 10}}>
        {
          currentDogs.username != "" ?
        (<Text style={[styles.textoColor, styles.textSize]}>
         Nombre:  {currentDogs.username}
        </Text>)
        :
        (
          <Text style={[styles.textoColor, styles.textSize]}>
         Nombre: nombre de usuario
        </Text>
        )
        }
        <Text style={[styles.textoColor, styles.textSize]}>
          Email: {currentDogs.email}
        </Text>
      </View>
      <View style={{flex:4, paddingHorizontal: 10}}>
        <Text style={[styles.textoColor, styles.textSize]}>
          Dogs favoritas:
        </Text>
        {
          isLoading != true ? 
          saveAllFavorite.map((e, i) => 
          <View key={i} >

            <Text style={{color:'#000', fontSize: 25}} >- { e["items"]}</Text>
          </View>
             //console.log('e', e["items"], 'i', i)
          )
          :
          <View style={{ marginTop: '5%',
            paddingLeft: 22}}>
             <Text style={styles.noDogs}>No tiene Dogs Favoritos</Text> 
            {/* <ActivityIndicator color='red' /> */}
          </View>
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
  },
  titleList: {
    fontSize: 32,
    textAlign: 'center',
    paddingVertical: 20,
    color:'#fff',
    backgroundColor: '#000'
  },
  textoColor: {
    color: '#000'
  },
  textSize:{
    fontSize:25
  },
  noDogs:{
    fontSize: 25,
    color: '#000'
  }
})
