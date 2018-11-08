import React from 'react';
import plane from './plane.png';

const Navigation =({onRouteChange})=>{
  return(
    <header className="bg-white black-80 tc pv4 avenir">
  
  <h1 className="mt2 mb0 baskerville i fw1 f1 animated fadeInLeft">NAYANIKA</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked animated fadeInRight">FULL STACK WEB DEVELOPER</h2>
  <nav className="bt bb tc mw7 center mt4">
    <p onClick={()=>onRouteChange('home')} className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l pointer">About</p>
    <p onClick={()=>onRouteChange('projects')} className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l pointer">Projects</p>
   <p onClick={()=>onRouteChange('skills')}className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l pointer">Skills</p>
   </nav>
   </header>
  );
}




export default Navigation;
