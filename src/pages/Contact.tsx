import { FC } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import {
  ContentWrapper,
  CenterText,
} from "./Pages.styles";

const Contact: FC = () => {
  return (
    <>
      <SecondaryNavBar />
      <ContentWrapper>
        <CenterText>Coming soon</CenterText>
      </ContentWrapper>
    </>
  );
};

export default Contact;
