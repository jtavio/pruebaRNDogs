import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems:'center'
    }}>
        <Image
            source={require('../assets/img/dogs.png')}
            style={{
                width:140,
                height:105,               
            }}
        />

    </View>
  )
}
