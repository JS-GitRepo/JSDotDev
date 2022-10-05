import { User } from "firebase/auth";
import { createContext, useState } from "react";
import { SpringValue } from "react-spring";

export interface AppContextModel {
  isMobile: boolean;
  hueRotation: any;
  setHueDuration: any;
}

const defaultValue: AppContextModel = {
  isMobile: true,
  hueRotation: undefined,
  setHueDuration: undefined,
};

const AppContext = createContext(defaultValue);
export default AppContext;
