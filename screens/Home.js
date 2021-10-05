import React from 'react'
import { View, Text,SafeAreaView,Image } from 'react-native'
import styles from './styles'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY,test} from '@env'
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../Slices/navSlice';
import NavFavourites from '../Components/NavFavourites';

export default function Home() {

    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw` bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                     style={{
                    width: 100, height:100, 
                    resizeMode:'contain'
                }}
                source={{
                    uri:'https://links.papareact.com/gzs'
                }}
                />
                <GooglePlacesAutocomplete
                styles={{
                    container:{
                        flex:0
                    },
                    textInput:{
                        fontSize:18
                    }
                }}
                onPress={(data, details =null) =>{
                    dispatch(setOrigin({
                        location:details.geometry.location,
                        description: data.description,

                    }))
                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}

                query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Where from"
                />
                <NavOptions/>
                <NavFavourites/>
            </View>
        </SafeAreaView>
    )
}
