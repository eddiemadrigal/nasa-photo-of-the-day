import React from "react";

const getNewImage = () => {
    let year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

    let genD = day[Math.floor(Math.random() * 27)];
    let genM = month[Math.floor(Math.random() * 11)];
    let genY = year[Math.floor(Math.random() * 9)];
    
    let newDate = genY + "-" + genM + "-" + genD;
    let newUrl = `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`;
    return newUrl;
}

export default ImageGenerator;