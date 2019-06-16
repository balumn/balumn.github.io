import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">

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
                          <b>Volunteer Secretary</b> : College NSS unit 587 (August2017-August2018)
                          </p>
                       </div>
                    </div>
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Works</span></h1>
            </div>
            <div className="nine columns main-col">
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>Website of Viswajyothi College of Engineering</h3>
                          <span><b>Freelancing</b> &nbsp; &bull; &nbsp;</span> <em className="date">June 2019</em>
                          <ul>
                            <li>Developed using ReactJS</li>
                            <li>Front-End Development</li>
                            <li>Hosted at: <a href="https://vjcet.org" target="_blank" rel="noopener noreferrer">https://vjcet.org</a></li>
                            <li>Repo link: <a href="https://github.com/balumn/vjcet-web" target="_blank" rel="noopener noreferrer">https://github.com/balumn/vjcet-web</a></li>
                          </ul>
                       </div>
                    </div>

                    <div className="row item">
                       <div className="twelve columns">
                          <h3 style={{marginTop: 30}}>Parallel Downloading System in a LAN</h3>
                          <span><b>Academic Project</b> &nbsp; &bull; &nbsp;</span> <em className="date">March 2019</em>
                          <ul>
                            <li>Lets you download your files by making use of multiple computers at the same time inside a local area network.</li>
                            <li>Developed using Python</li>
                            <li>Front-End using Tkinter</li>
                            <li>Repo link: <a href="https://github.com/balumn/parellel-download" target="_blank" rel="noopener noreferrer">https://github.com/balumn/parellel-download</a></li>
                          </ul>
                       </div>
                    </div>

                    <div className="row item">
                       <div className="twelve columns">
                          <h3 style={{marginTop: 30}}>Multi Cloud Storage Management Application</h3>
                          <span><b>Side Project</b> &nbsp; &bull; &nbsp;</span> <em className="date">Oct 2018</em>
                          <ul>
                            <li>An application that can access Google Drive files and DropBox files at the same time</li>
                            <li>Developed using Python Django</li>
                            <li>Repo link: <a href="https://github.com/balumn/driveAPI" target="_blank" rel="noopener noreferrer">https://github.com/balumn/driveAPI</a></li>
                          </ul>
                       </div>
                    </div>

                    <div className="row item">
                       <div className="twelve columns">
                          <h3 style={{marginTop: 30}}>Farmers Fresh Zone Private Limited</h3>
                          <span><b>Intern</b> &nbsp; &bull; &nbsp;</span> <em className="date">May 2018 - July 2018</em>
                          <ul>
                            <li>Developed a mobile app which can capture media offline and upload it when the device is online</li>
                            <li>Used Ionic framework over Apache Cordova</li>
                            <li>Designed UI using Adobe Photoshop CC</li>
                          </ul>
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