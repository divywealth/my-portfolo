
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';
import About from './Pages/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SayHello from './Pages/SayHello';
import Sent from './Pages/Sent-Page/Sent';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
              <Route exact path="/" element={<HomePage/>}/>

              <Route path="/about" element={<About/>}/>

              <Route path="/services" element={<Services/>}/>

              <Route path="/contact" element={<Contact/>}/>

              <Route path="/sayHello" element={<SayHello/>}/>

              <Route path="/sent" element={<Sent/>}/>

              <Route path = "/*" element={<NotFound/>}/>
          </Routes>
        </div>
        

      </div>
    </Router>
  );
}

export default App;
