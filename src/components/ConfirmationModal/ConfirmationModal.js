import React from 'react';

const ConfirmationModal = ({ closeModal }) => {
  return (
    <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closeModal}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <p className="text-lg leading-relaxed text-gray-800">Order submitted. Thank you for shopping with us!</p>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            onClick={closeModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;


// import React from 'react';


// interface ConfirmationModalProps {
//   closeModal: () => void;
// }

// const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ closeModal }) => {
//   return (
//     <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closeModal}>
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
//         <div className="mt-3 text-center">
//           <p className="text-lg leading-relaxed text-gray-800">Order submitted. Thank you for shopping with us!</p>
//           <button 
//             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
//             onClick={closeModal}>
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationModal;
