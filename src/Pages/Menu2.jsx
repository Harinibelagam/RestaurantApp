
import React from 'react';
import { Table } from 'react-bootstrap';

const jsonString = `[
  { "id": 1, "name": "Vanilla Ice Cream", "price": "₹80" },
  { "id": 2, "name": "Chocolate Ice Cream", "price": "₹90" },
  { "id": 3, "name": "Mango Kulfi", "price": "₹100" },
  { "id": 4, "name": "Pistachio Kulfi", "price": "₹110" },
  { "id": 5, "name": "Strawberry Ice Cream", "price": "₹85" },
  { "id": 6, "name": "Butter Scotch Ice Cream", "price": "₹95" },
  { "id": 7, "name": "Gulab Jamun", "price": "₹70" },
  { "id": 8, "name": "Ras Malai", "price": "₹90" },
  { "id": 9, "name": "Kheer", "price": "₹80" },
  { "id": 10, "name": "Fruit Salad with Ice Cream", "price": "₹120" }
]`;

const menu1Data = JSON.parse(jsonString);

export default function Menu1() {
  return (
    <div>
      <h3 className="mb-4">Desserts - Ice Creams & Sweets</h3>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Dessert</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu1Data.map(({ id, name, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
