import type { ColorShade } from "./colorShade";
export type ColorGroup = {
  name: string;
  description?: string;
  shades: ColorShade[];
};