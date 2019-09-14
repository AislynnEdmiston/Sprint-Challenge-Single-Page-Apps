import React from "react";

export default function EpisodeCard(props) {
  console.log(props, 'here')
  return <div>
      <p>{props.ep.episode}</p>
      <p>{props.ep.name}</p>
      <p>{props.ep.air_date}</p>
  </div>
}


// id: '',
// name: '',
// air_date: '',
// episode: '', 
// characters: []