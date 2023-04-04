import './App.css';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails'
import UrlNotFound from './UrlNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/create' element = {<Create/>} />
          <Route path = '/blogs/:id' element = {<BlogDetails/>} />
          <Route path = '*' element = {<UrlNotFound/>} />
          {/* this * goes in the bottom coz we need to render all the urls with the element "UrlNotFound" for that we first need
          to check all the route paths, only if the specified route path doesn't match, for example '/xyzsdj' route path '*' 
          gets executed      */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
