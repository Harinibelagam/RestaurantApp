import React, { useEffect } from 'react';
import { Table, Badge } from 'react-bootstrap';

const jsonString = `[
  { "id": 1, "customer": "Sona", "item": "Chicken Biriyani", "quantity": 2, "status": "Delivered", "price": 180 },
  { "id": 2, "customer": "Rahul", "item": "Paneer", "quantity": 1, "status": "Preparing", "price": 150 },
  { "id": 3, "customer": "Mahima", "item": "Vanilla Icecream", "quantity": 3, "status": "Delivered", "price": 60 },
  { "id": 4, "customer": "Amit", "item": "Mutton Curry", "quantity": 1, "status": "Delivered", "price": 250 },
  { "id": 5, "customer": "Neha", "item": "Veg Fried Rice", "quantity": 2, "status": "Preparing", "price": 120 },
  { "id": 6, "customer": "Karan", "item": "Chocolate Shake", "quantity": 1, "status": "Delivered", "price": 80 },
  { "id": 7, "customer": "Riya", "item": "Gulab Jamun", "quantity": 4, "status": "Delivered", "price": 40 }
]`;

const ordersData = JSON.parse(jsonString);

export default function Orders() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .orders-container {
        background: linear-gradient(135deg, #fef9f9, #fdf1f5);
        min-height: 100vh;
        padding: 3rem;
        font-family: 'Poppins', sans-serif;
      }

      .orders-card {
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        animation: fadeUp 0.7s ease-in-out;
      }

      .orders-heading {
        color: #d63384;
        text-align: center;
        margin-bottom: 1.5rem;
        font-weight: bold;
        animation: fadeUp 1s ease;
      }

      .table-hover tbody tr:hover {
        background-color: #fff0f5;
        transition: all 0.3s ease;
        transform: scale(1.01);
      }

      .fade-row {
        opacity: 0;
        animation: fadeUp 0.6s ease forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const getStatusBadge = (status) => {
    const lower = status.toLowerCase();
    if (lower === 'delivered') return <Badge bg="success">Delivered</Badge>;
    if (lower === 'preparing') return <Badge bg="warning" text="dark">Preparing</Badge>;
    return <Badge bg="secondary">{status}</Badge>;
  };

  return (
    <div className="orders-container">
      <div className="orders-card">
        <h3 className="orders-heading">🧾 Orders</h3>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map(({ id, customer, item, quantity, price, status }, index) => (
              <tr key={id} className="fade-row" style={{ animationDelay: `${index * 0.1}s` }}>
                <td>{id}</td>
                <td>{customer}</td>
                <td>{item}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{quantity * price}</td>
                <td>{getStatusBadge(status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
