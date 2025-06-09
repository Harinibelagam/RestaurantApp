
// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


// const menuItems = [
//   {
//     name: "Chicken",
//     category: "Main Course",
//     price: "₹280",
//     image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Masala Dosa",
//     category: "South Indian",
//     price: "₹120",
//     image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Paneer Butter Masala",
//     category: "Vegetarian",
//     price: "₹220",
//     image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Chicken Biryani",
//     category: "Rice Dish",
//     price: "₹250",
//     image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Ras Malai",
//     category: "Dessert",
//     price: "₹90",
//     image: "https://media.istockphoto.com/id/884011250/photo/ras-malai-is-an-indian-dessert.jpg?s=612x612&w=0&k=20&c=hdl3cneTodgvAyK7VBe-SW8CYtRtCznq08F5H56WYmA=",
//   },
//   {
//     name: "Mango Kulfi",
//     category: "Frozen Dessert",
//     price: "₹100",
//     image: "https://media.istockphoto.com/id/1149246037/photo/mango-and-pistachio-kulfi-lollies-on-blue-background.jpg?s=612x612&w=is&k=20&c=RpRZMm-yi-VdGGCgslDCpIumhzLuT7bXoY3aoToP3T0=",
//   },
//   {
//     name: "Gulab Jamun",
//     category: "Dessert",
//     price: "₹70",
//     image: "https://media.istockphoto.com/id/1188000786/photo/gulab-jamun-in-bowl-on-wooden-background-indian-dessert-or-sweet-dish.jpg?s=612x612&w=is&k=20&c=MBTO0T1QNqiLKCf-st0lT_KvNsHt4ov5qapL7FX_Ubo=",
//   },
//   {
//     name: "Fruit Salad",
//     category: "Healthy Dessert",
//     price: "₹120",
//     image: "https://images.unsplash.com/photo-1658431618300-a69b07fb5782?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Egg Curry",
//     category: "Main Course",
//     price: "₹200",
//     image: "https://media.istockphoto.com/id/1185235293/photo/boiled-curry-eggs-in-spicy-sauce-close-up-in-a-plate-vertical-top-view.jpg?s=1024x1024&w=is&k=20&c=kz0WBVoW9Gwr22JJZL8KM4YuwgFgPBCgFsPezIXNuSc=",
//   },
//   {
//     name: "Fish Curry",
//     category: "Seafood",
//     price: "₹300",
//     image: "https://images.unsplash.com/photo-1682622110397-37f6e928f890?w=1000&auto=format&fit=crop&q=60",
//   },
//   {
//     name: 'Vanilla Ice Cream',
//     category: 'Dessert',
//     price: '₹80',
//     image: 'https://media.istockphoto.com/id/466727269/photo/one-single-lemon-ice-cream-scooped-onto-a-plain-background.jpg?s=612x612&w=is&k=20&c=-0Zn8XTQo41qmwGTsR0cMA_3-S4IJNFA9GOwx1FisG0=',
//   },
//   {
//     name: 'Noodles',
//     category: 'Snacks',
//     price: '₹120',
//     image: 'https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=612x612&w=is&k=20&c=kMhHRH5l742Pt4VMJobYure05n6ons3wsAtwemFjuDk=',
//   },
// ];
// export default function MenuWithImages() {
//   const navigate = useNavigate();

//   const handleAddOrder = (item) => {
//     navigate('/home/addorders', { state: { item } });
//   };

