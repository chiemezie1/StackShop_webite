import React from 'react';
import { useRouter } from 'next/router';

// Step 1: Define the interface for props
interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const router = useRouter();

  const goToCart = () => {
    closeModal();
    router.push('/cart');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
        <p className="mb-4 p-3 text-3xl font-bold">Item successfully added to cart!</p>
        <div className='m-3'>
          <button
            onClick={goToCart}
            className="mx-2 px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-lg transition duration-300"
          >
            Go to Cart
          </button>
          <button
            onClick={closeModal}
            className="mx-2 px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-lg transition duration-300"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
};

export default Modal;
