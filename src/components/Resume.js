import React, { Component } from 'react';
export default class Resume extends Component {
   render() {
      return (
         <section id="resume">

            <div className="row work">
               <div className="three columns header-col">
                  <h1><span>Experience</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <h3>Software Engineer</h3>
                        <span><b>Codcor Technology Solutions</b> &nbsp; &bull; &nbsp;</span> <em className="date">Sept 2019 - Present</em>
                        <ul>
                           <li>Development of the new API endpoints, full-stack programming tasks, as a part of high-volume telephony projects.</li>
                           <li>Designing developing and deploying microservices for multiple projects.</li>
                        </ul>
                     </div>
                  </div>

               </div>
            </div>
            <div className="row education">

               <div className="three columns header-col">
                  <h1><span>Education</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <h3>Viswayothi College of Engineering and Technology</h3>
                        <span>Computer Science and Engineering &nbsp;&bull;&nbsp;</span> <em className="date">June-2019</em>
                        <p>
                           <b>Chairman</b> : IEEE Student Branch VJCET (Feb2018 - Feb2019) <br />
                           <b>Volunteer Secretary</b> : College NSS unit 587 (August2017 - August2018)
                          </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row skill">
               <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="bars">
                     <ul className="skills">
                        <li><span className={"bar-expand html5"}></span><em>HTML5</em></li>
                        <li><span className={"bar-expand css"}></span><em>CSS</em></li>
                        <li><span className={"bar-expand react"}></span><em>ReactJS</em></li>
                        <li><span className={"bar-expand python"}></span><em>Python</em></li>
                        <li><span className={"bar-expand django"}></span><em>Python Django</em></li>
                     </ul>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}