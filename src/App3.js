import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
//import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/payment" element={<PaymentPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


