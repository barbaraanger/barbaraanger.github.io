import styled from "@emotion/styled";

const StyledSVG = styled.svg`
  width: 500px;
  height: 200px;
`;

const AnimatedText = styled.text`
  font-family: "Tenor Sans Regular", sans-serif;
  font-size: 60px;
  fill: #fff;
`;

const AnimatedTspan = styled.tspan`
  opacity: 0;
  animation: fadeIn 2s forwards; /* Apply fadeIn animation to each tspan */
`;

const staggerDelay = 0.5; // Adjust as needed

export function WhoAmISVG() {
  return (
    <StyledSVG>
      <AnimatedText x="0" y="100">
        <AnimatedTspan style={{ animationDelay: `${staggerDelay * 0}s` }}>
          Who
        </AnimatedTspan>{" "}
        <AnimatedTspan style={{ animationDelay: `${staggerDelay * 1}s` }}>
          Am
        </AnimatedTspan>{" "}
        <AnimatedTspan style={{ animationDelay: `${staggerDelay * 2}s` }}>
          I?
        </AnimatedTspan>
      </AnimatedText>
    </StyledSVG>
  );
}
