
import React from 'react';
import { Table } from 'react-bootstrap';

// Indian food menu in JSON string format
const jsonString = `[
  { "id": 1, "name": "Paneer Butter Masala", "price": "₹220" },
  { "id": 2, "name": "Chicken Biryani", "price": "₹250" },
  { "id": 3, "name": "Masala Dosa", "price": "₹120" },
  { "id": 4, "name": "Butter Chicken", "price": "₹280" },
  { "id": 5, "name": "Veg Thali", "price": "₹180" },
  { "id": 6, "name": "Fish Curry", "price": "₹300" },
  { "id": 7, "name": "Dal Makhani", "price": "₹160" },
  { "id": 8, "name": "Egg Curry", "price": "₹200" },
  { "id": 9, "name": "Chole Bhature", "price": "₹140" },
  { "id": 10, "name": "Mutton Rogan Josh", "price": "₹320" }
]`;

const menu1Data = JSON.parse(jsonString);

export default function Menu1() {
  return (
    <div>
      <h3 className="mb-4">Menu 1 - Indian Dishes</h3>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
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
