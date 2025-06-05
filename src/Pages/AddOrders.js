import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export default function AddOrders() {
  const { orders, setOrders } = useContext(OrderContext);
  const [formData, setFormData] = useState({
    customer: '',
    item: '',
    quantity: '',
    instructions: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.customer.trim() || !formData.item.trim() || !formData.quantity) {
      setError('Please fill in all required fields.');
      return;
    }

    const newOrder = {
      id: orders.length + 1,
      ...formData,
      price: 100 * Number(formData.quantity), // Example price ₹100 per item
    };

    setOrders([...orders, newOrder]);

    // Redirect to payment page with order details as state
    navigate('/home/payment', { state: newOrder });
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
          Submit Order & Pay
        </Button>
      </Form>
    </div>
  );
}


// import React, { useState, useContext } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { OrderContext } from '../context/OrderContext';
// import { useNavigate, useLocation } from 'react-router-dom';

// export default function AddOrders() {
//   const { orders, setOrders } = useContext(OrderContext);
//   const [formData, setFormData] = useState({
//     customer: '',
//     item: '',
//     quantity: '',
//     instructions: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Read payment success flag from navigation state
//   const paymentSuccessFromState = location.state?.paymentSuccess || false;
//   const [paymentSuccess, setPaymentSuccess] = useState(paymentSuccessFromState);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.customer.trim() || !formData.item.trim() || !formData.quantity) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     const newOrder = {
//       id: orders.length + 1,
//       ...formData,
//       price: 100 * Number(formData.quantity), // ₹100 per item
//     };

//     setOrders([...orders, newOrder]);

//     // Clear any previous success messages when submitting a new order
//     setPaymentSuccess(false);

//     // Navigate to payment page with newOrder details
//     navigate('/home/payment', { state: newOrder });
//   };

//   return (
//     <div>
//       <h3 className="mb-4">Add New Order</h3>

//       {error && <Alert variant="danger">{error}</Alert>}

//       {/* Show payment success alert if paymentSuccess is true */}
//       {paymentSuccess && (
//         <Alert
//           variant="success"
//           onClose={() => setPaymentSuccess(false)}
//           dismissible
//         >
//           Payment successful! Your order has been placed.
//         </Alert>
//       )}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>
//             Customer Name<span className="text-danger">*</span>
//           </Form.Label>
//           <Form.Control
//             type="text"
//             name="customer"
//             value={formData.customer}
//             onChange={handleChange}
//             placeholder="Enter customer's name"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>
//             Food Item<span className="text-danger">*</span>
//           </Form.Label>
//           <Form.Control
//             type="text"
//             name="item"
//             value={formData.item}
//             onChange={handleChange}
//             placeholder="Enter food item"
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>
//             Quantity<span className="text-danger">*</span>
//           </Form.Label>
//           <Form.Control
//             type="number"
//             name="quantity"
//             min="1"
//             value={formData.quantity}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Special Instructions</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={2}
//             name="instructions"
//             value={formData.instructions}
//             onChange={handleChange}
//             placeholder="Optional"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Order & Pay
//         </Button>
//       </Form>
//     </div>
//   );
// }
