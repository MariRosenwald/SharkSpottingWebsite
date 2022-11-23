import { useState, createContext, useContext } from 'react';
import propTypes from 'prop-types';
const AuthContext = createContext(null);

AuthProvider.propTypes = {
  children: propTypes.any
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
