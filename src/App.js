import './App.css';
import React from 'react'
import Navbaar from './components/Navbaar';
import News from './components/News';
import PropTypes from 'prop-types';
import {
  BrowserRouter as HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/NoteState';
import Notes from './components/Notes';

const App=()=> {
 
let pageSize=12;
  let apiKey=process.env.REACT_APP_NEWS_API;
    return (
      <>
<div>
  <NoteState>
      <HashRouter>
     <Navbaar/>
     
     <Routes>
          <Route path="/"element={<News key="technology" apiKey={apiKey} pageSize={pageSize} category="entertainment"/>}/>
          <Route path="/business"element={<News key="business" apiKey={apiKey} pageSize={pageSize} category="business"/>}/>
          <Route path="/entertainment"element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} category="entertainment"/>}/>
          <Route path="/general"element={<News key="general" apiKey={apiKey} pageSize={pageSize} category="general"/>}/>
          <Route path="/health"element={<News key="health" apiKey={apiKey} pageSize={pageSize} category="health"/>}/>
          <Route path="/science"element={<News key="science" apiKey={apiKey} pageSize={pageSize} category="science"/>}/>
          <Route path="/sports"element={<News key="sports" apiKey={apiKey} pageSize={pageSize} category="sports"/>}/>
          <Route path="/technology"element={<News key="technology" apiKey={apiKey} pageSize={pageSize} category="technology"/>}/>
          <Route path="/notes"element={<Notes/>}/>
        </Routes>
     </HashRouter>
     </NoteState>
     </div>
     </>
    )
  
}
App.defaultProps ={
  country: 'in',
  pageSize: 10,
  category: 'business'
}
App.propTypes ={
  country:PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default App