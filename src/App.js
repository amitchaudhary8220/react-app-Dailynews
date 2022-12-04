
import './App.css';

import React ,{useState} from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App= ()=> {


  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress,setProgress]=useState(0);


    return (
      <div>
        <BrowserRouter>
        <LoadingBar
  color='#f11946'
  height={3}
  progress={progress}
  
/>
        <Navbar/>
          

          <Routes>

            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={6} country={'in'} category={'general'} />} />
            
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={6} country={'in'} category={'general'} />}/>
            
     
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={6} country={'in'} category={'technology'} />}/>
            
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={6} country={'in'} category={'general'} />}/>
            
  <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={6} country={'in'} category={'science'} />} />
            
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={6} country={'in'} category={'business'} />} />
            
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={6} country={'in'} category={'entertainment'} />} />
            
            <Route exact path="/sport" element={<News apiKey={apiKey} setProgress={setProgress} key='sport' pageSize={6} country={'in'} category={'sport'} />} />



            
          </Routes>
          
        </BrowserRouter>
      </div>
    )
  
}

export default App
