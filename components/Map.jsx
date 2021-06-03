import React, { useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'


export const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '62rem',
        zoom: 13
    });

    useEffect(() => {
        if (process.browser) {
            navigator.geolocation.watchPosition(({coords}) => {
                setViewport({...viewport, latitude: coords.latitude,
                    longitude: coords.longitude})
            }, err => console.error(err))
        }
    }, [])


    return process.browser && (
            <ReactMapGL
                mapStyle='mapbox://styles/mapbox/streets-v11'
                mapboxApiAccessToken={process.env.MAPBOX_KEY}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
            </ReactMapGL>
    )
}



