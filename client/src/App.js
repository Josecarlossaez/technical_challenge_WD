import logo from './logo.svg';


import './App.css';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import {  Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App" style={{display:"flex", justifyContent:"space-around"}}>
  {/* <PhoneList/>
  <PhoneDetails/> */}
  <PhoneList />
 
  <Routes>
  
    
    
    <Route path="/phones/:id" element={<PhoneDetails />} />

  </Routes>

    </div>
  );
}

export default App;
