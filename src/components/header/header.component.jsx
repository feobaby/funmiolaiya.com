import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import './header.css';
import github from '../../assets/logos/github.png';
import linkedin from '../../assets/logos/linkedin.png';
import codesandbox from '../../assets/logos/codesandbox.png';
import medium from '../../assets/logos/medium.png';

export default function Header() {
  return (
    <Menu mode="horizontal" className="menu">
      <Menu.Item key="blog">
        <a href="https://techshrimps.hashnode.dev/" target="_blank" rel="noopener noreferrer"><h2 class="blog">Tech Shrimps</h2></a>
      </Menu.Item>

      <Menu.Item key="github">
        <a href="https://github.com/codeliezel" target="_blank" rel="noopener noreferrer">
          <img
            src={github}
            className="photo-github"
            alt="github logo"
          />
        </a>
      </Menu.Item>

      <Menu.Item key="linkedin">
        <a href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            className="photo-github"
            alt="linkedin logo"
          />
        </a>
      </Menu.Item>

      <Menu.Item key="codesandbox">
        <a href="https://codesandbox.io/u/funmi5" target="_blank" rel="noopener noreferrer">
          <img
            src={codesandbox}
            className="photo-github"
            alt="codesandbox logo"
          />
        </a>
      </Menu.Item>

      <Menu.Item key="medium">
        <a href="https://medium.com/@funmiolaiya9" target="_blank" rel="noopener noreferrer">
          <img
            src={medium}
            className="photo-medium"
            alt="medium logo"
          />
        </a>
      </Menu.Item>

        <Menu.Item key="contact">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD1pugVOK31ZfERBFIJUnM5gp5XlBunDYb4E-xWBvOX5hVMQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
        <h2 class="blog">contact</h2></a>
      </Menu.Item>
      
    </Menu>
  );
}
