import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Fetch from './Fetchdata';
import UserForm from './Components/Navbar/Form/Form';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return <div>
       <Navbar/>
     <Routes>
        <Route exact path="/" element={ <Fetch/> } />
        <Route exact path="form" element={ <UserForm/> } />
      </Routes>
  </div>;
}

export default App;
