import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from "react-router-dom";
import '../../styles/Doctors.css';
import '../../styles/Map.css';
import axios from 'axios'
import DoctorForm from './DoctorForm';
import "../../styles/Button_Animation.css"

const Doctor = () => {
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    showVenues();
  });

  const showVenues = async () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
      client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
      query: "doctor",
      near: "Delhi",
      v: "20182507"
    };
    const response = await axios.get(endPoint + new URLSearchParams(parameters));
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvYmhpdDEwMDU4IiwiYSI6ImNrd3d5OWJ1cjA4ZW4yb2xhaGlhMHkwMWMifQ.zohlgS2FCbHsUPsspScPCw';
    map.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [77.2100, 28.5672],
      zoom: 11
    });
    response.data.response.groups[0].items.map(myVenue => {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          `<span>${myVenue.venue.name}</span>`
        );
      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat([myVenue.venue.location.lng, myVenue.venue.location.lat])
        .setPopup(popup)
        .addTo(map.current);
    })
  }

  return (
    <>
      <DoctorForm />
      <div className="info">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <h2>Dr. Kiran Dev</h2>
            <p>Physician</p>
            <Link to="/Details" className="btn-flip" data-back="Book" data-front="Set Appointment"
             
               //button rubberband animation
           onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
           onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
            
            ></Link>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">4</div>
              <div className="type">Star</div>
            </div>
            <div className="stat order">
              <div className="value">123</div>
              <div className="type">reviews</div>
            </div>
            <div className="stat">
              <div className="value">4 Year</div>
              <div className="type">Experience</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <h2>Dr. Rahul Kumar</h2>
            <p>Dermatologist</p>
            <Link to="/Details" className="btn-flip" data-back="Book" data-front="Set Appointment"
            
              //button rubberband animation
             onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
            onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
            
            ></Link>
          </div>
          <div className="card-stats card2">
            <div className="stat">
              <div className="value">4.2</div>
              <div className="type">Star</div>
            </div>
            <div className="stat order">
              <div className="value">101</div>
              <div className="type">reviews</div>
            </div>
            <div className="stat">
              <div className="value">10 Year</div>
              <div className="type">Experience</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image card3"></div>
          <div className="card-text card3">
            <h2>Dr. Emily Sharma</h2>
            <p>Psychiatrist, Neurologist</p>
            <Link to="/Details" className="btn-flip" data-back="Book" data-front="Set Appointment"
            
                  //button rubberband animation
                onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
                onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
            
            ></Link>
          </div>
          <div className="card-stats card3">
            <div className="stat">
              <div className="value">4.1</div>
              <div className="type">Star</div>
            </div>
            <div className="stat order">
              <div className="value">56</div>
              <div className="type">reviews</div>
            </div>
            <div className="stat">
              <div className="value">12 Year</div>
              <div className="type">Experience</div>
            </div>
          </div>
        </div>
      </div>
      <form className="searchbox">
        <input type="search" placeholder="Search for Doctor" />
        <button type="submit" value="search">&nbsp;</button>
      </form>
      <main>
        <div id="map"/>
      </main>
    </>
  )
}
function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0]
  const script = window.document.createElement("script")
  const AddOrNot = (index.src === url);
  script.src = url
  script.async = true
  script.defer = true
  if (!AddOrNot)
    index.parentNode.insertBefore(script, index);
}

export default Doctor
