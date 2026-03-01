"use client";

import styled from "@emotion/styled";

const StyledButton = styled.button((props) => ({
  backgroundColor: "transparent",
  border: "1px solid #65BD77",
  color: "#65BD77",
  width: "fit-content",
  outline: "none",
  padding: "10px 40px",
  borderRadius: "3px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#65BD77",
    color: "white",
  },
}));

const GrayButtonSmall = styled.button((props) => ({
  backgroundColor: "#FAFAFA",
  width: "fit-content",
  outline: "none",
  border: "none",
  padding: "5px 10px",
  color: "#717171",
  cursor: "pointer",
  border: "1px solid #ddd",
  "&:hover": {
    backgroundColor: "#EDEDED",
  },
}));

const GreenButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #65BD77",
  padding: "5px 10px",
  color: "#65BD77",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#65BD77",
    color: "white",
  },
}));

const RedButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #FB6B5B",
  padding: "5px 10px",
  color: "#FB6B5B",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#FB6B5B",
    color: "white",
  },
}));

const YellowButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  border: "1px solid #FFC333",
  width: "fit-content",
  border: "1px solid #FFC333",
  outline: "none",
  padding: "5px 10px",
  color: "#FFC333",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#FFC333",
    color: "white",
  },
}));

const BlueButtonSmall = styled.button((props) => ({
  backgroundColor: "transparent",
  width: "fit-content",
  outline: "none",
  border: "1px solid #3f9eff",
  padding: "5px 10px",
  color: "#3f9eff",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#3f9eff",
    color: "white",
  },
}));

const StatusLabel = styled.span((props) => ({
  padding: "5px",
  color: "white",
  backgroundColor: props.status === "Active" ? "#5CB85C" : "#D9534F",
  borderRadius: "5px",
}));

export {
  GreenButtonSmall,
  GrayButtonSmall,
  StyledButton,
  BlueButtonSmall,
  RedButtonSmall,
  YellowButtonSmall,
  StatusLabel,
};
