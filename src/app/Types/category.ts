import { SpecificAttribute } from "./specific-attribute";

export interface Category {
  id: number;
  name: string;
  specificAttributes: SpecificAttribute[];
}
