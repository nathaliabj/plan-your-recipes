import { FC } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import {
  ContentWrapper,
  CenterText,
} from "./Pages.styles";

const About: FC = () => {
  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>

      <ContentWrapper>
        <CenterText>Coming soon.</CenterText>
      </ContentWrapper>
    </>
  );
};

export default About;
