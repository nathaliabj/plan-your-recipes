import { FC } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import {
  ContentWrapper,
  CenterText,
} from "./Pages.styles";

const ShoppingList: FC = () => {
  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>

      <ContentWrapper>
        <CenterText>You don't have any items on your shopping list.</CenterText>
      </ContentWrapper>
    </>
  );
};

export default ShoppingList;
