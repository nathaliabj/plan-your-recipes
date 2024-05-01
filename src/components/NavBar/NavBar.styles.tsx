import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleContainer = styled(Link)`
  text-decoration: none;
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 50px;
`;

export const NavUnderline = styled.span`
  position: absolute;
  background: none;
  opacity: 0.7;
  top: 1.6rem;
  left: 0;
  height: 0.9rem;
  width: 0;
  z-index: 1;
  transition: all 0.5s ease;
`;

export const SiteNav = styled(Link)`
  top: 10px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  position: relative;
  border-bottom: 3px solid #333;
  line-height: 1.8;
  padding-bottom: 5px;
  z-index: 2;
`;

export const SiteNavWrapper = styled.div`
  position: relative;
  display: inline;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    ${NavUnderline} {
      width: 100%;
      background-color: rgba(220, 179, 252, 0.7);
    }
    ${SiteNav} {
      border-bottom: none;
    }
  }
`;

export const NavWrapper = styled.nav`
  bottom: -50px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const RecipeNavWrapper = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 30px auto;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

export const HeaderTitle = styled.h1`
  background: #fff;
  border: 5px solid #333;
  color: #333;
  font-size: 38px;
  margin: auto;
  padding: 12px 18px;
  text-align: center;
  text-decoration: none !important;
  width: fit-content;
  z-index: 1;
`;
export const HeaderContainer = styled.header`
  height: 300px;
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

export const MainHeaderTitle = styled.h1`
  background: #fff;
  border: 5px solid #333;
  bottom: -38px;
  cursor: default;
  font-size: 38px;
  left: 50%;
  margin: auto;
  margin-left: -170px;
  padding: 12px 18px;
  position: absolute;
  text-align: center;
  width: fit-content;
  z-index: 1;
`;

export const HeaderBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;