// src/pages/PaymentPage.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const order = location.state || {};
  const amount = order.price ? order.price * 100 : 50000; // in paise
  const dishName = order.dish || 'Delicious Meal';
  const customerName = order.customer || 'Customer Name';

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInSlide {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }

      .fade-in {
        animation: fadeInSlide 1s ease-out;
      }

      .pay-button {
        animation: pulse 2s infinite;
      }

      .pay-button:hover {
        background-color: #d35400 !important;
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(0,0,0,0.15);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onload = () => {
      const options = {
        key: 'rzp_test_pUC211KCLh64yW',
        amount: amount,
        currency: 'INR',
        name: 'Delicious Restaurant',
        description: 'Order Payment',
        image: '/logo.png',
        handler: function (response) {
          alert('Payment Successful');
          console.log(response);
        },
        prefill: {
          name: customerName,
          email: order.email || 'customer@example.com',
          contact: order.contact || '9876543210',
        },
        notes: {
          address: order.address || 'Customer Address',
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
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center fade-in bg-light py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow p-4">
            <div className="text-center mb-3">
              <img src="/logo.png" alt="Restaurant Logo" style={{ width: '60px' }} />
              <h2 className="mt-3 text-danger">Delicious Restaurant</h2>
              <p className="text-muted">Payment Summary</p>
            </div>

            <hr className="mb-3" />

            <div className="mb-3">
              <p><strong>Dish:</strong> {dishName}</p>
              <p><strong>Customer:</strong> {customerName}</p>
              <p><strong>Total Amount:</strong> ₹{(amount / 100).toFixed(2)}</p>
            </div>

            <button
              className="btn w-100 mt-3 text-white pay-button"
              variant = 'danger'
              onClick={loadRazorpay}
              style={{
                backgroundColor: '#F37254',
                borderColor: '#F37254',
                fontSize: '16px',
                padding: '14px 30px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
            >
              Pay Now
            </button>

            <p className="text-center mt-4 small text-muted">
              Secured by Razorpay | SSL Encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
