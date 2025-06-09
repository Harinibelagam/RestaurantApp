import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', date: '', time: '', guests: 1 });
  };

  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: '700px' }}>
        <h3 className="text-center mb-4 text-success">Table Reservation</h3>
        {submitted && <Alert variant="success">Reservation submitted successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="resName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="resPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile number"
                  name="phone"
                  value={formData.phone}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="resDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="resTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="resGuests">
                <Form.Label>No. of Guests</Form.Label>
                <Form.Control
                  type="number"
                  name="guests"
                  value={formData.guests}
                  min={1}
                  required
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="success" className="w-100">
            Book Reservation
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
