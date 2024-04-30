import styled from "styled-components";

export const RecipeHeaderBackground = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const RecipeBodyContainer = styled.div`
  padding: 30px;
  max-width: 700px;
`;

export const NoPermissionContainer = styled.div`
  padding: 50px 30px 30px;
  text-align: left;
`

export const CenterText = styled.p`
  text-align: center;
`

export const BluredLi = styled.li<{ blurStr: number; }>`
  filter: blur(${props => props.blurStr}px);
`