
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Card } from 'react-bootstrap';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() && password.length >= 4) {
//       sessionStorage.setItem('username', username.trim());
//       navigate('/home');
//     } else {
//       alert('Please enter a valid username and password (min 4 characters).');
//     }
//   };

//   return (
//     <div
//       className="d-flex align-items-center justify-content-center"
//       style={{
//         height: '100vh', //viewport
//         backgroundImage: 'url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Card style={{ width: '400px', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
//         <h2 className="text-center mb-4 text-primary">Delicious Restaurant</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="username" className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter username"
//               autoComplete="off"
//             />
//           </Form.Group>
//           <Form.Group controlId="password" className="mb-4">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               required
//               minLength={4}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               autoComplete="off"
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="w-100">
//             Login
//           </Button>
//         </Form>
//       </Card>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.length >= 4) {
      sessionStorage.setItem('username', username.trim());
      navigate('/home');
    } else {
      alert('Please enter a valid username and password (min 4 characters).');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
      style={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg border-0 p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <h2 className="text-center mb-4 text-primary fw-bold">Delicious Restaurant</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label className="fw-semibold">Username</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    autoComplete="off"
                    className="shadow-sm"
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    minLength={4}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoComplete="off"
                    className="shadow-sm"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-semibold py-2">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
