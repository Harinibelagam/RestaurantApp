
import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { OrderContext } from '../context/OrderContext';
//orderContext is the custom context created using create Context
export default function AddOrders() {
  const { orders, setOrders } = useContext(OrderContext);
  const [formData, setFormData] = useState({
    customer: '',
    item: '',
    quantity: '',
    instructions: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manual validation for required fields
    if (!formData.customer.trim() || !formData.item.trim() || !formData.quantity) {
      setError('Please fill in all required fields.');
      return;
    }

    const newOrder = {
      id: orders.length + 1,
      ...formData
    };

    setOrders([...orders, newOrder]);
    setFormData({ customer: '', item: '', quantity: '', instructions: '' });
  };

  return (
    <div>
      <h3 className="mb-4">Add New Order</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer Name<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Enter customer's name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Food Item<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Enter food item"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Special Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Optional"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Order
        </Button>
      </Form>
    </div>
  );
}
