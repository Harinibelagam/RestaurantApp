// src/pages/PaymentPage.js
import React from 'react';

const PaymentPage = () => {
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onload = () => {
      const options = {
        key: 'rzp_test_pUC211KCLh64yW',
        amount: 50000,  // in paise = ₹500
        currency: 'INR',
        name: 'Delcious Restaurant',
        description: 'Order Payment',
        image: '/logo.png',
        handler: function (response) {
          alert('Payment Successful');
          console.log(response); // payment details
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    script.onerror = () => {
      alert('Razorpay SDK failed to load.');
    };

    document.body.appendChild(script);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Complete Your Order</h2>
      <p>Total Amount: ₹500</p>
      <button
        onClick={loadRazorpay}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#F37254',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentPage;


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const PaymentPage = () => {
//   const location = useLocation();
//   // Get dynamic amount from navigation state or fallback to 500 (₹)
//   const order = location.state || {};
//   const amount = order.price ? order.price * 100 : 50000; // convert ₹ to paise

//   const loadRazorpay = () => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';

//     script.onload = () => {
//       const options = {
//         key: 'rzp_test_pUC211KCLh64yW',
//         amount: amount, // amount in paise
//         currency: 'INR',
//         name: 'Delcious Restaurant',
//          description: 'Order Payment',
//         // image: 'https://your-restaurant-logo.com/logo.png',
//         image:'/logo.png',
//         handler: function (response) {
//           alert('Payment Successful');
//           console.log(response); // payment details
//         },
//         prefill: {
//           name: order.customer || 'Customer Name',
//           email: order.email || 'customer@example.com',
//           contact: order.contact || '9876543210',
//         },
//         notes: {
//           address: order.address || 'Customer Address',
//         },
//         theme: {
//           color: '#F37254',
//         },
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     };

//     script.onerror = () => {
//       alert('Razorpay SDK failed to load.');
//     };

//     document.body.appendChild(script);
//   };

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <h2>Complete Your Order</h2>
//       <p>Total Amount: ₹{(amount / 100).toFixed(2)}</p>
//       <button
//         onClick={loadRazorpay}
//         style={{
//           padding: '12px 24px',
//           fontSize: '16px',
//           backgroundColor: '#F37254',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Pay with Razorpay
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;
