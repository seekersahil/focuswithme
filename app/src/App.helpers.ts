import { AnimationOption } from "./App.types";

export const animations: AnimationOption[] = [
  { value: "breathing-relaxer", label: "Breathing Relaxer" },
  { value: "line-ripples", label: "Line Ripple Effect" },
  {
    value: "concentric-animation",
    label: "Concentric Animation",
    inspiration: "https://codepen.io/zzavrski/pen/qXrVpJ",
  },
];

export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");
