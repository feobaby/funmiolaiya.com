import React from 'react';
import './homepage.css';
import link from '../../assets/images/link.svg'

export default function Homepage() {
    return (
        <>
            <br />
            <div>
                <p align="center" className="name">Hi, I'm Funmilayo Olaiya. 
                 </p>
            </div>
            <div>
                <p className="about-more-info" align="center">I have a Bachelor's degree in Computer Science from Bowen University,<br />
                    and I'm currently a Software Engineer and Technical Writer based in Nigeria. <br />
                    I am really interested in how tech fits into the future of things, and I prefer <br />
                    to be in the long run by creating more efficient platforms to aid humanity.<br />
                    I am really passionate about advocacy and giving back to the society and<br/>
                    I also have so much interest in Machine Learning and OSS.<br />
                    I am currently looking for my next role particularly in Software Engineering!<br />
                    I run a technical blog, you can find my posts at <a href="https://ferns.dev"> Ferns</a>
                    <br />
                </p>
            </div>
<br />
<br /> 
<br />
<p className="articles-title"> Featured Articles.  
  </p>
<div className="row">

  <div className="column">
    <div className="card zoom">
    <p align="left">Hasura &nbsp; JavaScript</p>
      <p>Get Started with Hasura</p>
         <hr />
      <p>How to create a todo app using Hasura, GraphQl and React.</p>
      <p><a href="https://techshrimps.hashnode.dev/let-us-create-a-todo-app-with-react-hasura-and-graphql" target="_blank" rel="noopener noreferrer">
      <img
                    src={link}
                    className="photo-link"
                    alt="nestjs logo"
                />
                </a></p>
    </div>
  </div>
  
  <div className="column">
    <div className="card zoom">
     <p align="left">Beginners &nbsp; Back-End</p>
      <p>For beginners - Roadmap to being a great backend developer.</p>
         <hr />
      <p>About how beginners can get started in back-end development.</p>
      <p><a href="https://ferns.dev/for-beginners-roadmap-to-being-a-great-backend-developer" target="_blank" rel="noopener noreferrer">
      <img
                    src={link}
                    className="photo-link"
                    alt="nestjs logo"
                /></a></p>
    </div>
  </div>
  
  <div className="column">
    <div className="card zoom">
      <p align="left">AI &nbsp; Opinion</p>
      <p>Is A.I(M.L) a Threat to Software Engineering?.</p>
         <hr />
      <p>An opinion based article on where A.I stands with S.E.</p>
      <p><a href="https://medium.com/womeninai/is-a-i-m-l-a-threat-to-software-engineering-e96c88fa26a" target="_blank" rel="noopener noreferrer">
      <img
                    src={link}
                    className="photo-link"
                    alt="nestjs logo"
                /></a></p>
    </div>
  </div>
</div>
<br /> 
<br />

            <footer> 2021 <sup>&copy;</sup> Funmilayo Olaiya <br /><br /><br />
            <a className="links" href="https://github.com/codeliezel" target="_blank" rel="noopener noreferrer"><u>github</u></a>
             &nbsp;
             <a className="links" href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba" target="_blank" rel="noopener noreferrer"><u>linkedin</u></a>&nbsp;
               </footer>
            <br />
        </>
    );
}
