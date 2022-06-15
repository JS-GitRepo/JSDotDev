import { User } from "firebase/auth";
import { createContext, useState } from "react";

export interface AuthContextModel {
  user: User | null;
  currentPathContext: string;
  setCurrentPathContext: any;
}

const defaultValue: AuthContextModel = {
  user: null,
  currentPathContext: "",
  setCurrentPathContext: null,
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
