import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

class App extends React.Component {
  render() {
    return (
    <Router>
        <div >
          <h2>Welcome to React Router Tutorial</h2>
          <nav >
          <ul >
            <li><Link to={'/'} > Homes </Link></li>
            <li><Link to={'/contact'} >Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App