// import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
// import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
// import { Loader } from "@googlemaps/js-api-loader"
import { useCallback, useEffect } from 'react';
// import mapo from '../data/data.json'
// import { Marker } from 'react-naver-maps';
// import { List } from './List';
export function Map() {
  let infoWindow;
  const initMap = useCallback(() => {
    let map,pos,marker;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // eqfeed_callback()
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // infoWindow.setPosition(pos);
          // eqfeed_callback()
          map.setCenter(pos);
          marker=new window.google.maps.Marker({
            position: pos,
            map: map,
            // title: results[i].name,
            // icon:'url'
          });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },{enableHighAccuracy:true}
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    map=new window.google.maps.Map(document.querySelector('#map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 13,
    });
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      alert(browserHasGeolocation? "Error: The Geolocation service failed.": "Error: Your browser doesn't support geolocation.")
      // infoWindow.setPosition(pos);
      // infoWindow.setContent(
      //   browserHasGeolocation
      //     ? "Error: The Geolocation service failed."
      //     : "Error: Your browser doesn't support geolocation."
      // );
      // infoWindow.open(map);
    }
  }, [infoWindow]);
  
  // window.google.maps.event.addListener(Marker,'click',function(){infoWindow.open(map,Marker)})

  useEffect(() => {
      initMap();
    //   eqfeed_callback();
    // initMap()
    // map.setCenter(pos)
  });
    return(
        <>
            
            
            <h3 style={{display:'block',textAlign:'center'}}>※알림창 뜰 시 허용해주세요.※</h3>
            <div id="map"></div>
            
        </>
    )
}