import { FC, ReactElement } from "react";
import { TextContainer, Underline, Text } from "./TextHighlight.styles";

interface TextHighlightProps {
  children: ReactElement | string;
  height: number;
  top?: number;
}

const TextHighlight: FC<TextHighlightProps> = ({ children, height, top }) => {
  return (
    <TextContainer>
      <Text>{children}</Text>
      <Underline height={height} top={top} />
    </TextContainer>
  );
};

export default TextHighlight;
