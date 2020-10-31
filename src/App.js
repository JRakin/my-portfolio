import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Navbar></Navbar>
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Navbar></Navbar>
          <Blogs></Blogs>
        </Route>
        <Route path="/about">
          <div className="about-container">
            <Navbar></Navbar>
            <About></About>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
