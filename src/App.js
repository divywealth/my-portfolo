import NavBar from './components/NavBar';
import Body from './components/Body';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';
import About from './Pages/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BottomBar from './components/BottomBer';
import SayHello from './Pages/SayHello';

function App() {
  return (
    <Router>
      <div>
        <div><NavBar/></div>
        <div>
          <Switch>
              <Route exact path="/">
                <Body/>
              </Route>

              <Route path="/about">
                <About/>
              </Route>

              <Route path="/services">
                <Services/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/sayHello">
                <SayHello/>
              </Route>
          </Switch>
          <div><BottomBar/></div>
        </div>
        

      </div>
    </Router>
  );
}

export default App;
