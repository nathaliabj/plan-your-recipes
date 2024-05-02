import { FC } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import {
  ContentWrapper,
  FormInput,
  FormLabel,
  FormTextArea,
  FormWrapper,
  SubmitFormButton,
} from "./Pages.styles";

const Contact: FC = () => {
  return (
    <>
      <SecondaryNavBar />
      <ContentWrapper>
        <h1>Contact Us</h1>
        <p>
          We're excited to hear from you! Whether you have a question about our
          recipes, need help with our app, or just want to share your cooking
          experiences, please reach out. Your feedback and satisfaction drive
          everything we do at Yummy Planner.
        </p>
        <FormWrapper>
          <FormLabel>
            Name
            <FormInput type="text" name="name" required />
          </FormLabel>
          <FormLabel>
            Email
            <FormInput type="email" name="email" required />
          </FormLabel>
          <FormLabel>
            Message
            <FormTextArea name="message" required />
          </FormLabel>
          <SubmitFormButton type="submit">Send Message</SubmitFormButton>
        </FormWrapper>
      </ContentWrapper>
    </>
  );
};

export default Contact;
