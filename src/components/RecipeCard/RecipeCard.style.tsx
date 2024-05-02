import styled from "styled-components";

export const CardImg = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px 0 0 4px;
`;

export const LinkWrapper = styled.div``;

export const Underline = styled.span`
  position: absolute;
  background: none;
  opacity: 0.7;
  top: 0.7em;
  left: 0;
  height: 0.8rem;
  width: 0;
  z-index: 1;

  transition: all 0.5s ease;
`;

export const CardTitle = styled.a`
  color: #333;
  position: relative;
  text-decoration: none;
  border-bottom: 3px solid #333;
  line-height: 1.5;
  font-size: 20px;
  padding-bottom: 3px;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: inline;
  width: fit-content;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
`;
export const CardOverview = styled.div`
  padding: 10px 20px 10px 0px;
  align-content: center;
`;

export const CardContainer = styled.div`
  height: 200px;
  background: #fff;
  display: grid;
  grid-template-columns: 300px 1fr;
  border-radius: 4px;
  box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 1);

  &:hover {
    ${Underline} {
      width: 100%;
      background-color: rgba(220, 179, 252, 0.7);
    }
    ${CardTitle} {
      border-bottom: none;
    }
  }
`;

export const CardDescription = styled.p`
  color: #333;
`;
