// import React from 'react';
// import Geocode from "react-geocode";
//
// export default function Map() {
//
//     function handleClick() {
//         Geocode.setApiKey("AIzaSyA-XZEgzbTFdr3hw7xBqpo7S_2nOxmTDng");
//         Geocode.enableDebug();
//
//         Geocode.fromAddress("Kalamazoo, MI").then(
//             (response) => {
//                 const { lat, lng } = response.results[0].geometry.location;
//                 console.log(lat, lng);
//             },
//             (error) => {
//                 console.error(error);
//             }
//         );
//     }
//     return (
//         <button onClick={handleClick}>
//             Hello
//         </button>
//     )
// }
import React from 'react';
import { Marker, GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { Button, Container } from 'react-bootstrap'
import '../../Styles/Pages/Map.scss'
import Pin from '../../assets/img/pin.svg'
import testing from '../../assets/testing.json'

const containerStyle = {
    width: '1000px',
    height: '600px',
    borderRadius: '15px'
};


const position = {
    lat: 42.2780,
    lng: -83.7382
}

const onLoading = marker => {
    console.log('marker: ', marker)
    //marker.setIcon()
}


function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: "AIzaSyA-XZEgzbTFdr3hw7xBqpo7S_2nOxmTDng"
    })

    const [map, setMap] = React.useState(null)
    const [selectedCenter, setSelectedCenter] = React.useState(null);
    const [center, setCenter] =  React.useState({
        lat: 0,
        lng: -180
    })
    const [info, setInfo] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    function onClick() {
       window.open(info.url)
    }

    var image = {
        url: Pin,
        scaledSize: {width: 25, height: 45},
    }

    const divStyle = {
        background: 'white',
        border: '1px solid #ccc',
        padding: 15
    };
    const data = [
        {
            name: "asdfsadf",
            location: [37.556547032646, 37.556547032646],
            state: "Turkey"
        },
        {
            name: "Visual Artist",
            location: [
                42.2780,
                -83.7382
            ],
            state: "University of Michigan"
        }
        ///...
    ]

    return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedCenter ? selectedCenter : center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {testing.map((item, index) => (
                <div>
                {!selectedCenter && (
                    <Marker
                        onLoad={onLoading}
                        position={{
                            lat: item.LatLng[0],
                            lng: item.LatLng[1]
                        }}
                        clickable
                        key={index}
                        icon={image}
                        onClick={() => {
                            setInfo({
                                name: item.JobTitle,
                                state: item.Company,
                                url: item.JobUrl
                            })
                            setSelectedCenter({
                                lat: item.LatLng[0],
                                lng: item.LatLng[1]
                            });
                            console.log(info)
                        }}
                    />)} : <></>}

                {selectedCenter && (
                    <OverlayView
                        key={index}
                        position={selectedCenter}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <Container>
                            <div className='wrap-map'>
                                <a
                                    className="text-center"
                                    href='#'
                                    onClick={() => {
                                        setCenter(selectedCenter)
                                        setInfo(null)
                                        setSelectedCenter(null)
                                    }}
                                    type='button'>
                                    X
                                </a>
                                <span className="map-text-light">{info.name}</span>
                                <span className="map-text">{info.state}</span>

                                <div className="d-flex justify-content-center">
                                    <Button
                                        className="map-btn text-center"
                                        onClick={onClick}
                                        type='button'
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </OverlayView>
                )}: <></>}
                </div>
                ))}


            </GoogleMap>
        ) : <></>
}

export default React.memo(Map)