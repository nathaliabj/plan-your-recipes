import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleContainer = styled(Link)`
  text-decoration: none;
`;

export const HeaderTitle = styled.h1`
  background: #fff;
  color: #333;
  text-decoration: none !important;
  font-size: 38px;
  text-align: center;
  width: fit-content;
  margin: auto;
  padding: 12px 18px;
  border: 5px solid #333;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  width: 1200px;
  margin: 30px auto;
`;

export const RecipeNavWrapper = styled.nav`
  max-width: 1200px;
  margin: 30px auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const RecipeTitleWrapper = styled.div`
  position: relative;
  display: inline;
  width: fit-content;
  transition: all 0.3s ease;
`;

export const RecipeTitle = styled.h2`
  position: relative;
  top: 10px;
  font-size: 40px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  line-height: 1.8;
  padding-bottom: 5px;
  z-index: 2;
`;

export const TitleUnderline = styled.span`
  position: absolute;
  width: 100%;
  background-color: rgba(220, 179, 252, 0.7);
  opacity: 0.7;
  top: 3.1rem;
  left: 0;
  height: 1.8rem;
  z-index: 1;

  transition: all 0.5s ease;
`;

export const RecipeBodyContainer = styled.div`
  max-width: 865px;
  margin: 80px auto 60px;
`;

export const NoPermissionContainer = styled.div`
  max-width: 865px;
  margin: 80px auto 60px;
  text-align: left;
`;

export const CenterText = styled.p`
  text-align: center;
  font-weight: 700;
  margin: 15px auto;
  width: fit-content;
  padding: 1px 10px;
`;

export const BluredLi = styled.li<{ blurStr?: number }>`
  filter: blur(${({ blurStr }) => (blurStr ? `${blurStr}px` : "3px")});
`;

export const SupertabButton = styled.div`
  width: 300px;
  margin: auto;
`;

export const Ellipsis = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 20px auto 0;
`;

export const RecipeImg = styled.img<{ long?: boolean }>`
  float: right;
  width: ${({ long }) => (long ? "380px" : "300px")};
  margin-top: -30px;
  border-radius: 4px;
  box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 1);
`;

export const Content = styled.div`
  margin-bottom: 30px;
`;

export const VideoContainer = styled.div`
  margin: 60px auto;
  width: fit-content;
`;

export const InstructionsText = styled.p`
  white-space: pre-wrap;
`;
