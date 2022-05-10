import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { resBreet } from '../../../api/getByBreed';
import { getImages } from '../../../context/dogsSlice/BreedsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { BreedsImage } from '../../../models/DogsAll';


interface RouterParams {
    data: any
}

interface Props extends StackScreenProps<any,any>{};

export const DetailsDogsScreen = ({route, navigation}:Props) => {
    const params = route.params as RouterParams
    console.log(params.data[0])
    let hound = params.data[0];
    let breedsSub = params.data[1];
    const [Images, setGetImage] = useState<BreedsImage[]>([])
    const dispatch = useAppDispatch();
    const setBreeds = useAppSelector(state => state.breeds);
    const [isLoading, setIsLoading] = useState(false)
    const [stringImage, setStringImage] = useState();
    useEffect(() => {
      
        getBreed()
    }, [])
    useEffect(() => {
        navigation.setOptions({
            title:params.data[0]
        })
    }, [])

    
    

    const getBreed = async() => {
        
        console.log('breedsSub', breedsSub);
        if(breedsSub.length >= 1){
            let mulImages: BreedsImage[] = [];
                setIsLoading(true);
                breedsSub.map(async (e: any) => {
                    let breeds = e;
                    const respuesta = await resBreet.get<BreedsImage>(`/${hound}/${breeds}/images/random`);
                    
                    console.log('respuesta', respuesta.data);
                    mulImages.push(respuesta.data)
                    console.log('mulImages',mulImages);
                    setGetImage([...mulImages, respuesta.data]);
                    
                    dispatch(getImages(respuesta.data))
                    
                    //setTimeout(() => dispatch(getImages(respuesta.data)), 5000);
                });
                console.log('Images2',Images);
                // dispatch(getImages(mulImages));
                
        }
        
        
        
        if(breedsSub.length == 1) {
            try {
                const respuesta = await resBreet.get(`/${hound}/images/random`);
                setStringImage(respuesta.data.message);
                console.log('respuestadeltitulo', respuesta.data);
            } catch (error) {
                console.log('error', error);
            }
        }
            try {
                const respuesta = await resBreet.get(`/${hound}/images/random`);
                setStringImage(respuesta.data.message);
                console.log('respuestadeltitulo', respuesta.data);
            } catch (error) {
                console.log('error', error);
            }
        

        
    
        
    }
     useEffect(() => {
         setTimeout(() => {
            
             console.log('setBreedssetTimeout', setBreeds)
             console.log('ImagessetTimeout', Images)
             setIsLoading(false);
         }, 3000);
       
     }, [setBreeds, Images, getImages])
  

    // const renderItem = () => {
    //     <View key={index}>
    //         <Image source={{uri: `${item}`}} style={{width: 500, height:500}} />
    //     </View>
    // }
  
    if(isLoading){
        return (
            <View style={{ marginTop: '5%',
            paddingLeft: 22}}>
            {/* <Text style={styles.username}>Loading...</Text> */}
            <ActivityIndicator color='red' />
          </View>
        )
    }else {
  return (
    <>
    <View >
        <View style={{ height:220, width: '100%', justifyContent:'center', alignItems:'center', paddingTop:10 }} >
            <Text style={styles.textBreeds}>{params.data[0]}</Text>
            <Image style={[ styles.imagesStyles, { width: 100, height: 100 }]}
                source={{ uri: `${stringImage}` }}/>
            {/* <Text>{stringImage}</Text> */}
        </View>
    </View>
    <ScrollView >
    <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        
        }]}>
        <View style={{  width: '50%', justifyContent:'space-around' }}>
            {
               Images.map((e, i) => 
               <View key={i} style={{ alignItems:'center', paddingBottom:5 }}>
               
                <Image style={[styles.imagesStyles, { width: 100, height: 100 }]}
                source={{ uri: `${e.message}` }} />
               </View>
               ).slice(0,-1)
           } 
        </View>
        <View style={{  width: '50%' ,justifyContent:'space-around'}}>
            {
                breedsSub.map((e:string, i:any) => 
                    <View key={i}>
                        <Text style={styles.textSubBreeds}>{e}</Text>
                    </View>
                )
            }
        </View>     
    </View>
    </ScrollView>
    
    </>
  )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:10
    },
    textBreeds:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000', 
        paddingBottom: 10
    },
    textSubBreeds: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',       
    },
    imagesStyles:{
        borderRadius: 5,

    }

    
  }); 
