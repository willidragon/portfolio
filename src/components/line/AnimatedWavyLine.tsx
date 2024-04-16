import React from "react";
import styles from "./AnimatedWavyLine.module.css"; // Import the CSS module

interface AnimatedWavyLineProps {
  text: string;
  colorClass: string; // To apply different color classes
}

const AnimatedWavyLine: React.FC<AnimatedWavyLineProps> = ({
  text,
  colorClass,
}) => {
  return (
    <div
      className={`${styles.wavyLine} ${styles[colorClass]}`}
      data-text={text}
    ></div>
  );
};

export default AnimatedWavyLine;
