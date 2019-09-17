import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    border: 2px solid grey;
    padding: 20px;
    margin-top: 20px;
`

export default function EpisodeCard(props) {
  console.log(props, 'here')
  return <Card>
      <p>{props.ep.episode}</p>
      <p>{props.ep.name}</p>
      <p>{props.ep.air_date}</p>
  </Card>
}


// id: '',
// name: '',
// air_date: '',
// episode: '', 
// characters: []