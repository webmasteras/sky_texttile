"use client";

import styled from "@emotion/styled";

const NavTableCell = styled.td((props) => ({
  padding: "8px",
  color: props.color || "#717171",
  backgroundColor: props.bgColor,
  width: props.icon && "40px",
}));

const NavTableRow = styled.tr`
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 20px 1px rgba(0, 0, 0, 0.1);
  }
`;

export { NavTableCell, NavTableRow };
