import styled from "styled-components";

export const TextContainer = styled.div`
  position: relative;
  display: block;
  width: fit-content;
`;

export const Text = styled.span`
  z-index: 2;
  position: relative;
`;

export const Underline = styled.span<{ height: number }>`
  position: absolute;
  background-color: rgba(220, 179, 252, 0.7);
  opacity: 0.7;
  top: ${({ height }) => `${height + 2}px`};
  left: 0;
  height: ${({ height }) => `${height}px`};
  z-index: 1;
  width: 100%;

  transition: all 0.5s ease;
`;
