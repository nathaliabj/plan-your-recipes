import { FC } from "react";
import { LabelContainer, LabelText, Underline } from "./Label.styles";

interface LabelProps {
  children: string;
}

const Label: FC<LabelProps> = ({ children }) => {
  return (
    <LabelContainer>
      <LabelText>{children}</LabelText>
      <Underline />
    </LabelContainer>
  );
};

export default Label;
