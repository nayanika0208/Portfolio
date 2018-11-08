import React, { Component } from 'react';
import ProjectCard from './components/Projects/ProjectCard.js';
import Projects from './components/Projects/Projects';
import ProjectList from './components/Projects/ProjectList';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Skills from './components/Skills/Skills';
import './App.css';
import Particles from 'react-particles-js';

import About from './components/About/About';


const particleOptions={
  particles: {
    number: {
      value: 30,
      density:{
        enable: true,
        value_area: 400
      }
    },
    color: {
     value: '#1e4f59'
   },
   line_linked:{
     enable_auto: true,
     color: '#2f0d0d'
   }
 }
}


class App extends Component {

  constructor(){
    super();
    this.state={
      route: 'home'
    }
  }

  onRouteChange = (route)=>{
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">

      <Particles className='particles'
      params={particleOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
                {this.state.route === 'home'
                ?<About />
                :(
                  this.state.route === 'projects'
                ? <ProjectList Projects={Projects} onRouteChange={this.onRouteChange}/>
                : <Skills/>
                 )
                }
      </div>
    );
  }
}

export default App;
