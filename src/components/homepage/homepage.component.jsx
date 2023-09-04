import React from 'react';
import './homepage.css';
import pp from '../../assets/images/feobaby.png';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function HomePage() {
  return (
    <>
      <div className="general-container">
        <section>
          <div className="topnav" id="myTopnav">
            <ul className="flex nav-bar-container">
              <li className="feo">FEO.</li>
              <li className="push-right">
                {' '}
                <a
                  href="https://ferns.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tech Blog
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bio-container">
            <div className="card-1">
              <div className="card-item-bio resMarLeft">
                <p className="full-name">
                  Hello, I&apos;m Funmilayo Olaiya.
                  <span role="img" aria-label="wave">
                    &#128075;&#127999;
                  </span>
                </p>
                <p className="bio-text">
                 I will be wrapping up my Masters in CS around August (2023) at the&nbsp;
                    <u className='grad-school'>University of Waterloo,</u> Yaay!
                    {/* <p className='next-opp'>RN: I'm currently looking for the next opportunity to offer my excellence.</p>
                     <img src={cbanks} className="cbanks-dance" alt="cbanks-dance" /> */}
                </p>
              </div>
              <div className="card-item-bio resMarRight">
                {' '}
                <img src={pp} className="profile-img" alt="profile-img" />
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <section id="my-works">
          <div className="work-container">
            <p className="subheader-1">On Work</p>
            <div className="card-2">
              <div className="card-item">
                <p className="card-text-1">On Engineering</p>
                <p className="card-text-2">
                  I have a broad background in technical writing and full-stack
                  development, and through technical writing, I can communicate
                  effectively what I know or have discovered.
                  <br />I also have some knowledge in machine learning courtesy
                  of my nanodegree in machine learning from{' '}
                  <a
                    href="https://graduation.udacity.com/confirm/DVJFD44G"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>Udacity.</u>
                  </a>
                </p>
              </div>
              <div className="card-item">
                {' '}
                <p className="card-text-1">On Tools</p>
                <p className="card-text-2">
                  For Software Engineering, I mostly use Node.js, JavaScript,
                  TypeScript, Go, React/Redux amidst many others.
                </p>
              </div>
            </div>
          </div>
          <br />
          </section>
          <br />  <br />  <br />
          <section>
              <p className="subheader-2">Cool Thingzzz</p>
              <ul className='cool-thing'>
                <li className='listt'>
                Currently, I felt like recreating my own version of this: <a href="https://canalstreet.market/" target="_blank" rel="noopener noreferrer"><u>Canal Street</u></a>, always check this link for the process: <a href="https://canal-street.netlify.app/" target="_blank" rel="noopener noreferrer"><u className='canal-street'>Canal Street</u>.</a>
                </li>
                <li className='listt'>
                In the year 2020, I dedicated some time to mentor budding
                  developers of <a href="https://devcareer.io/" target="_blank" rel="noopener noreferrer"> <u className='devcareer'>DevCareer</u></a>&nbsp;Cohort 2, in the aspect of back-end development. They ARE really working in cool places now! :)
                </li>
                </ul>
        </section>
        <br />  <br />  <br />
        <section id="tech-blog">
          <div className="tech-blog-container">
            <p className="subheader-2">Some of my Writings</p>
            <div className="list">
              <p className="date">31/05/2022</p>
              <a
                href="https://blog.ag-grid.com/using-react-hook-form-with-ag-grid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Using React Hook Form with AG Grid.</p>
              </a>
            </div>
            <br />
            <div className="list">
              <p className="date">15/09/2022</p>
              <a
                href="https://ferns.hashnode.dev/let-us-create-a-todo-app-with-react-hasura-and-graphql"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Let us create a todo app with React, Hasura and GraphQL!</p>
              </a>
            </div>
            <br />
            <br />
            <br />
            <div className="button-container">
              <form action="https://ferns.hashnode.dev" target="_blank">
                <input type="submit" value="Know More" className="button" />
              </form>
            </div>
          </div>
          <br /> <br /> <br /> <br />
        </section>
        <section>
          <div className="footer">
            <ul className="footer-container">
              <a
                href="https://github.com/feobaby"
                target="_blank"
                className="greyColor"
                rel="noopener noreferrer"
              >
                <li>
                  <AiFillGithub className="icons" />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/"
                target="_blank"
                className="greyColor"
                rel="noopener noreferrer"
              >
                <li>
                  <AiFillLinkedin className="icons" />
                </li>
              </a>
              <li className="push-right designer">
                {' '}
                Designed by{' '}
                <a
                  href="https://dribbble.com/twanitoria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Tolu Abu</u>
                </a>
              </li>
            </ul>
            <p style={{ textAlign: 'center', fontSize: '0.7rem' }}>
              Version 4.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
