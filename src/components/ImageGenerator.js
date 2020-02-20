import React from "react";

let getNewImage = () => {
    let d = new Date();
    let year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    let genM = month[Math.floor(Math.random() * 12)];
    let genY = year[Math.floor(Math.random() * 13)];
    let genD = day[Math.floor(Math.random() * 29)];

    let genNewDate = genY + "-" + genM + "-" + genD;
    let dateNow = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    let newDate = "";

    if (genNewDate > dateNow) {
        newDate = dateNow;
    } else {
        newDate = genNewDate;
    }
    console.log(newDate);
    return newDate;
}

function ImageGenerator(props) {

    return (
        <div style={{ marginBottom: 20}}>
            <button onClick={getNewImage}>Random Image Generator</button>
        </div>
    )

}

export default ImageGenerator;