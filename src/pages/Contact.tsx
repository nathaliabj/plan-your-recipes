import { FC } from "react";

import {
  NavGroup,
  NavUnderline,
  SiteNav,
  SiteNavWrapper,
} from "./AllRecipes.styles";
import {
  TitleContainer,
  RecipeNavWrapper,
  HeaderTitle,
  ContentWrapper,
} from "./Pages.styles";

const Contact: FC = () => {
  return (
    <>
      <header>
        <RecipeNavWrapper>
          <NavGroup>
            <SiteNavWrapper>
              <SiteNav to="/my-recipes">My recipes</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>

            <SiteNavWrapper>
              <SiteNav to="/shopping-list">Shopping list</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>
          </NavGroup>
          <TitleContainer to="/">
            <HeaderTitle>Yummy planner</HeaderTitle>
          </TitleContainer>
          <NavGroup>
            <SiteNavWrapper>
              <SiteNav to="/about-us">About us</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>

            <SiteNavWrapper>
              <SiteNav to="/contact-us">Contact us</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>
          </NavGroup>
        </RecipeNavWrapper>
      </header>

      <ContentWrapper></ContentWrapper>
    </>
  );
};

export default Contact;
