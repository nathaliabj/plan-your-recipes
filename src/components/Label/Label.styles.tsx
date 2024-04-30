import styled from "styled-components";

export const LabelContainer = styled.div`
  position: relative;
  display: block;
  width: fit-content;
`;

export const LabelText = styled.h3`
  color: #333;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  line-height: 1.8;
  font-size: 14px;
  z-index: 2;
  margin: 0;
`;

export const Underline = styled.span`
  position: absolute;
  width: 100%;
  background-color: rgba(220, 179, 252, 0.7);
  opacity: 0.7;
  top: 0.8em;
  left: 0;
  height: 0.6rem;
  z-index: 1;

  transition: all 0.5s ease;
`;
