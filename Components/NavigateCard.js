import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY,test} from '@env'
import { StyleSheet } from 'react-native';
import { useDispatch, } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { setDestination } from '../Slices/navSlice';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

export default function NavigateCard() {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl `}>Hello Prince</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                <GooglePlacesAutocomplete
                placeholder={"where to"}
                debounce={400}
                styles={toInputBoxStyles}
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                fetchDetails={true}
                query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data,details = null)=>{
                    dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description
                    })); 
                    navigation.navigate("RideOption")
                }}
                />
                </View>

                <NavFavourites/>
            </View>

            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                onPress={() =>{
                    navigation.navigate ("RideOption") 
                }}
                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                <Icon
                name="car" 
                type="font-awesome"
                color="white"
                size={16} 
                />
                <Text style={tw`text-white text-center`}>
                    Rides
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 `}>
                <Icon
                name="fast-food-outline" 
                type="ionicon"
                color="black"
                size={16}
                />
                <Text style={tw`text-white text-center`}>
                    Rides
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 20,
        flex: 0
    },
    textInput:{
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom:0
    }
})