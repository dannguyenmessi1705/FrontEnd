// Quan ly trang thai dang nhap, dang xuat, dang ky, xac thuc tu nguoi dung
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import setToken from "../utils/setToken";

export const AuthContexts = createContext();

const AuthContextsProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const userLoad = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (err) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  // Su dung ngay lap tuc khi bat dau
  useEffect(() => {
    userLoad();
  }, []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      return response.data;
    } catch (err) {
      if (err.response.data) return err.response.data;
      else return { success: false, message: err.message };
    }
  };

  //Context data
  const authContextData = { loginUser, authState };

  // Return Provider
  return (
    <AuthContexts.Provider value={authContextData}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthContextsProvider;
