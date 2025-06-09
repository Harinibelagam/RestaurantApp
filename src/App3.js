import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
import AddOrders from './Pages/AddOrders';

//import PaymentPage from './Pages/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home/addorders" element={<AddOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


