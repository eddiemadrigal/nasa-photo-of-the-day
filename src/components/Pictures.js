import React, { useState, useEffect } from "react";
import {Container, Row, Col} from "reactstrap";
import Title from "./Title";
import Image from "./Image";
import Date from "./Date";
import Explanation from "./Explanation";
import axios from "axios";


const Pictures = () => {

    const [picture, setPicture] = useState([]);
    const [picture1, setPicture1] = useState([]);
    const [picture2, setPicture2] = useState([]);
    
    const getNewImage = () => {
        let year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

        let genD = day[Math.floor(Math.random() * 27)];
        let genM = month[Math.floor(Math.random() * 11)];
        let genY = year[Math.floor(Math.random() * 9)];
        
        let newDate = genY + "-" + genM + "-" + genD;
        let newUrl = `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`;

        let d = new window.Date();
        // console.log("year:", d.getFullYear());
        
        // console.log("Today's date: ", new window.Date());

        return newUrl;
    }

    useEffect(() => {

        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`)
        .then(response => {
            setPicture(response.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, []);

    useEffect(() => {
        
        axios
        .get(getNewImage())
        .then(response => {
            setPicture1(response.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, []);

    useEffect(() => {
        
        axios
        .get(getNewImage())
        .then(response => {
            setPicture2(response.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, []);

    return (
    <Container>
        <Row>
            <Col>
                <Title 
                    title = {picture.title}
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
            </Col>
        </Row>
        <h2>Random Pics from the Past ...</h2>
        <Row>
            <Col sm="6">
                <Title 
                    title = {picture1.title}
                />
                <Image 
                    url = {picture1.url}
                />
                <Date 
                    date = {picture1.date}
                />
                <Explanation
                    explanation = {picture1.explanation}
                />
            </Col>
            <Col sm="6">
                <Title 
                    title = {picture2.title}
                />
                <Image 
                    url = {picture2.url}
                />
                <Date 
                    date = {picture2.date}
                />
                <Explanation
                    explanation = {picture2.explanation}
                />
            </Col>
        </Row>

    </Container>
    )
}

export default Pictures;