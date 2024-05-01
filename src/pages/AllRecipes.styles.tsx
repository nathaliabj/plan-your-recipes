import { Link } from "react-router-dom";
import styled from "styled-components";

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
