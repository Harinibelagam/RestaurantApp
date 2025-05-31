
import React from 'react';
import { Table } from 'react-bootstrap';

const jsonString = `[
  { "id": 1, "name": "Caesar Salad", "price": "$8" },
  { "id": 2, "name": "Greek Salad", "price": "$9" },
  { "id": 3, "name": "Garden Salad", "price": "$7" }
]`;

const menu2Data = JSON.parse(jsonString);

export default function Menu2() {
  return (
    <div>
      <h3>Menu 2</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Dish</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menu2Data.map(({ id, name, price }) => (
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
