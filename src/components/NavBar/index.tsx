import {
  HeaderBackground,
  HeaderContainer,
  HeaderTitle,
  MainHeaderTitle,
  NavGroup,
  NavUnderline,
  NavWrapper,
  RecipeNavWrapper,
  SiteNav,
  SiteNavWrapper,
  TitleContainer
} from "./NavBar.styles";
import cook from "../../assets/images/cook.jpg";

export const MainNavBar = () => (
  <HeaderContainer>
    <MainHeaderTitle>Yummy Planner</MainHeaderTitle>
    <NavWrapper>
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
    </NavWrapper>
    <HeaderBackground src={cook} alt="kitchen" />
  </HeaderContainer>
)

export const SecondaryNavBar = () => (
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
);