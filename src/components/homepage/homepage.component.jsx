import React from 'react';
import './homepage.css';

export default function Homepage() {
  return (
    <>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <div>
              <p align="center" className="name">
                {' '}
                <span>&#128103;&#127999;</span>
                {' '}
                {' '}
                Hello, I&rsquo;m Funmilayo.
              </p>
            </div>

            <div>
              <p className="about-more-info" align="center">
                I&rsquo;m currently a Software Engineer and Technical Writer based in Nigeria.
                {' '}
                <br />
                I&rsquo;m really interested in how tech fits into the future of things, and I prefer
                {' '}
                <br />
                to be in the long run by creating more efficient platforms to aid humanity.
                <br />
                <br />
                I also have so much interest in Machine Learning!
                <br />
                {' '}
                <br />

                I run a technical blog, you can find my posts at
                {' '}
                <a href="https://ferns.dev" className="links"> Ferns</a>
                <br />
                Find me on
                {' '}
                <a className="links" href="https://github.com/codeliezel" target="_blank" rel="noopener noreferrer"><u>github</u></a>
                {' '}
                and
                {' '}
                <a className="links" href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba" target="_blank" rel="noopener noreferrer"><u>linkedin</u></a>
&nbsp;
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card1">
            <p className="writing-name">
              {/* eslint-disable-next-line */}
              <span>&#9997;&#127999;</span>
              {' '}
              Some Writing ...
            </p>
            <div>
              <p>
                1.
                {' '}
                <a href="https://ferns.dev/creating-a-simple-search-field-with-react-hooks-as-a-function-component" target="_blank" rel="noopener noreferrer">Creating a simple search field with react hooks: as a function component.</a>
              </p>
              <p>
                2.
                {' '}
                <a href="https://ferns.dev/let-us-create-a-todo-app-with-react-hasura-and-graphql" target="_blank" rel="noopener noreferrer">Let us create a todo app with React, Hasura and GraphQL!</a>
              </p>
              <p>
                3.
                {' '}
                <a href="https://ferns.dev/get-started-with-nestjs-and-create-a-todo-notes-app" target="_blank" rel="noopener noreferrer">Get started with NestJS and create a todo notes app.</a>
              </p>
              <p>
                4.
                {' '}
                <a href="https://ingressive.org/for-beginners-roadmap-to-being-a-great-backend-developer/" target="_blank" rel="noopener noreferrer">For beginners - Roadmap to being a great backend developer.</a>
              </p>
              <p>
                5.
                {' '}
                <a href="https://medium.com/womeninai/is-a-i-m-l-a-threat-to-software-engineering-e96c88fa26a" target="_blank" rel="noopener noreferrer">Is A.I(M.L) a Threat to Software Engineering?</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="footer-crips" align="center">
        <p>
          <span>&#128073;&#127999;</span>
          {' '}
          I love using Js, Py & Go.
        </p>
        <p>
          {' '}
          You can contact me on Linkedin or through my email:
          {' '}
          <u>olufunmilayo335@gmail.com</u>
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        {' '}
        2021
        {' '}
        <sup>&copy;</sup>
        {' '}
        Funmilayo Olaiya
        {' '}
        <br />
        Version 2.0
        <br />
      </footer>
      <br />
    </>
  );
}
