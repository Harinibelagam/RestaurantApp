
// //AddOrders.js
// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function AddOrders() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const item = location.state?.item;

//   const [formData, setFormData] = useState({
//     customer: '',
//     quantity: 1,
//     instructions: '',
//     itemName: item?.name || '',
//     price: item?.price || '',
//   });

//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!item) {
//       setError('No item selected. Please go back and select a menu item.');
//     }
//   }, [item]);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.customer.trim()) {
//       setError('Customer name is required');
//       return;
//     }

//     const numericPrice = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
//     const total = numericPrice * formData.quantity;

//     navigate('/home/payment', {
//       state: {
//         dish: formData.itemName,
//         customer: formData.customer,
//         price: total,
//         quantity: formData.quantity,
//         instructions: formData.instructions,
//       }
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Add Order</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="customer"
//             value={formData.customer}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Item</Form.Label>
//           <Form.Control type="text" value={formData.itemName} readOnly />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Price (₹)</Form.Label>
//           <Form.Control type="text" value={formData.price} readOnly />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             min={1}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Instructions</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="instructions"
//             rows={2}
//             value={formData.instructions}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit & Pay
//         </Button>
//       </Form>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddOrders() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const [formData, setFormData] = useState({
    customer: '',
    quantity: 1,
    instructions: '',
    itemName: item?.name || '',
    price: item?.price || '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (!item) {
      setError('No item selected. Please go back and select a menu item.');
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customer.trim()) {
      setError('Customer name is required');
      return;
    }

    const numericPrice = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    const total = numericPrice * formData.quantity;

    navigate('/home/payment', {
      state: {
        dish: formData.itemName,
        customer: formData.customer,
        price: total,
        quantity: formData.quantity,
        instructions: formData.instructions,
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Add Order</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Item</Form.Label>
              <Form.Control type="text" value={formData.itemName} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control type="text" value={formData.price} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min={1}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                name="instructions"
                rows={2}
                value={formData.instructions}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Submit & Pay
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
