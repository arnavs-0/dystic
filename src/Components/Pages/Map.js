import React from 'react';
import {GoogleMap, Marker, OverlayView, useJsApiLoader} from '@react-google-maps/api';
import {Button, Container} from 'react-bootstrap'
import '../../Styles/Pages/Map.scss'
import Pin from '../../assets/img/pin.svg'

const containerStyle = {
    width: '1000px',
    height: '600px',
    borderRadius: '15px'
};


const position = {
    lat: 37.0902,
    lng: -95.7129
}

const onLoading = marker => {
    console.log('marker: ', marker)
    //marker.setIcon()
}


function Map() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY
    })

    const [map, setMap] = React.useState(null)
    const [selectedCenter, setSelectedCenter] = React.useState(null);
    const [center, setCenter] = React.useState({
        lat: 42.2780,
        lng: -83.7382
    })
    const [zoom, setZoom] = React.useState(1)
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

    const data = localStorage.getItem("res")
    let datas = JSON.parse(data)


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center ? center : position}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {datas.map((item, index) => (
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
                                setZoom(15)
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
