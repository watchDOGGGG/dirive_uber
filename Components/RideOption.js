import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'


const data =[
    {
        id: "Uber-x-123",
        title:"Uber",
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: "Uber-xl-143",
        title:"Uber XL",
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: "Uber-Lux-183",
        title:"Uber LUX",
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    },
]
export default function RideOption() {
    const [Selected, setSelected] = useStatetate(null)
const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                onPress={() =>{
                    navigation.navigate("NavigateCard")
                }}
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon
                    name="chevron-left"
                    type="fontawesome"
                    />
                </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>
                Select a Ride
            </Text>
            </View>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item:{id,title,multiplier,image}})=>(
                <TouchableOpacity 
                onPress={() => setSelected(item)}
                style={tw`flex-row justify-between items-center px-10 ${id === Selected?.id && 'bg-gray-200'}`}>
                    <Image
                    style={{width:100, height:100, resizeMode:'contain'}}
                    source={{uri:image}}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>
                            {title}
                        </Text>
                        <Text>
                            Travel time...
                        </Text>
                    </View>
                    <Text style={tw`text-xl`}>
                        $99
                    </Text>
                </TouchableOpacity>
            )}
            />
        </SafeAreaView>
    )
}
