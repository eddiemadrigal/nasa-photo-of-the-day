import React, { useState, useEffect } from "react";
import Title from "./Title";
import Image from "./Image";
import Date from "./Date";
import Explanation from "./Explanation";
import ImageGenerator from "./ImageGenerator";
import axios from "axios";


const Pictures = () => {

    const [picture, setPicture] = useState([]);

    const getNewImage = () => {
        let year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

        let genD = day[Math.floor(Math.random() * 27)];
        let genM = month[Math.floor(Math.random() * 11)];
        let genY = year[Math.floor(Math.random() * 9)];
        
        let newDate = genY + "-" + genM + "-" + genD;
        console.log(newDate);

        setPicture(`https://api.nasa.gov/planetary/apod?date=2019-01-19&api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`)

        return null;

    }

    useEffect(() => {

        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`)
        .then(response => {
            console.log(response);
            setPicture(response.data);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }, [picture]);

    return (
    <div>
        <Title 
            title = {picture.title}
        />
        <ImageGenerator 
            getDate = {getNewImage}
        />
        <Image 
            url = {picture.url}
        />
        <Date 
            date = {picture.date}
        />
        <Explanation
            explanation = {picture.explanation}
        />
    </div>
    )
}

export default Pictures;