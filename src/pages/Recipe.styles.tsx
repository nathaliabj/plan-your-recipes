import styled from "styled-components";

export const RecipeHeaderBackground = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const RecipeBodyContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 60px;
`;

export const NoPermissionContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 60px;
  text-align: left;
`

export const CenterText = styled.p`
  text-align: center;
`

export const BluredLi = styled.li<{ blurStr: number; }>`
  filter: blur(${props => props.blurStr}px);
`

export const SupertabButton = styled.div`
  width: 300px;
  margin: auto;
`