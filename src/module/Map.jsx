/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
// import '../css/map.css'
// import mapo from '../data/data.json'
// import { conx } from './ctxt';
export function Map() {
    let map;
    let marker;
    let geocoder;
    let responseDiv;
    let response;
    let latitude;
    let longitude;
    let econ;
    // const myco=useContext(conx)

    const initMap = useCallback(() => {
        map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: { lat: 37.397, lng: 127.644 },
            mapTypeControl: false,
          });
          geocoder = new window.google.maps.Geocoder();
        
          const inputText = document.createElement("input");
        
          inputText.type = "text";
          inputText.placeholder = "주소를 검색해주세요";
          inputText.style.width='50%'
        
          const submitButton = document.createElement("input");
        
          submitButton.type = "button";
          submitButton.value = "Find";
          submitButton.classList.add("button", "button-primary");
          submitButton.style.width='60px'
          submitButton.style.textAlign='center'
        
          const clearButton = document.createElement("input");
        
          clearButton.type = "button";
          clearButton.value = "Clear";
          clearButton.classList.add("button", "button-secondary");
          clearButton.style.width='15%'
          clearButton.style.textAlign='center'
          clearButton.style.display='none'

          response = document.createElement("pre");
          response.id = "response";
          response.innerText = "";
          responseDiv = document.createElement("div");
          responseDiv.id = "response-container";
          responseDiv.appendChild(response);
        
          const instructionsElement = document.createElement("p");
        
          instructionsElement.id = "instructions";
          instructionsElement.innerHTML =
            "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
          instructionsElement.style.display='none'
          map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
          map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
          map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(clearButton);
          map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
          map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
          // marker = new window.google.maps.Marker({
          //   map,
          //   draggable:false,
          //   icon:`https://openweathermap.org/img/wn/${econ}.png`
          // });
          // console.log(econ)
          map.addListener("click", (e) => {
            geocode({ location: e.latLng });
          });
          submitButton.addEventListener("click", () =>
            geocode({ address: inputText.value }),
          );
          clearButton.addEventListener("click", () => {
            clear();
          });
          // clear();
    }, []);
      function clear() {
        marker.setMap(null);
        responseDiv.style.display = "none";
      }
      function geocode(request) {
        // clear();
        geocoder
          .geocode(request)
          .then((result) => {
            const { results } = result;
            // console.log(zoom)
            // setZoom()
            map.setCenter(results[0].geometry.location);
            // map.setOptions({zoom:13})
            // map=new window.google.maps.MapO
            
            let loca=JSON.stringify(results[0].geometry.location)
            latitude=loca.split(':')[1].split(',')[0]
            longitude=loca.split(':')[2].split('}')[0]
            // console.log(latitude)
            // console.log(longitude)
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=current&appid=a0b75def9203ad25b02cc52c590183b4`).then(a=>a.json()).then(b=>{
                econ=b.weather[0].icon
                // setEcon(bb)
                console.log(econ)
                marker = new window.google.maps.Marker({
                  map,
                  draggable:false,
                  icon:`https://openweathermap.org/img/wn/${econ}.png`
                });
                marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            })
            responseDiv.style.display = "none";
            response.innerText = JSON.stringify(result, null, 2);
            // console.log(jsonString)
            return results;
          })
          .catch((e) => {
            alert("다음 이유로 검색에 실패했습니다: " + e);
          });
      }
      
      useEffect(() => {
        initMap();
      }, [initMap]);
    return(
        <>
            <h1 style={{textAlign:'center'}}>GEOCODE</h1>
            <h3 style={{display:'block',textAlign:'center'}}>※입력 후 Find 버튼을 클릭해주세요. 엔터키는 무효합니다.※</h3>
            <div id="map" style={{width:'300px',height:'300px',margin:'0 auto'}}></div>
            {/* <button className='button-primary bottom' onClick={shar}>Share</button> */}
        </>
    )
}