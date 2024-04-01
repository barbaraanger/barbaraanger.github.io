import "./BackgroundSVG.css"; // Import CSS file for styling

export function BackgroundSVG() {
  return (
    <div className="background-svg-container">
      {/* SVG for bottom-left position */}
      <svg
        className="bottom-left"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="10"
          y="50"
          fontFamily="Abril Fatface Regular"
          fontSize="20"
          fill="#744AD1"
          fillOpacity="10%"
        >
          SOFTWARE
        </text>
        <text
          x="10"
          y="70"
          fontFamily="Abril Fatface Regular"
          fontSize="20"
          fill="#744AD1"
          fillOpacity="10%"
        >
          DEVELOPER
        </text>
      </svg>
      {/* SVG for upper-right position */}
      <svg
        className="upper-right"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="170"
          y="20"
          fontFamily="Abril Fatface Regular"
          fontSize="20"
          fill="#744AD1"
          fillOpacity="10%"
        >
          SOFTWARE
        </text>
        <text
          x="170"
          y="40"
          fontFamily="Abril Fatface Regular"
          fontSize="20"
          fill="#744AD1"
          fillOpacity="10%"
        >
          DEVELOPER
        </text>
      </svg>
    </div>
  );
}
