import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 300px 1fr;
  border-radius: 4px;
  box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 1);
`;

export const CardImg = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

export const CardOverview = styled.div`
  padding: 10px 20px 10px 0px;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333;
`;
