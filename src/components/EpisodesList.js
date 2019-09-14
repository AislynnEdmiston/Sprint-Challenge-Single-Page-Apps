import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';



// const Section = styled.section`
//     border: 2px solid grey;
// `



export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
   const [episodes, setEpisodes] = useState([{
      id: '',
      name: '',
      air_date: '',
      episode: '', 
      characters: []
   }]);

  console.log(episodes, 'CL')

  useEffect(() => {
    

    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => setEpisodes(res.data.results))
      .catch(err => console.log(err))

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="episode-list grid-view">
    
     {episodes.map(ep => <EpisodeCard ep={ep} /> )}
    </section>
  );
}