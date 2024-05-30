import React from "react";
import { AnimationOption } from "../../App.types";
import LineRipplesAnimation from "../Animations/LineRipplesAnimation";
import BreathAnimation from "../Animations/BreathAnimation";
import ConcentricAnimation from "../Animations/ConcentricAnimation";

const AnimationWrapper = ({
  animation,
}: {
  animation: AnimationOption["value"];
}) => {
  const [playing, setPlaying] = React.useState(false);
  const togglePlaying = () => setPlaying((prev) => !prev);
  return (
    <div className="flex flex-col gap-10 w-full min-h-96 flex-auto py-10 justify-center items-center">
      {animation === "breathing-relaxer" && (
        <BreathAnimation playing={playing} togglePlaying={togglePlaying} />
      )}
      {animation === "line-ripples" && (
        <LineRipplesAnimation playing={playing} togglePlaying={togglePlaying} />
      )}
      {animation === "concentric-animation" && (
        <ConcentricAnimation playing={playing} togglePlaying={togglePlaying} />
      )}
    </div>
  );
};

export default AnimationWrapper;
