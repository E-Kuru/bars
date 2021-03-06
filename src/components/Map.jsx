import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

import { MapContext } from '../context/MapCP'

import { useContext } from "react"
import styled from 'styled-components'
import allBars from '../bars.json'

const BarMap = styled.div `
    width : 70%;
    height : 100vh;
    background-color : #008080

`
const Ooga = styled.div `
    height : 100%;
`

function Map() {
    
    const {myPosition} = useContext(MapContext)
    console.log(allBars[0]);
    return (
        <BarMap>
            <Ooga>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={myPosition}
                defaultZoom={16}>

                    <Marker
                    color='red'
                    lat={myPosition.lat}
                    lng={myPosition.lng}
                    />
                                            
                        {allBars.map(e => (
                            <Marker
                            color='#1A202C'
                            bar={allBars}
                            lat={e.latitude}
                            lng={e.longitude}
                            />
                        ))}
            </GoogleMapReact>
            </Ooga>
        </BarMap>
        )
}

export default Map
