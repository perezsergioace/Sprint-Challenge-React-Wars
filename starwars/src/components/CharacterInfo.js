import React, {useState, useEffect} from "react";
import axios from "axios";
import CardPhoto from "./CardPhoto";

function CharacterInfo() {

    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results);
            setCharacterInfo(response.data.results);
        })
        .catch(error => {
            console.log("Data was not returned", error);
        });
    }, []);

    return (
        <div className="characterInfoContainer">
            {characterInfo.map((item) => {

                return (
                    <CardPhoto 
                    key={item.name}
                    character={item.name}
                    gender={item.gender}
                    height={item.height}
                    mass={item.mass}
                    eye_color={item.eye_color}
                    />
                );
            })}
        </div>
    );
};

export default CharacterInfo;