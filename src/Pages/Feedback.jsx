import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && feedback.trim()) {
      setSubmitted(true);
      setName('');
      setFeedback('');
    }
  };

  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="text-center mb-4 text-primary">Customer Feedback</h3>
        {submitted && <Alert variant="success">Thank you for your feedback!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="feedbackName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="feedbackText">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your feedback"
              value={feedback}
              required
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Submit Feedback
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
