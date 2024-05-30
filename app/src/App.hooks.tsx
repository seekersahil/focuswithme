import { useState } from "react";
import { animations } from "./App.helpers";
import { AnimationOption } from "./App.types";

const useApp = () => {
  const [selectedAnimationOption, setSelectedAnimationOption] =
    useState<AnimationOption>(animations[0]);
  const selectAnimation = (option: AnimationOption) =>
    setSelectedAnimationOption(option);
  const selectedAnimation: AnimationOption["value"] =
    selectedAnimationOption.value;
  return {
    selectedAnimation,
    selectedAnimationOption,
    selectAnimation,
  };
};

export default useApp;
