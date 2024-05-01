import { FC, ReactElement } from "react";
import { TextContainer, Underline, Text } from "./TextHighlight.styles";

interface TextHighlightProps {
  children: ReactElement | string;
  height: number;
}

const TextHighlight: FC<TextHighlightProps> = ({ children, height }) => {
  return (
    <TextContainer>
      <Text>{children}</Text>
      <Underline height={height} />
    </TextContainer>
  );
};

export default TextHighlight;
