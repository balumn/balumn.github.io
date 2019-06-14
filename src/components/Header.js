import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am Balu M N</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I'm a FullStack Developer and student.</h3>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I like to roam around various parts of frontend development as well as learn new technologies. I spend my leisure hours to learn and share knowledge or enjoy some yummy food.</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
      </header>
      </React.Fragment>
    );
  }
}