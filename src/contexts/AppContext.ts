import { createContext, useState } from "react";

export interface AppContextModel {
  isMobile: boolean;
  hueRotation: any;
  hueRotation_Inv: any;
  setHueDuration: any;
  scrollRefs: any;
}

const defaultValue: AppContextModel = {
  isMobile: true,
  hueRotation: undefined,
  hueRotation_Inv: undefined,
  setHueDuration: undefined,
  scrollRefs: undefined,
};

const AppContext = createContext(defaultValue);
export default AppContext;
