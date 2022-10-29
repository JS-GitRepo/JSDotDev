import { SpringValue } from "react-spring";

export interface URLParamObject {
  0: string;
  1: string;
  2: string;
  3: string;
}

export interface ScrollRefs {
  media: React.MutableRefObject<any>;
  tech: React.MutableRefObject<any>;
  about: React.MutableRefObject<any>;
  blog: React.MutableRefObject<any>;
}

export interface UserAccount {
  uid: string;
  name: string;
  img: string;
  initDate: number;
}

export interface HueRotation {
  filter: SpringValue<string>;
}
