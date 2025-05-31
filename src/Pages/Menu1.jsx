
import React from 'react';
import { Table } from 'react-bootstrap';

const jsonString = `[
  { "id": 1, "name": "Margherita Pizza", "price": "$10" },
  { "id": 2, "name": "Pepperoni Pizza", "price": "$12" },
  { "id": 3, "name": "BBQ Chicken Pizza", "price": "$14" }
]`;

const menu1Data = JSON.parse(jsonString);

export default function Menu1() {
  return (
    <div>
      <h3>Menu 1</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Dish</th>
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
