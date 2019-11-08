import React from "react"
import styled from "styled-components";

const PhotoCard = styled.div`
    width: 300px;
    margin: auto;
    background-color: #444;
    margin-bottom: 50px;
`;

const PhotoCardText = styled.h1`
    background-color: #000;
    color: #ffe300;
    padding: 10px;
`;

const NameContainer = styled.div`
    color: mintcream;
    font-size: 1.3rem;
    padding: 5px;
`;

const CardPhoto = props => {
    console.log(props.character)

    return (
        <PhotoCard key = {props.name}>
            <PhotoCardText>{props.character}</PhotoCardText>
            <NameContainer>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Eye Color: {props.eye_color}</p>
            </NameContainer>
        </PhotoCard>
    )
}






export default CardPhoto;