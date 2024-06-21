import { useState, createContext, useContext } from "react";
import { login, logout, getUser, register } from "../services/userService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const loginFunc = async (email, password) => {
    try {
      const user = await login(email, password);
      setUser(user);
      toast.success("Login Successful");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const registerFunc = async (data) => {
    try {
      const user = await register(data);
      setUser(user);
      toast.success("Register Successful");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logoutFunc = () => {
    logout();
    setUser(null);
    toast.success("Logout Successful");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: loginFunc,
        logout: logoutFunc,
        register: registerFunc,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
