
// import React, { useEffect } from 'react';
// import { Container, Card, Table } from 'react-bootstrap';

// // Indian Dishes
// const indianDishes = [
//   { name: 'Paneer Butter Masala', price: '₹220', category: 'Indian' },
//   { name: 'Chicken Biryani', price: '₹250', category: 'Indian' },
//   { name: 'Masala Dosa', price: '₹120', category: 'Indian' },
//   { name: 'Butter Chicken', price: '₹280', category: 'Indian' },
//   { name: 'Veg Thali', price: '₹180', category: 'Indian' },
//   { name: 'Fish Curry', price: '₹300', category: 'Indian' },
//   { name: 'Dal Makhani', price: '₹160', category: 'Indian' },
//   { name: 'Egg Curry', price: '₹200', category: 'Indian' },
//   { name: 'Chole Bhature', price: '₹140', category: 'Indian' },
//   { name: 'Mutton Rogan Josh', price: '₹320', category: 'Indian' }
// ];

// // Desserts
// const desserts = [
//   { name: 'Vanilla Ice Cream', price: '₹80', category: 'Dessert' },
//   { name: 'Chocolate Ice Cream', price: '₹90', category: 'Dessert' },
//   { name: 'Mango Kulfi', price: '₹100', category: 'Dessert' },
//   { name: 'Pistachio Kulfi', price: '₹110', category: 'Dessert' },
//   { name: 'Strawberry Ice Cream', price: '₹85', category: 'Dessert' },
//   { name: 'Butter Scotch Ice Cream', price: '₹95', category: 'Dessert' },
//   { name: 'Gulab Jamun', price: '₹70', category: 'Dessert' },
//   { name: 'Ras Malai', price: '₹90', category: 'Dessert' },
//   { name: 'Kheer', price: '₹80', category: 'Dessert' },
//   { name: 'Fruit Salad with Ice Cream', price: '₹120', category: 'Dessert' }
// ];

// // Merge and pick first 15 items
// const combinedMenu = [...indianDishes, ...desserts].slice(0, 15);

// export default function Menu1() {
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .menu-heading {
//         color: #e85d04;
//         text-align: center;
//         font-size: 2rem;
//         margin-bottom: 1.5rem;
//       }

//       .table-hover tbody tr:hover {
//         background-color: #fff3e6;
//         transition: all 0.3s ease;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <Container className="py-5">
//       <Card className="shadow-lg rounded p-4 bg-white bg-opacity-75">
//         <h3 className="menu-heading">🍽️ Menu</h3>
//         <Table striped bordered hover responsive className="text-center">
//           <thead className="table-dark">
//             <tr>
//               <th>Name</th>
//               <th>Category</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {combinedMenu.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.category}</td>
//                 <td>{item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card>
//     </Container>
//   );
// }


import React, { useEffect } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import 'animate.css';

// Indian Dishes
const indianDishes = [
  { name: 'Paneer Butter Masala', price: '₹220', category: 'Indian' },
  { name: 'Chicken Biryani', price: '₹250', category: 'Indian' },
  { name: 'Masala Dosa', price: '₹120', category: 'Indian' },
  { name: 'Butter Chicken', price: '₹280', category: 'Indian' },
  { name: 'Veg Thali', price: '₹180', category: 'Indian' },
  { name: 'Fish Curry', price: '₹300', category: 'Indian' },
  { name: 'Dal Makhani', price: '₹160', category: 'Indian' },
  { name: 'Egg Curry', price: '₹200', category: 'Indian' },
  { name: 'Chole Bhature', price: '₹140', category: 'Indian' },
  { name: 'Mutton Rogan Josh', price: '₹320', category: 'Indian' }
];

// Desserts
const desserts = [
  { name: 'Vanilla Ice Cream', price: '₹80', category: 'Dessert' },
  { name: 'Chocolate Ice Cream', price: '₹90', category: 'Dessert' },
  { name: 'Mango Kulfi', price: '₹100', category: 'Dessert' },
  { name: 'Pistachio Kulfi', price: '₹110', category: 'Dessert' },
  { name: 'Strawberry Ice Cream', price: '₹85', category: 'Dessert' },
  { name: 'Butter Scotch Ice Cream', price: '₹95', category: 'Dessert' },
  { name: 'Gulab Jamun', price: '₹70', category: 'Dessert' },
  { name: 'Ras Malai', price: '₹90', category: 'Dessert' },
  { name: 'Kheer', price: '₹80', category: 'Dessert' },
  { name: 'Fruit Salad with Ice Cream', price: '₹120', category: 'Dessert' }
];

// Merge and pick first 15 items
const combinedMenu = [...indianDishes, ...desserts].slice(0, 15);

export default function Menu1() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .menu-heading {
        color: #e85d04;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-weight: bold;
      }

      .table-hover tbody tr:hover {
        background-color: #fff3e6;
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Container className="py-5">
      <Card className="shadow-lg rounded p-4 bg-white bg-opacity-75 animate__animated animate__slideInUp">
        <h3 className="menu-heading animate__animated animate__fadeInDown">🍽️ Menu</h3>
        <Table striped bordered hover responsive className="text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {combinedMenu.map((item, index) => (
              <tr
                key={index}
                className={`animate__animated animate__fadeInUp `}
              >
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
