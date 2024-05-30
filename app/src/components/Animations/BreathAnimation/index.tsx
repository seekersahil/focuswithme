"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./BreathAnimation.module.css";

const BreathAnimation = ({
  playing,
  togglePlaying,
}: {
  playing: boolean;
  togglePlaying: VoidFunction;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("Play");

  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  useEffect(() => {
    const container = containerRef.current;

    let interval: any;
    let timeout1: any;
    let timeout2: any;

    function breathAnimation() {
      if (container) {
        setText("Breathe In!");
        container.classList.add(styles.grow);
        container.classList.remove(styles.shrink);

        timeout1 = setTimeout(() => {
          setText("Hold");

          timeout2 = setTimeout(() => {
            setText("Breathe Out!");
            container.classList.add(styles.shrink);
            container.classList.remove(styles.grow);
          }, holdTime);
        }, breatheTime);
      }
    }
    if (playing) {
      breathAnimation();
      interval = setInterval(breathAnimation, totalTime);
    } else {
      setText("Play");
      if (container) {
        container.classList.add(styles.shrink);
        container.classList.remove(styles.grow);
      }
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    }; // Clean up the interval on component unmount
  }, [breatheTime, holdTime, totalTime, playing]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={containerRef}
        className={styles.container}
        onClick={togglePlaying}
      >
        <div className={styles.circle}></div>
        <p className={styles.text}>{text}</p>
        {playing && (
          <div className={styles.pointerContainer}>
            <span className={styles.pointer}></span>
          </div>
        )}
        <div className={styles.gradientCircle}></div>
      </div>
    </div>
  );
};

export default BreathAnimation;
