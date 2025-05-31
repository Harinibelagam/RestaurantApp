

import React, { useState } from 'react';
import { Routes, Route, useNavigate, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { HouseFill, ListCheck, FileTextFill, PlusCircle, BoxArrowRight } from 'react-bootstrap-icons';

import Welcome from './Welcome';
import Orders from './Orders';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import AddOrders from './AddOrders';
import { OrderContext } from '../context/OrderContext';

export default function Home() {
  const username = sessionStorage.getItem('username');
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState([]);

  const logoutHandler = () => {
    sessionStorage.clear();
    navigate('/logout');
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <div className="d-flex flex-column vh-100">
        <Navbar bg="dark" variant="dark" className="px-3">
          <Navbar.Brand>
            {/* <Image */}
              {/* src="https://via.placeholder.com/40" */}
              <Image src="/logo.png"
              roundedCircle
              alt="Logo"
              width="80"
              height="40"
              className="me-2"
            />
            Delicious Restaurant
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Welcome, <b>{username}</b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <div className="flex-grow-1 d-flex">
          <Nav
            className="flex-column bg-light p-3"
            style={{ width: '220px', minHeight: '100%' }}
            variant="pills"
            activeKey={location.pathname}
          >
            <Nav.Link as={NavLink} to="/home" end><HouseFill className="me-2" /> Home</Nav.Link>
            <Nav.Link as={NavLink} to="/home/orders"><ListCheck className="me-2" /> Orders</Nav.Link>
            <Nav.Link as={NavLink} to="/home/menu1"><FileTextFill className="me-2" /> Menu 1</Nav.Link>
            <Nav.Link as={NavLink} to="/home/menu2"><FileTextFill className="me-2" /> Menu 2</Nav.Link>
            <Nav.Link as={NavLink} to="/home/add-orders"><PlusCircle className="me-2" /> Add Orders</Nav.Link>
            <Nav.Link onClick={logoutHandler} style={{ cursor: 'pointer' }}><BoxArrowRight className="me-2" /> Logout</Nav.Link>
          </Nav>

          <Container fluid className="p-4">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="orders" element={<Orders />} />
              <Route path="menu1" element={<Menu1 />} />
              <Route path="menu2" element={<Menu2 />} />
              <Route path="add-orders" element={<AddOrders />} />
            </Routes>
          </Container>
        </div>

        <footer className="bg-dark text-light text-center py-3">
          <Container>
            <div>Address: 123 Food Street, Vishakapatanam</div>
            <div>Contact:1234567890</div>
            <div>Email: admin@deliciousrestaurant.com</div>
          </Container>
        </footer>
      </div>
    </OrderContext.Provider>
  );
}
