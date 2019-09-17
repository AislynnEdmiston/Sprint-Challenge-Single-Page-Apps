import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    border: 2px solid grey;
    padding: 30px;
    margin-top: 20px;
`

const H3 = styled.h3`
    font-size: 30px;
`
const Bold = styled.span`
    font-weight: bold;
`

export default function CharacterCard(props) {
  console.log(props, 'here')
  return <Card>

    <H3>{props.char.name}</H3>
    <img src={props.char.image} alt={props.char.name} />
    <p><Bold>Origin:</Bold> {props.char.origin.name}</p>
    <p><Bold>Species:</Bold> {props.char.species}</p>
    <p><Bold>Status:</Bold> {props.char.status}</p>
  </Card>
}
