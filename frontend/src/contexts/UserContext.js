// import React from 'react';

// const UserContext = React.createContext(null);

// export default UserContext;


// UserContext.js
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserContext;
