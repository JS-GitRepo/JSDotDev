import { User } from "firebase/auth";
import { createContext, useState } from "react";

export interface AuthContextModel {
  user: User | null;
}

const defaultValue: AuthContextModel = {
  user: null,
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
