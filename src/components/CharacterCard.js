import React from "react";

export default function CharacterCard(props) {
  console.log(props, 'here')
  return <div>

    <h3>{props.char.name}</h3>
    <img src={props.char.image} alt={props.char.name} />
    <p>Origin: {props.char.origin.name}</p>
    <p>Species: {props.char.species}</p>
    <p>Status: {props.char.status}</p>
  </div>
}
