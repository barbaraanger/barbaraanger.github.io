import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownSVG } from "../assets/ArrowDownSVG";

export const NextPageArrow: React.FC<{ nextPageUrl: string }> = ({
  nextPageUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPageUrl);
  };

  return <ArrowDownSVG onClick={handleClick} width={"20"} height={"20"} />;
};
