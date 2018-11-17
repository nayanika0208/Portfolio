import React from 'react';
import mypic from './nayanika.jpg';
import Tilt from 'react-tilt'
import resume from './resume.pdf';
import { IoLogoGithub,IoLogoLinkedin,IoLogoTwitter,IoIosCall,IoIosMail } from "react-icons/io";

const About =()=>{
  return(
    <div>
    <article className="mw8 shadow-5 center bg-white br3 pa4 pa4-ns mv3 ba b--black-10">
        <div className="tc">
        <Tilt className="Tilt center" options={{ max : 85 }} style={{ height: 125, width: 125 }} >
        <div className="Tilt-inner center"><img alt='pic'src={mypic} className="br-100 h4 w4 dib" /> </div>
        </Tilt>

        <h1 className="f2">{'NAYANIKA'}</h1>
         <hr className="mw4 bb bw1 b--black-10" />
       </div>


      <p className="lh-copy  center f6 black-70 animated fadeInRight">
        {'My name is Nayanika and I am a Full Stack Web developer from India.I am doing B.Tech in Computer Science . I started my journey as a developer in the beginning of 2018. Ever since starting my development journey, I have fallen more in love with the process. I started my way by learning symatic HTML and CSS. I then began working my way through JavaScript. Since then, I have build up my skillset by learning React, SASS, and Bootstrap.Mainly I do front-end work but skilled in node for the backend part.'}</p>


      <div className="pa3">
      <p className="f4 center">Contact Details</p>
      <hr className="mw4 bb bw1 b--black-10" />
    <div className="center pv3">
      <span className="near-black hover-silver dib tc">
      <IoIosCall className="dib h2 w2"/>
      <span className="f6 db">7980260401</span>
     </span>
      <span className="near-black hover-silver dib tc ml5" >
      <IoIosMail className="dib h2 w2"/>
      <span className="f6 db">nayanika.0208@gmail.com</span>
      </span>
      </div>
      </div>

    <div className="pa3">
    <a className="link near-black hover-silver dib mh3 tc ph5" href="https://github.com/nayanika0208" title="GitHub">
    <IoLogoGithub className="dib h2 w2"/>
    <span className="f6 db">GitHub</span>
  </a>
  <a className="link hover-silver near-black dib mh3 tc ph5" href="https://www.linkedin.com/in/nayanika-singh-27a365140/" title="LinkedIn">
  <IoLogoLinkedin className="dib h2 w2"/>
    <span className="f6 db">LinkedIn</span>
  </a>
  <a className="link hover-silver near-black dib mh3 tc ph5" href="https://twitter.com/NanoNayanika" title="twitter">
  <IoLogoTwitter className="dib h2 w2"/>
    <span className="f6 db">Twitter</span>
  </a>



     </div>

     <div className="ph5 center grow dim pt5">
     <a className="f6 link br-pill ph3 pv2 mb2 dib black bg-white shadow-5 animated fadeInUp" href={resume}>Download Resume</a>
   </div>
</article>
    </div>
  );
}




export default About;
