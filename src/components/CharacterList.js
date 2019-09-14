import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
   const [characters, setCharacters] = useState([{
      id: '',
      name: '',
      image: '',
      origin: {name: ''},
      species: '',
      status: '' 
   }]);

  console.log(characters, 'CL')

  useEffect(() => {
    

    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err))

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
    
     {characters.map(char => <CharacterCard char={char} /> )}
    </section>
  );
}
