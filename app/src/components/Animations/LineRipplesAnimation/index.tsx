import React, { useEffect, useState } from "react";
import "./LineRipplesAnimation.css";

const LineRipplesAnimation = ({
  playing,
  togglePlaying,
}: {
  playing: boolean;
  togglePlaying: VoidFunction;
}) => {
  const [rippleCount, setRippleCount] = useState(3);
  useEffect(() => {
    let interval: any = null;
    if (playing) {
      interval = setInterval(() => {
        setRippleCount(Math.ceil(Math.random() * 10) + 2);
      }, 5000);
    } else {
      setRippleCount(3);
      clearInterval(interval);
    }
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return (
    <div
      className="spinner-wrap flex justify-center items-center w-full cursor-pointer"
      onClick={togglePlaying}
    >
      {playing ? (
        <>
          <div className="spinner-item"></div>
          {Array.from(Array(rippleCount).keys()).map((count) => (
            <div
              key={`ripple-${count}`}
              className={`spinner-item spinner-item--${count}`}
            ></div>
          ))}
        </>
      ) : (
        <p>Play</p>
      )}
    </div>
  );
};

export default LineRipplesAnimation;
