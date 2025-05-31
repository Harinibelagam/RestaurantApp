
import React from 'react';
import { Table } from 'react-bootstrap';

const jsonString = `[
  { "id": 1, "customer": "John Doe", "item": "Pizza", "quantity": 2, "status": "Delivered" },
  { "id": 2, "customer": "Jane Smith", "item": "Burger", "quantity": 1, "status": "Preparing" },
  { "id": 3, "customer": "Sam Wilson", "item": "Pasta", "quantity": 3, "status": "Delivered" }
]`;

const ordersData = JSON.parse(jsonString);

export default function Orders() {
  return (
    <div>
      <h3>Orders</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(({ id, customer, item, quantity, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{item}</td>
              <td>{quantity}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
