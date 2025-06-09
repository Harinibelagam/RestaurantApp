
// import React from 'react';
// import { Container, Button, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// export default function Logout() {
//   const navigate = useNavigate();

//   const loginAgain = () => {
//     navigate('/');
//   };

//   return (
//     <Container className="d-flex align-items-center justify-content-center min-vh-100">
//       <Row className="w-100">
//         <Col xs={12} sm={8} md={6} lg={4}>
//           <Card className="shadow-sm p-4 text-center">
//             <Card.Body>
//               <h2 className="mb-4 text-danger">You have successfully logged out.</h2>
//               <Button 
//                 onClick={loginAgain} 
//                 className="w-100 mt-3" 
//                 variant="primary"
//               >
//                 Login Again
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'animate.css'; // for fade-in animation

export default function Logout() {
  const navigate = useNavigate();

  const loginAgain = () => {
    navigate('/');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5}>
            <Card className="p-4 shadow-lg rounded-4 text-center bg-white animate__animated animate__fadeIn">
              <Card.Body>
                <h2 className="text-danger mb-4">You have successfully logged out.</h2>
                <p className="text-muted mb-3">
                  Thank you for visiting <strong>Delicious Restaurant</strong>!
                </p>
                <Button
                  onClick={loginAgain}
                  className="w-100 btn-lg"
                  variant="primary"
                >
                  🔐 Login Again
                </Button>
              </Card.Body>
              <div className="text-muted small mt-3">
                <em>See you soon! 😊</em>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
