import type { ColorGroup } from "./colorGroup";

export type ColorSystem = {
  id: string;
  name: string;
  description: string;
  url: string;
  colorGroups: ColorGroup[];
  image: string;
};