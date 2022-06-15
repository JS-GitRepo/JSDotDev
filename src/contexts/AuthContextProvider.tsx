import { User } from "firebase/auth";
import AuthContext from "./AuthContext";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import UserAccount from "../models/UserAcount";
import { createNewUser, getUserById } from "../services/userService";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPathContext, setCurrentPathContext] = useState<string>("");

  const generateDateInfo = () => {
    const currentDate: Date = new Date();
    const detailedDate: number = Date.now();
    const simpleDate: number = Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      0,
      0,
      0,
      0
    );
    return { currentDate, detailedDate, simpleDate };
  };

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      getUserById(user.uid).then((response) => {
        if (!response) {
          let newUser: UserAccount = {
            uid: user.uid,
            name: user.displayName!,
            img: user.photoURL!,
            initDate: generateDateInfo().simpleDate,
          };
          createNewUser(newUser);
        }
      });
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, currentPathContext, setCurrentPathContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
