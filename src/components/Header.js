import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am Balu M N</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I'm a FullStack Developer and a freelancer.</h3>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I like to experiment with frontend development and also learn new technologies. I love to spend my leisure hours learning, sharing knowledge or enjoying some yummy food.</h3>
            
               <hr/>
               <div className="feel-work">
                <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><p>Feel free to contact me for work and suggestions</p></a>
               </div>
               <hr />
               <br/>
               <a className="button resum" target="_blank" rel="noopener noreferrer" href="resume.pdf"><i className="fa fa-download"/>&nbsp;&nbsp;My Resume</a>
            
               <ul className="social">
                  <li key="email">
                    <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
                  </li>
                  <li key="github">
                    <a href="http://github.com/balumn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                  </li>
                  <li key="linkedin">
                    <a href="https://www.linkedin.com/in/balumn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                  </li>
                  <li key="stackOverflow">
                    <a href="https://stackoverflow.com/cv/balumn" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
                  </li>
                  <li key="instagram">
                    <a href="https://www.instagram.com/the_hungry_chef_" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li key="fb">
                    <a href="https://www.fb.me/balu.m.nandakumar" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
      </React.Fragment>
    );
  }
}