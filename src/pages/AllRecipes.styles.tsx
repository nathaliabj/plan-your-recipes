import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 300px;
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

export const HeaderTitle = styled.h1`
  background: #fff;
  font-size: 38px;
  text-align: center;
  width: fit-content;
  margin: auto;
  padding: 12px 18px;
  border: 5px solid #333;
  position: absolute;
  bottom: -38px;
  left: 50%;
  margin-left: -170px;
  z-index: 1;
`;

export const HeaderBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

export const RecipeCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  max-width: 1200px;
  margin: 80px auto 60px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

export const SiteNav = styled(Link)`
  position: absolute;
  top: 40px;
  color: #fff;
`;
