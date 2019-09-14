import React from "react";

export default function LocationCard(props) {
  return <div>
    <h3>{props.place.name}</h3>
    <p>Dimension: {props.place.dimension}</p>
    <p>Type: {props.place.type}</p>
  </div>;
}
