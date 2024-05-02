import { FC } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import { ContentWrapper } from "./Pages.styles";

const About: FC = () => {
  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>
      <ContentWrapper>
        <h1>Welcome to Yummy Planner!</h1>
        At Yummy Planner, we are driven by a simple belief: everyone deserves
        access to great food that's both affordable and easy to prepare.
        Launched in 2023, we offer a unique solution for food lovers of all
        backgrounds, from college students on tight budgets to busy parents
        needing quick meal ideas, and everyone in between.
        <h3>Our Story</h3>
        It all started in a cozy kitchen with two friends who loved to cook but
        were dismayed by the costly recipe books and pricey online
        subscriptions. They wondered, "Why should delicious, diverse meals be
        expensive or difficult to access?" From this question, Yummy Planner was
        born, transforming the way recipes are enjoyed by offering them at just
        25 cents each.
        <h3>What We Offer</h3>
        For only a quarter, you can access any recipe from our vast collection,
        which spans simple family dinners to exotic cuisines from around the
        world. But that's not all—our platform also allows you to:
        <ul>
          <li>
            <strong>Save Your Favorites:</strong> Keep all your beloved recipes
            in one place for easy access anytime.
          </li>
          <li>
            <strong>Create Custom Meal Plans:</strong> Plan your meals for the
            week or month with just a few clicks.
          </li>
          <li>
            <strong>Automated Shopping Lists:</strong> Use our innovative
            algorithm to generate a shopping list for your meal plans, ensuring
            you buy only what you need, saving you both time and money.
          </li>
        </ul>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            <strong>Affordability:</strong> Expand your culinary horizons
            without emptying your wallet.
          </li>
          <li>
            <strong>Quality and Simplicity:</strong> Our recipes are expertly
            designed for ease and success, regardless of your cooking level.
          </li>
          <li>
            <strong>Innovative Tools:</strong> From meal planning to shopping
            made simple, we support your cooking journey every step of the way.
          </li>
          <li>
            <strong>Variety:</strong> Dive into a sea of recipes that range from
            quick snacks to elaborate meals.
          </li>
        </ul>
        <h3>Join Our Community</h3>
        By choosing Yummy Planner, you're not just buying recipes; you're
        joining a community of enthusiastic home chefs. Share your culinary
        creations, exchange tips, and connect with others who share your passion
        for food. Together, we make cooking at home an adventure that is as fun
        as it is fulfilling.
        <h3>Our Promise</h3>
        We're committed to enhancing your cooking experience. With Yummy
        Planner, you can trust that every meal will be delicious and every plan
        will be streamlined. Dive into new tastes, refine your cooking skills,
        and enjoy exceptional meals without stress. Start your flavorful journey
        with us today!
      </ContentWrapper>
    </>
  );
};

export default About;
