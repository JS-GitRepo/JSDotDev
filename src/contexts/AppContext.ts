import { createContext, useContext } from "react";
import { HueRotation, ScrollRefs } from "../models/Models";

export interface AppContextModel {
  isMobile: boolean;
  hueRotation: any;
  hueRotation_Inv: any;
  setHueDuration: any;
  scrollRefs: any;
}

const defaultValues: AppContextModel = {
  isMobile: false,
  hueRotation: undefined,
  hueRotation_Inv: undefined,
  setHueDuration: undefined,
  scrollRefs: undefined,
};

const AppContext = createContext(defaultValues);
// const initAppContext = createContext<AppContextModel | undefined>(undefined);

// export const AppContext = () => {
//   const useAppContext = useContext(initAppContext!);
//   if (!initAppContext) {
//     throw new Error("No AppContext.Provider found when calling AppContext.");
//   } else {
//     return useAppContext!;
//   }
// };

export default AppContext;
