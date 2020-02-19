import React, { useState, useEffect } from "react";
import Title from "./Title";
import Image from "./Image";
import Date from "./Date";
import axios from "axios";

function Pictures() {
    
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?date=2020-02-19&api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`)
        .then(response => {
            console.log(response);
            setPicture(response.data);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }, []);

    return (
    <div>
        <Title 
            title = {picture.title}
        />
        <Image 
            url = {picture.url}
        />
        <Date 
            date = {picture.date}
        />
    </div>
    )
}

export default Pictures;