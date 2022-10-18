import { User } from "firebase/auth";
import { createContext, useState } from "react";
import { SpringValue } from "react-spring";

export interface AppContextModel {
  isMobile: boolean;
  hueRotation: any;
  hueRotation_Inv: any;
  setHueDuration: any;
}

const defaultValue: AppContextModel = {
  isMobile: true,
  hueRotation: undefined,
  hueRotation_Inv: undefined,
  setHueDuration: undefined,
};

const AppContext = createContext(defaultValue);
export default AppContext;
