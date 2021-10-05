import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../Components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard';
import RideOption from '../Components/RideOption';


export default function MapScreen() {
    const Stack = createNativeStackNavigator()
    
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>


            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                    name="Navigator"
                    component={NavigateCard}
                    options={{
                        headerShown:false
                    }}
                    /> 
                <Stack.Screen
                    name="RideOption"
                    component={RideOption}
                    options={{
                        headerShown:false
                    }}
                    />
                    
                </Stack.Navigator>
            </View>
        </View>
    )
}
