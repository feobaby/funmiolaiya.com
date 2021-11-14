import React from 'react';
import './homepage.css';
import pp from '../../assets/images/feobaby.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function HomePage() {
  return (
    <>
      <section>
        <div className="topnav" id="myTopnav">
          <ul className="flex nav-bar-container">
            <li className="feo">FEO.</li>
            <li className="push-right">
              {' '}
              <a href="#my-works">My Works</a>
            </li>
            <li>
            {' '}
              <a href="#tech-blog">Tech Blog</a>
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
                Hello, I&apos;m Funmilayo Olaiya.<span role="img" aria-label="wave">&#128075;&#127999;</span>
              </p>
              <p className="bio-text">
                Currently, I am a Senior Software Engineer building{' '}
                <a
                  href="https://nomadbank.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Nomad Bank</u>
                </a>
                .<br /> In the year 2020, I dedicated some time to mentor
                budding developers of{' '}
                <a
                  href="https://devcareer.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>DevCareer</u>
                </a>{' '}
                Cohort 2, in the aspect of backend development.
                <br />I try to share things that I have figured out on my tech
                blog called&nbsp;
                <a href="https://ferns.dev/" target="_blank" rel="noopener noreferrer">
                  <u>Ferns</u>
                </a>
                . <br />
                And, I also graduated from Bowen University, Nigeria with a
                degree in Computer Science, in the year 2016.
              </p>
            </div>
            <div className="card-item-bio resMarRight">
              {' '}
              <img src={pp} className="profile-img" alt="profile-img" />
            </div>
          </div>
        </div>
      </section>
      <section id="my-works">
        <div className="work-container">
          <p className="subheader-1">On Work</p>
          <div className="card-2">
            <div className="card-item">
              <p className="card-text-1">On Engineering</p>
              <p className="card-text-2">
                I loveee full-stack web development. I do both backend and
                frontend and everything in between.
                <br /> I really &#10084;&#65039; technical writing - it allows
                me to share what I know in the best way possible.
                <br /> I also do/know some machine learning.
              </p>
            </div>
            <div className="card-item">
              {' '}
              <p className="card-text-1">On Tools</p>
              <p className="card-text-2">
                When it comes to P.Ls, I love using Js, Ts, Go & Python(M.L).
                Most especially, other tools that improve my work rate are;
                Notion, Notes, Obsidian, VsCode, GitHub, Stack Overflow and
                Chrome Developer Tools!
              </p>
            </div>
          </div>
          <div className="card-2">
            <div className="card-item ">
              <p className="card-text-1">On OPPORTUNITIES/WOULD LOVE TO DO</p>
              <p className="card-text-2">
                I have big dreams, and I keep on bettering myself relentlessly!
                I don&apos;t settle for less and I don&apos;t shy away from
                complex challenges & opportunities that disrupts the world. I
                make sure I have an open mind to innovation, change and will{' '}
                <i>every single day</i>.
              </p>
            </div>
            <div className="card-item ">
              {' '}
              <p className="card-text-1">On learning</p>
              <p className="card-text-2">
                As a strong and avid learner, presently...
                <ul>
                  <li>
                    - I am on the journey to getting a good hang of{' '}
                    <i>Kubernetes.</i>
                  </li>
                  <li>
                    {' '}
                    - digging more into <i>devops</i> and{' '}
                    <i>cloud technologies.</i>
                  </li>
                  <li>
                    {' '}
                    - honing my skills & understanding of <i>Ds & Algos.</i>
                  </li>
                  <li> - currently learning how to drive. haha.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="tech-blog">
        <div className="tech-blog-container">
          <p className="subheader-2">From my Tech Blog</p>
          <div className="list">
            <p className="date">11/09/2020</p>
            <a
              href="https://ferns.dev/blog/hasura-todo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Let us create a todo app with React, Hasura and GraphQL!</p>
            </a>
          </div>
          <br />
          <div className="list">
            <p className="date">02/05/2020</p>
            <a
              href="https://ferns.dev/blog/get-started-with-nestjs-part-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Get started with NestJS and create a todo &apos;notes&apos; app
                (Part 1)
              </p>
            </a>
          </div>
          <br />
          <div className="list">
            <p className="date">27/05/2020</p>
            <a
              href="https://ferns.dev/blog/creating-a-simple-search-field-with-react-hooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Creating a simple search field with React hooks.</p>
            </a>
          </div>
          <br />
          <br />
          <div className="button-container">
            <form action="https://ferns.dev/" target="_blank">
              <input type="submit" value="Read More" className="button" />
            </form>
          </div>
        </div>
        <br /> <br /> <br /> <br />
      </section>
      <section>
        <div className="footer">
          <ul className="footer-container">
            <a
              href="https://github.com/codeliezel"
              target="_blank"
              className="greyColor"
              rel="noopener noreferrer"
            >
              <li>
                <AiFillGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/"
              target="_blank"
              className="greyColor"
              rel="noopener noreferrer"
            >
              <li>
                <AiFillLinkedin />
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
          <p style={{ textAlign: 'center', fontSize: '0.7rem' }}>Version 4.</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
