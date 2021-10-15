import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Header from './components/Header';
import Presentation from './components/Presentation';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/Frame 19.png';
import { Switch, BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
        <Header/>
        </Route> 
        <Route exact path='/Login'>
          <About/>
        </Route> 
      </Switch>
      </BrowserRouter>
      <Feature/>
      <About image= {aboutimage} title='BiCAR' button='get the app'/>
      <Presentation/>
      <About image= {aboutimage1} title='Deals' button='Go to Deals Section'/>
      <Contact/>
    </div>
  );
}

export default App;
