import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocations] = useState([{
        dimension: '',
        id: '',
        name: '',
        type: '' 
     }]);
  
    console.log(locations, 'lL')
  
    useEffect(() => {
      
  
      axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => setLocations(res.data.results))
        .catch(err => console.log(err))
  
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
  
    return (
      <section className="locations-list grid-view">
      
       {locations.map(place => <LocationCard place={place} /> )}
      </section>
    );
}
