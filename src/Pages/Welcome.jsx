

import React from 'react';
import { Card, Image } from 'react-bootstrap';

export default function Welcome() {
  return (
    <div className="text-center">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <h2 className="mb-4" style={{color:"black", fontStyle:"italic"}}>Welcome to Delicious Restaurant</h2>
          <p className="lead mb-4">
            We’re glad to have you! Use the menu on the left to manage orders and view menus.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Restaurant Interior"
            fluid
            rounded
            style={{
              maxHeight: '400px',
              objectFit: 'cover',
              width: '100%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

// import React from 'react';
// import { Card, Image } from 'react-bootstrap';

// const welcomeAnimation = {
//   animation: 'fadeSlideUp 1.6s ease forwards',
//   color: 'black',     
//   fontStyle: 'italic',
// };

// const styleSheet = `
// @keyframes fadeSlideUp {
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// `;

// export default function Welcome() {
//   return (
//     <>
//       <style>{styleSheet}</style>
//       <div className="text-center">
//         <Card className="p-4 shadow-sm">
//           <Card.Body>
//             <h2 className="mb-4" style={welcomeAnimation}>
//               Welcome to Delicious Restaurant
//             </h2>
//             <p className="lead mb-4">
//               We’re glad to have you! Use the menu on the left to manage orders and view menus.
//             </p>
//             <Image
//               src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
//               alt="Restaurant Interior"
//               fluid
//               rounded
//               style={{
//                 maxHeight: '400px',
//                 objectFit: 'cover',
//                 width: '100%',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// }
