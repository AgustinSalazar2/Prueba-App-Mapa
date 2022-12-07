import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getUserLocation } from "../helpers/UserGeolocation";
import { funcionInit } from "../helpers/geolocalizacion";

export const VistaDelMapa = () => {
  const [center, setCenter] = useState(null)

  function LocationMarker(e) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        map.flyTo(e.latlng);
        console.log(e.latlng);
        setPosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  useEffect(()=>{
    funcionInit()
  },[])

  // useEffect(() => {
  //   getUserLocation()
  //     .then(lngLat => {
  //       console.log(lngLat)
  //       setCenter(lngLat)
  //     })
  // }, [])
  // console.log(center);

  return (
    <MapContainer center={{ lat: "-26.1783552", lng: "-58.179584" }} zoom={14}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <Marker position={[-26.1783552, -58.179584]}>
        <Popup>Estoy en el polo cientifico</Popup>
      </Marker>
    </MapContainer>
  );
};
