
// import React from 'react';
// import { Table } from 'react-bootstrap';

// const jsonString = `[
//   { "id": 1, "customer": "Sona", "item": "Chicken Biriyani", "quantity": 2, "status": "Delivered" },
//   { "id": 2, "customer": "Rahul", "item": "Paneer", "quantity": 1, "status": "Preparing" },
//   { "id": 3, "customer": "Mahima", "item": "Vanilla Icecream", "quantity": 3, "status": "Delivered" }
// ]`;

// const ordersData = JSON.parse(jsonString);

// export default function Orders() {
//   return (
//     <div>
//       <h3>Orders</h3>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Customer</th>
//             <th>Item</th>
//             <th>Quantity</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ordersData.map(({ id, customer, item, quantity, status }) => (
//             <tr key={id}>
//               <td>{id}</td>
//               <td>{customer}</td>
//               <td>{item}</td>
//               <td>{quantity}</td>
//               <td>{status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }



import React from 'react';
import { Table } from 'react-bootstrap';

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
            <th>Price (₹)</th>
            <th>Total (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(({ id, customer, item, quantity, price, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{item}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{quantity * price}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
