import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../Slices/navSlice'


const data =[
    {
        id:"12",
        image:'https://links.papareact.com/3pn',
        title:'Get a ride',
        screen: 'MapScreen',
    },
    {
        id:"45",
        image:'https://links.papareact.com/28w',
        title:'Order food',
        screen: 'EatScreen',
    }
]

export default function NavOptions() {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
    return (
        <FlatList
        data={data}
        key={(item)=>{item.id}}
        keyExtractor={(item)=>{item.id}}
        horizontal
        renderItem={({item}) =>(
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200
            m-2 w-40
            `}
            disabled ={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                    style={{width:120, height:120,
                    resizeMode:'contain'}}
                    source={{
                        uri:item.image
                    }}
                    />
                    <Text
                    style={tw`mt-2 text-lg font-semibold`}
                    > 
                        {item.title}
                    </Text>
                    <Icon
                    name={'arrowright'}
                    color={'white'}
                    type={'antdesign'}
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    />

                </View>
            </TouchableOpacity>
        )}
        />
    )
}
