import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
              
               <h1 className="responsive-headline">I am Balu M N</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I'm a Computer Science Engineer and a freelancer.</h3>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I like to experiment with fullstack development and also learn new technologies. I love to spend my leisure hours learning, sharing knowledge or enjoying some yummy food.</h3>

               <hr/>
               <div className="feel-work">
                <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><p>Feel free to contact me for works and suggestions</p></a>
               </div>
               <hr />
               <br/>

               <a className="button resum" target="_blank" rel="noopener noreferrer" href="mailto:balumn@ieee.org"><i className="fa fa-pencil"/>&nbsp;&nbsp;Contact Me</a>
            
               <ul className="social">
                  {/* <li key="email">
                    <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
                  </li> */}
                  <li key="github">
                    <a href="http://github.com/balumn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                  </li>
                  <li key="linkedin">
                    <a href="https://www.linkedin.com/in/balumn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                  </li>
                  <li key="stackOverflow">
                    <a href="https://stackoverflow.com/cv/balumn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
                  </li>
                  <li key="instagram">
                    <a href="https://www.instagram.com/balu.mn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li key="fb">
                    <a href="https://www.fb.me/balu.m.nandakumar/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li key="resume">
                    <a href="balumn.pdf" target="_blank" rel="noopener noreferrer" title="My Resume"><i className="fa fa-download"></i></a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
      </React.Fragment>
    );
  }
}