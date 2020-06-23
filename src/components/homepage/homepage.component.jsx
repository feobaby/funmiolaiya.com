import React, { Fragment } from 'react';
import pic6 from '../../assets/logos/pic6.png';
import pic29 from '../../assets/logos/pic29.png';
import git from '../../assets/logos/git.png';
import pic18 from '../../assets/logos/pic18.png';
import tracker from '../../assets/logos/tracker.png';
import js from '../../assets/logos/js.png';
import html from '../../assets/logos/html.png';
import react from '../../assets/logos/react.png';
import redux from '../../assets/logos/redux.png';
import nest from '../../assets/logos/nest.png';
import apiary from '../../assets/logos/apiary.png';
import swagger from '../../assets/logos/swagger.png';
import trello from '../../assets/logos/trello.png';
import figma from '../../assets/logos/figma.png';
import postgres from '../../assets/logos/postgres.png';
import mongo from '../../assets/logos/mongo.png';
import docker from '../../assets/logos/docker.png';
import webpack from '../../assets/logos/webpack.png';
import heroku from '../../assets/logos/heroku.png';
import netlify from '../../assets/logos/netlify.png';
import circle from '../../assets/logos/circle.png';
import travis from '../../assets/logos/travis.png';
import css from '../../assets/logos/css.png';
import seq from '../../assets/logos/seq.svg';
import mongoose from '../../assets/logos/mongoose.png';
import Header from '../header/header.component';

export default function Homepage() {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div>
                <p align="center" className="name">Hi, I'm Funmilayo olaiya.</p>
            </div>
            <div className="about" align="center">
                <h3 className="about-title">A little about me:</h3>
                <p> I am presently a <u>software engineer</u> and I have a Bachelor's degree in <br />
                    Computer science from Bowen University, Nigeria.<br />
                    I have worked with various aspects of it like; network analysis, <br />
                    software engineering, teaching/mentoring and I am currently gathering A.I/M.L skills.<br />
                    <br />
                    I am really interested in how tech fits into the future of things, and I prefer <br />
                    to be in the long run by creating more efficient platforms to aid humanity.<br />
                    I love collaboration in software development more than anything else.
        <br />
                    Also, I am really passionate about advocacy and giving back to the society. <br />
                    <br />
                </p>
            </div>
            <div align="center">
                <h3 className="about-tools">tech. I love to work with it:</h3>
                <img
                    src={pic6}
                    className="photo-node"
                    alt="nodeJs logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={pic29}
                    className="photo-ts"
                    alt="typescript logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={git}
                    className="photo-git"
                    alt="git logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={pic18}
                    className="photo-git"
                    alt="python logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={js}
                    className="photo-git"
                    alt="js logo"
                />
                <br />


                <img
                    src={html}
                    className="photo-git"
                    alt="js logo"
                />
                <img
                    src={react}
                    className="photo-react"
                    alt="react logo"
                />
                <img
                    src={redux}
                    className="photo-redux"
                    alt="react logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={apiary}
                    className="photo-apiary"
                    alt="apiary logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={swagger}
                    className="photo-swagger"
                    alt="swagger logo"
                />
                <br />
                <img
                    src={tracker}
                    className="photo-tracker"
                    alt="tracker logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={trello}
                    className="photo-trello"
                    alt="trello logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={figma}
                    className="photo-figma"
                    alt="figma logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={postgres}
                    className="photo-postgres"
                    alt="postgres logo"
                />
                &nbsp;
    <img
                    src={mongo}
                    className="photo-mongo"
                    alt="mongo logo"
                />
                <br />
                <img
                    src={css}
                    className="photo-css"
                    alt="css logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={docker}
                    className="photo-docker"
                    alt="docker logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={webpack}
                    className="photo-webpack"
                    alt="docker logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={heroku}
                    className="photo-heroku"
                    alt="heroku logo"
                />
                <br />
                <img
                    src={netlify}
                    className="photo-netlify"
                    alt="netlify logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={circle}
                    className="photo-circle"
                    alt="circle logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={travis}
                    className="photo-travis"
                    alt="travis logo"
                />
                &nbsp;
                &nbsp;
    <img
                    src={seq}
                    className="photo-seq"
                    alt="sequelize logo"
                />
                <br />
                <img
                    src={mongoose}
                    className="photo-seq"
                    alt="mongoose logo"
                />
            </div>
            <br />
            <br />
            <div align="center">
                <h3 className="about-things"> other things I do</h3>
                <p class="things"> I am currently a back-end mentor for devCareers and Google Africa Developer Scholarship.
                I am a mental health advocate for MANI.
    I am also a freelance software engineer, a member of WomenWhoCode and WomenInAI.</p>
            </div>
            <br />
            <br />
            <hr />
            <footer> Copyright Funmilayo Olaiya 2020 <sup>&copy;</sup></footer>
            <br />
        </>
    );
}
