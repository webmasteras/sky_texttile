"use client";

import styled from "@emotion/styled";

const SearchInput = styled.input((props) => ({
  width: "300px",
  outline: "none",
  border: "1px solid #ddd",

  padding: "5px 10px",
  borderRadius: "3px",
  color: "#000",
}));

const TextInput = styled.input((props) => ({
  width: "300px",
  outline: "none",
  border: "1px solid #ddd",
  padding: "7px 10px",
  fontSize: "0.9rem",
  borderRadius: "3px",
  color: "#000",
}));

const Label = styled.span((props) => ({
  width: props.width || "200px",
  padding: "5px 10px",
  color: "#717171",
  textAlign: "right",
}));

const InputSection = styled.div((props) => ({
  width: props.width || "100%",
  display: "flex",
  alignItems: props.alignItems || "center",
  margin: "5px 0",
  gap: "20px",
}));

const Checkbox = styled.div((props) => ({
  display: "flex",
  gap: "5px",
}));

const CheckboxLabel = styled.span((props) => ({
  color: "#717171",
  fontSize: "0.9rem",
}));

export { SearchInput, TextInput, Label, InputSection, Checkbox, CheckboxLabel };
