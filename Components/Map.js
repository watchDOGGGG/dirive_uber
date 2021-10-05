import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin } from '../Slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY,test} from '@env'


export default function Map() {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

    useEffect(() => {
        if(!origin || !destination) return;

        //Zoom and fit to marker
        mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
            edgePadding:{top:50, right:50, bottom:50, left:50 }
        })
    
    }, [origin, destination])
    return (
        <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
    }}
    >   
    {
        origin && destination &&(
            <MapViewDirections
            destination={destination.description}
			origin={origin.description}
			apikey={GOOGLE_MAPS_APIKEY}
                        strokeColor='#FF0000'
                        strokeOpacity="1.0"
                        strokeWeight="2"
                    />
                )}

            {
          origin?.location &&(
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng
            }}
            title={"Origin"}
            description={origin.description}
            identifier="origin"
            />
          )
      } 
      {
          destination?.location &&(
            <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng
            }}
            title={"destination"}
            description={destination.description}
            identifier="destination"
            />
          )
      } 
      </MapView>
      )
}
