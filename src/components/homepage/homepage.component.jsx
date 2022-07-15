import React from 'react';
import './homepage.css';
import pp from '../../assets/images/feobaby.png';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';

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
                <a href="#my-works">My Works</a>
              </li>
              <li>
                {' '}
                <a
                  href="https://blog.funmiolaiya.com/"
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
                  Currently, I am a Software Engineer and Technical Writer.
                  <br /> In the year 2020, I dedicated some time to mentor
                  budding developers of{' '}
                  <a
                    href="https://devcareer.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>DevCareer</u>
                  </a>{' '}
                  Cohort 2, in the aspect of backend development and I try to
                  share things that I have figured out on my&nbsp;
                  <a
                    href="https://ferns.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>Tech Blog</u>
                  </a>
                  <br />I did my CS Undergrad at Bowen University and I will
                  soon begin my Masters degree at the
                  <a
                    href="https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u> University of Waterloo.</u>
                  </a>
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
                  I majorly do full-stack web development and technical writing.
                  Technical Writing allows me to share what I know in the best
                  way possible.<br /> Apart from my blog, I write technical articles through&nbsp;
                  <u>
                    <a
                      href="https://draft.dev/"
                      target="_blank"
                      className="greyColor"
                      rel="noopener noreferrer"
                    >
                      Draft.dev
                    </a>
                  </u>{' '}
                  <br /> and I also do/know some machine learning.
                </p>
              </div>
              <div className="card-item">
                {' '}
                <p className="card-text-1">On Tools</p>
                <p className="card-text-2">
                  In S.E, I mostly use JavaScript, TypeScript, Go, some Python and React.
                  Other tools that improve my work rate are;
                  Notion, Notes, Dilligner.io, VsCode, Jira, GitHub, and
                  Chrome Developer Tools!
                </p>
              </div>
            </div>
            <div className="card-2">
              <div className="card-item ">
                <p className="card-text-1">On OPPORTUNITIES/WOULD LOVE TO DO</p>
                <p className="card-text-2">
                  I better myself everyday! 
                  So reach out to me for any opportunity you feel is in my line of doing. Thanks!
                </p>
              </div>
              <div className="card-item ">
                {' '}
                <p className="card-text-1">On learning</p>
                <p className="card-text-2">
                  As a strong and avid learner, presently...
                  <ul>
                    <li> - I am HONING my F.E skills.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="tech-blog">
          <div className="tech-blog-container">
            <p className="subheader-2">Some of my Writings</p>
            <div className="list">
              <p className="date">31/05/2022</p>
              <a
                href="https://blog.funmiolaiya.com/understanding-pointers-in-go"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Understanding Pointers in Go.</p>
              </a>
            </div>
            <br />
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
                  Get started with NestJS and create a todo &apos;notes&apos;
                  app (Part 1)
                </p>
              </a>
            </div>
            <br />
            <br />
            <div className="button-container">
              <form action="https://ferns.dev/" target="_blank">
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
              <a
                href="https://medium.com/@funmiolaiya9"
                target="_blank"
                className="greyColor"
                rel="noopener noreferrer"
              >
                <li>
                  <AiFillMediumSquare className="icons" />
                </li>
              </a>
              <a
                href="https://ferns.hashnode.dev/"
                target="_blank"
                className="greyColor"
                rel="noopener noreferrer"
              >
                <li>
                  <SiHashnode className="icons" />
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
