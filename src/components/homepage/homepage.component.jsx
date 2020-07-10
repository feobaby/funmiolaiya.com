import React from 'react';
import './homepage.css';
import rosee from '../../assets/images/rosee.svg'
import github from '../../assets/images/github.svg'
import link from '../../assets/images/link.svg'

export default function Homepage() {
    return (
        <>
            <br />
            <div>
                <p align="center" className="name popout">Hi, I'm Funmilayo olaiya. 
                 <img
                    src={rosee}
                    className="photo-rosee"
                    alt="nestjs logo"
                /></p>
            </div>
            <div>
                <p className="about-more-info" align="center">I have a Bachelor's degree in Computer Science from Bowen University,<br />
                    and I'm currently a software engineer based in Nigeria. <br />
                    I am really interested in how tech fits into the future of things, and I prefer <br />
                    to be in the long run by creating more efficient platforms to aid humanity.<br />
                    I am really passionate about advocacy and giving back to the society and<br/>
                    I also started having a burning interest in OSS.<br />
                    I am also a Network L/E for <a href="https://www.womenwhocode.com/lagos"> WomenWhoCode Lagos</a><br />
                    I run a technial blog, you can find my posts at <a href="https://techshrimps.hashnode.dev"> techschrimps</a>
                    <br />
                </p>
            </div>
<br />
<br /> 
<br />
<p className="articles-title"> Selected tech. articles I have written.  
  </p>
<div className="row">

  <div className="column">
    <div className="card zoom">
    <p align="left">NestJs &nbsp; JavaScript</p>
      <p>Get Started with NestJs</p>
         <hr />
      <p>This blog post is about the NestJs framework and how to create a simple todo notes with it.</p>
      <p><a href="https://techshrimps.hashnode.dev/get-started-with-nestjs-and-create-a-todo-notes-app-ck9pni8xv02sohjs1f66yuqm5" target="_blank" rel="noopener noreferrer">
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
      <p>Create a search component with react hooks.</p>
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

<h3 className="articles-title">Showcase Projects.</h3>
<div className="row1">

<div className="column1">
    <div className="card1">
     <p className="project-tags">Backend JavaScript</p>
    <p>PropertyPro-Lite</p>
    <p>A platform where people can create and/or search properties for sale or rent. </p>
    <p><a href="https://github.com/codeliezel/PropertyPro-Lite-Backend" target="_blank" rel="noopener noreferrer">
      <img
                    src={github}
                    className="photo-git"
                    alt="nestjs logo"
                /></a></p>
    </div>
  </div>
  
  <div className="column1">
    <div className="card1">
<p className="project-tags">Backend JavaScript</p>
    <p>iReporter</p>
    <p> A web application that enables any/every citizen to bring any form of corruption to the notice of appropriate authorities 
    and the general public, also users can report on things that needs government intervention. </p>
        <p><a href="https://github.com/codeliezel/ireporter-Backend" target="_blank" rel="noopener noreferrer">
      <img
                    src={github}
                    className="photo-git"
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
