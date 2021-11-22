import {useEffect, useState,createContext} from 'react'

const MapContext = createContext({})

const MapCP = props => {

    const [myPosition, setMyPosition] = useState(null)

    

    const value = {
        myPosition : {
          lat: 48.866517967026695,
          lng: 2.417072568508451 
        },
        setMyPosition
    }
  
    return (
        <MapContext.Provider value={value}>
         {props.children}   
        </MapContext.Provider>
    )
}

export {
  MapCP,
  MapContext    
} 
