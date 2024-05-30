import React from "react";
import "./ConcentricAnimation.css";

const ConcentricAnimation = ({
  playing,
  togglePlaying,
}: {
  playing: boolean;
  togglePlaying: VoidFunction;
}) => {
  return (
    <div
      className="flex justify-center items-center w-full cursor-pointer min-h-full mt-[200px]"
      onClick={togglePlaying}
    >
      {playing ? (
        <div className="mt-[-150px]">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            xmlSpace="preserve"
            className="spinner-svg"
          >
            {/* ring 5 */}
            <circle className="st" cx="500" cy="500" r="160" />
            <circle
              className="st st--small"
              cx="500"
              cy="500"
              r="160"
              transform="rotate(0 500 500)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 500 500"
                to="-360 500 500"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ring 4 */}
            <circle className="st st--transparent" cx="500" cy="500" r="240" />
            <circle
              className="st st--medium"
              cx="500"
              cy="500"
              r="240"
              transform="rotate(0 500 500)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 500 500"
                to="-360 500 500"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ring 3 */}
            <circle className="st" cx="500" cy="500" r="320" />
            <circle
              className="st st--three"
              cx="500"
              cy="500"
              r="320"
              transform="rotate(0 500 500)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 500 500"
                to="-360 500 500"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ring 2 */}
            <circle className="st" cx="500" cy="500" r="400" />
            <circle
              className="st st--large"
              cx="500"
              cy="500"
              r="400"
              transform="rotate(0 500 500)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 500 500"
                to="-360 500 500"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ring 1 */}
            <circle className="st" cx="500" cy="500" r="480" />
            <circle
              className="st st--xlarge"
              cx="500"
              cy="500"
              r="480"
              transform="rotate(0 500 500)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 500 500"
                to="-360 500 500"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <p>Play</p>
      )}
    </div>
  );
};

export default ConcentricAnimation;
