import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// Styled SVG component
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

// Styled text component
const AnimatedText = styled.text`
  font-family: "Tenor Sans Regular", sans-serif;
  font-size: 60px;
  fill: #fff;
`;

export const BurstEffectSVG = () => {
  const [text, setText] = useState("");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const textToShow = "Find more about me here"; // Text to animate
    const animationSpeed = 100; // Speed of animation in milliseconds

    const interval = setInterval(() => {
      setVisibleLetters((prev) => prev + 1);
    }, animationSpeed);

    // Clear interval when all letters are visible
    if (visibleLetters === textToShow.length) {
      clearInterval(interval);
    }

    // Generate text with visible letters
    setText(textToShow.substring(0, visibleLetters));

    // Cleanup function
    return () => clearInterval(interval);
  }, [visibleLetters]);

  return (
    <StyledSVG>
      <AnimatedText x="50%" y="90%">
        {text}
      </AnimatedText>
    </StyledSVG>
  );
};
