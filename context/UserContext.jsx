import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (er) {
      throw Error(er);
    }
  };

  const register = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (er) {
      throw Error(er?.message);
    }
  };

  const logout = async () => {};

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
