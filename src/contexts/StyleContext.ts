import { User } from "firebase/auth";
import { createContext, useState } from "react";
import { SpringValue } from "react-spring";

export interface StyleContextModel {
  isMobile: boolean;
  hueRotation: any;
  setHueDuration: any;
}

const defaultValue: StyleContextModel = {
  isMobile: true,
  hueRotation: undefined,
  setHueDuration: undefined,
};

const StyleContext = createContext(defaultValue);
export default StyleContext;
