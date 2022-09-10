import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Upper from './comps/Upper';
import Middle from './comps/Middle';

export const ImageDetailsContext = React.createContext() 

function App() {
  return (
    <Router>
    <Upper></Upper>
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
    <Middle></Middle>
    </Router>
  );
}

export default App;
