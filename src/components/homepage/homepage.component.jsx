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
                    I have so much interest in Machine Learning and OSS.<br />
                    I work on the documentation at <a href="https://hasura.io">Hasura</a><br />
                    I am also a Network L/E for <a href="https://www.womenwhocode.com/lagos"> WomenWhoCode Lagos</a><br />
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
      <p>This blog post is about how to create a todo app using Hasura, GraphQl and React.</p>
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
     <p align="left">React &nbsp; JavaScript</p>
      <p>Create a Search Component with React Hooks.</p>
         <hr />
      <p>About how to search for generated contents using React.</p>
      <p><a href="https://techshrimps.hashnode.dev/creating-a-simple-search-field-with-react-hooks-as-a-function-component-ckapt39xw03p84us1marzyqh8" target="_blank" rel="noopener noreferrer">
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

            <footer> 2020 <sup>&copy;</sup> Funmilayo Olaiya <br /><br /><br />
             we can connect - <a className="links" href="https://github.com/codeliezel" target="_blank" rel="noopener noreferrer"><u>github</u></a>
             &nbsp;
             <a className="links" href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba" target="_blank" rel="noopener noreferrer"><u>linkedin</u></a>&nbsp;
              <a className="links" href="https://codesandbox.io/u/funmi5" target="_blank" rel="noopener noreferrer"><u>codesandbox</u></a>&nbsp;
               <a className="links" href="https://medium.com/@funmiolaiya9" target="_blank" rel="noopener noreferrer"><u>medium</u></a>&nbsp;
                <a className="links" href="https://docs.google.com/forms/d/e/1FAIpQLSfD1pugVOK31ZfERBFIJUnM5gp5XlBunDYb4E-xWBvOX5hVMQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><u>contact</u></a>
            </footer>
            <br />
        </>
    );
}
