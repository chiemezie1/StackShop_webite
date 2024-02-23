// import React from 'react';
// import { useRouter } from 'next/router';

// const Modal = ({ closeModal }) => {
//   const router = useRouter();

//   const goToCart = () => {
//     closeModal();
//     router.push('/cart');
//   };

//   return (
//     <div className="ModalOverlay">
//       <div className="Modal">
//         <p>Item successfully added to cart!</p>
//         <button onClick={goToCart}>Go to Cart</button>
//         <button onClick={closeModal}>Continue Shopping</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';
import { useRouter } from 'next/router';

const Modal = ({ closeModal }) => {
  const router = useRouter();

  const goToCart = () => {
    closeModal(); // Close the modal before navigating
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <div className="ModalOverlay">
      <div className="Modal">
        <p>Item successfully added to cart!</p>
        <button onClick={goToCart}>Go to Cart</button>
        <button onClick={closeModal}>Continue Shopping</button>
      </div>

      <style jsx>{`
        .ModalOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .Modal {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Modal;
