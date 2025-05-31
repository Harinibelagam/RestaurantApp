import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const loginAgain = () => {
    navigate('/');
  };

  return (
    <Container className="mt-5 text-center">
      <h2>You have successfully logged out.</h2>
      <Button onClick={loginAgain} className="mt-3">
        Login Again
      </Button>
    </Container>
  );
}
