import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    border: 2px solid grey;
    padding: 20px;
    margin-top: 20px;
`
const Bold = styled.span`
    font-weight: bold;
`
const H3 = styled.h3`
    font-size: 30px;
`

export default function LocationCard(props) {
  return <Card>
    <H3>{props.place.name}</H3>
    <p><Bold>Dimension:</Bold> {props.place.dimension}</p>
    <p><Bold>Type:</Bold> {props.place.type}</p>
  </Card>;
}