//   return (
//     <div style={{ background: '#fffaf3', minHeight: '100vh', padding: '40px 0' }}>
//       <Container>
//         <h2 className="text-center mb-5" style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#e85d04' }}>
//           🍽️ Today's Special
//         </h2>
//         <Row>
//           {menuItems.map((menuItem, index) => (
//             <Col key={index} md={6} lg={4} className="mb-4">
//               <Card className="h-100 shadow-sm border-0 card-hover" style={{ transition: 'transform 0.3s' }}>
//                 <Card.Img variant="top" src={menuItem.image} alt={menuItem.name} style={{ height: '220px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Title>{menuItem.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{menuItem.category}</Card.Subtitle>
//                   <Card.Text><strong>Price:</strong> {menuItem.price}</Card.Text>
//                   <Button variant="success" onClick={() => handleAddOrder(menuItem)}>Add Order</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       <style>
//         {`
//           .card-hover:hover {
//             transform: scale(1.03);
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//           }
//         `}
//       </style>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: "Chicken",
    category: "Main Course",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: "Masala Dosa",
    category: "South Indian",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: "Paneer Butter Masala",
    category: "Vegetarian",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: "Chicken Biryani",
    category: "Rice Dish",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: "Ras Malai",
    category: "Dessert",
    price: "₹90",
    image: "https://media.istockphoto.com/id/884011250/photo/ras-malai-is-an-indian-dessert.jpg?s=612x612&w=0&k=20&c=hdl3cneTodgvAyK7VBe-SW8CYtRtCznq08F5H56WYmA=",
  },
  {
    name: "Mango Kulfi",
    category: "Frozen Dessert",
    price: "₹100",
   image: "https://media.istockphoto.com/id/1149246037/photo/mango-and-pistachio-kulfi-lollies-on-blue-background.jpg?s=612x612&w=is&k=20&c=RpRZMm-yi-VdGGCgslDCpIumhzLuT7bXoY3aoToP3T0=",
    
  },
  {
    name: "Gulab Jamun",
    category: "Dessert",
    price: "₹70",
    image: "https://media.istockphoto.com/id/1188000786/photo/gulab-jamun-in-bowl-on-wooden-background-indian-dessert-or-sweet-dish.jpg?s=612x612&w=is&k=20&c=MBTO0T1QNqiLKCf-st0lT_KvNsHt4ov5qapL7FX_Ubo=",
  },
  {
    name: "Fruit Salad",
    category: "Healthy Dessert",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1658431618300-a69b07fb5782?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: "Egg Curry",
    category: "Main Course",
    price: "₹200",
    image: "https://media.istockphoto.com/id/1185235293/photo/boiled-curry-eggs-in-spicy-sauce-close-up-in-a-plate-vertical-top-view.jpg?s=1024x1024&w=is&k=20&c=kz0WBVoW9Gwr22JJZL8KM4YuwgFgPBCgFsPezIXNuSc=",
    
  },
  {
    name: "Fish Curry",
    category: "Seafood",
    price: "₹300",
    image: "https://images.unsplash.com/photo-1682622110397-37f6e928f890?w=1000&auto=format&fit=crop&q=60",
  },
  {
    name: 'Vanilla Ice Cream',
    category: 'Dessert',
    price: '₹80',
    image: 'https://media.istockphoto.com/id/466727269/photo/one-single-lemon-ice-cream-scooped-onto-a-plain-background.jpg?s=612x612&w=is&k=20&c=-0Zn8XTQo41qmwGTsR0cMA_3-S4IJNFA9GOwx1FisG0=',
    
  },
  {
    name: 'Noodles',
    category: 'Snacks',
    price: '₹120',
    image: 'https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=612x612&w=is&k=20&c=kMhHRH5l742Pt4VMJobYure05n6ons3wsAtwemFjuDk=',

  },
];

export default function MenuWithImages() {
  const navigate = useNavigate();

  const handleAddOrder = (item) => {
    navigate('/home/addorders', { state: { item } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#fffaf3', minHeight: '100vh', padding: '40px 0' }}>
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#e85d04' }}
        >
          🍽️ Today's Special
        </motion.h2>

        <Row>
          {menuItems.map((menuItem, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-100 shadow-sm border-0 card-hover" style={{ transition: 'transform 0.3s' }}>
                  <Card.Img
                    variant="top"
                    src={menuItem.image}
                    alt={menuItem.name}
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{menuItem.category}</Card.Subtitle>
                    <Card.Text>
                      <strong>Price:</strong> {menuItem.price}
                    </Card.Text>
                    <Button variant="success" onClick={() => handleAddOrder(menuItem)}>
                      Add Order
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
          .card-hover:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
}
