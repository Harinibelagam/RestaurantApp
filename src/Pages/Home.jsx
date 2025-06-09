// src/pages/Home.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate, NavLink, useLocation } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Image,
  Carousel,
  Button
} from 'react-bootstrap';
import {
  HouseFill,
  ListCheck,
  FileTextFill,
  PlusCircle,
  BoxArrowRight,
  CreditCard
} from 'react-bootstrap-icons';
import Welcome from './Welcome';
import Orders from './Orders';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import AddOrders from './AddOrders';
import PaymentPage from '../Pages/PaymentPage';
import Feedback from '../Pages/Feedback';
import Reservation from '../Pages/Reservation';

import { OrderContext } from '../context/OrderContext';
import 'animate.css';

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
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-2 animate__animated animate__fadeInDown">
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src="/logo.png"
              roundedCircle
              alt="Logo"
              width="50"
              height="50"
              className="me-2"
            />
            <span className="fs-4">Delicious Restaurant</span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Welcome, <b>{username}</b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        {/* Main Content with Sidebar */}
        <div className="d-flex flex-grow-1">
          {/* Sidebar */}
          <Nav
            className="flex-column bg-light p-3 animate__animated animate__fadeInLeft"
            style={{ width: '220px', minHeight: '100%' }}
            variant="pills"
            activeKey={location.pathname}
          >
            {[
              { to: '/home', icon: <HouseFill className="me-2" />, text: 'Home' },
              { to: '/home/orders', icon: <ListCheck className="me-2" />, text: 'Orders' },
              { to: '/home/menu1', icon: <FileTextFill className="me-2" />, text: 'Menu 1' },
              { to: '/home/menu2', icon: <FileTextFill className="me-2" />, text: 'Todays Special' },
              { to: '/home/feedback', icon: <FileTextFill className="me-2" />, text: 'Feedback' },
              { to: '/home/reservation', icon: <FileTextFill className="me-2" />, text: 'Reservation' },
              { to: '/home/add-orders', icon: <PlusCircle className="me-2" />, text: 'Add Orders' },
              { to: '/home/payment', icon: <CreditCard className="me-2" />, text: 'Payment' },

            ].map(({ to, icon, text }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                className="text-dark rounded mb-2"
                style={{ padding: '8px 12px' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#e9ecef')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
              >
                {icon} {text}
              </Nav.Link>
            ))}

            <Nav.Link
              onClick={logoutHandler}
              className="text-dark rounded mt-3"
              style={{ padding: '8px 12px', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#e9ecef')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              <BoxArrowRight className="me-2" /> Logout
            </Nav.Link>
          </Nav>

          {/* Page Content */}
          <Container fluid className="p-4 animate__animated animate__fadeIn">
            {location.pathname === '/home' || location.pathname === '/home/' ? (
              <>
                {/* Carousel */}
                <Carousel fade className="mb-5 rounded shadow">
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded"
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                      alt="Delicious Meals"
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                      <h3 className="text-light">Welcome to Delicious Restaurant</h3>
                      <p className="text-light">Serving love with every bite!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded"
                      src="/Welcome.jpg"
                      alt="Tasty Dishes"
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                      <h3 className="text-light">Experience the Taste of Tradition</h3>
                      <p className="text-light">Crafted with passion and perfection.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <div className="text-center">
  <h2 className="mb-4">Explore Our Menu</h2>
  <Button
    variant="secondary"
    size="lg"
    className="fw-semibold"
    onClick={() => navigate('/home/menu1')}
  >
    Go to Menu
  </Button>
</div>

              </>
            ) : (
              <Routes>
                <Route path="orders" element={<Orders />} />
                <Route path="menu1" element={<Menu1 />} />
                <Route path="menu2" element={<Menu2 />} />
                <Route path="add-orders" element={<AddOrders />} />
                {/* <Route path="payment" element={<PaymentPage />} />  */}
                <Route path="feedback" element={<Feedback />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="payment" element={<PaymentPage />} /> 

              </Routes>
            )}
          </Container>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-light text-center py-4 animate__animated animate__fadeInUp">
          <Container>
            <div className="mb-1">📍 Address: Food Street, Vishakapatanam</div>
            <div className="mb-1">📞 Contact: 1234567890</div>
            <div className="mb-1">📧 Email: admin@deliciousrestaurant.com</div>
            <div>⏰ Business Hours: Monday to Sunday, 10am - 11pm</div>
          </Container>
        </footer>
      </div>
    </OrderContext.Provider>
  );
}
