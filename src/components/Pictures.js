import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import './Pictures.css';
import axios from "axios";

const H2 = styled.h2 `
    margin: 30px auto;
`;

const CardTitleNew = styled.h4 `
    font-weight: bold;
`

const Pictures = () => {

    const [picture, setPicture] = useState([]);
    const [picture1, setPicture1] = useState([]);
    const [picture2, setPicture2] = useState([]);
    const [picture3, setPicture3] = useState([]);
    
    const getNewImage = () => {
        let year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

        let genD = day[Math.floor(Math.random() * 27)];
        let genM = month[Math.floor(Math.random() * 11)];
        let genY = year[Math.floor(Math.random() * 9)];
        
        let newDate = genY + "-" + genM + "-" + genD;
        let newUrl = `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=f5UkdBJMB4aQF0BXK9OzYicb3nA56qe9LKnulCxG`;

        // let d = new window.Date();
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
        .catch(err1 => {
            console.log(err1);
        });
        axios
        .get(getNewImage())
        .then(response => {
            setPicture2(response.data);
        })
        .catch(err2 => {
            console.log(err2);
        });
        axios
        .get(getNewImage())
        .then(response => {
            setPicture3(response.data);
        })
        .catch(err3 => {
            console.log(err3);
        })

    }, []);

    return (
    <Container>
        <Row>
            <Col>
                <Card>
                    <CardImg top width="100%" src={picture.url} alt="Card image cap" />
                    <CardBody>
                        <CardTitleNew>{picture.title}</CardTitleNew>
                        <CardText>{picture.explanation}</CardText>
                        <CardText>
                            <small className="text-muted">{picture.date}</small>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <H2>Random Pics from the Past ...</H2>
        <Row>
            <Col sm="4">
                <Card>
                    <CardImg top width="100%" src={picture1.url} alt="Card image cap" />
                    <CardBody>
                        <CardTitleNew>{picture1.title}</CardTitleNew>
                        <CardText>{picture1.explanation}</CardText>
                        <CardText>
                            <small className="text-muted">{picture1.date}</small>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <CardImg top width="100%" src={picture2.url} alt="Card image cap" />
                    <CardBody>
                        <CardTitleNew>{picture2.title}</CardTitleNew>
                        <CardText>{picture2.explanation}</CardText>
                        <CardText>
                            <small className="text-muted">{picture2.date}</small>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <CardImg top width="100%" src={picture3.url} alt="Card image cap" />
                    <CardBody>
                        <CardTitleNew>{picture3.title}</CardTitleNew>
                        <CardText>{picture3.explanation}</CardText>
                        <CardText>
                            <small className="text-muted">{picture3.date}</small>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default Pictures;