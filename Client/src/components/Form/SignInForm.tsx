import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInFormProps } from "./SignInFormContainer";

const InputBox = styled.input<any>`
  border: none;
  border-radius: 10%;
  margin-bottom: 5%;
  padding-bottom: 5%;
  //padding-left: 3%;
  background-color: #f0f0f0;
  text-align: right;
`;

const InputCheckBox = styled.input`
  margin-right: 2%;
  margin-bottom: 1%;
`;
const InputCheckBoxLabel = styled.label``;

const SubmitButton = styled.input`
  padding-left: 5%;
  padding-bottom: 1%;
  border-radius: 1%;
  background-color: #80ced7;
`;

const FormFrame = styled.form`
  margin: 2%;
  direction: rtl;
`;

interface FormInput {
  username: string;
  password: string;
}

export default function SignInForm(props: SignInFormProps) {
  const { loginRequest } = props;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ username, password }: FormInput) => loginRequest(username, password);
  return (
    <div>
      <FormFrame onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="text"
          placeholder="אימייל"
          name="username"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <InputBox
          type="password"
          placeholder="סיסמא"
          name="password"
          ref={register({ required: true, max: 12, min: 6 })}
        />
        <br />
        <SubmitButton type="submit" value="התחבר"></SubmitButton>
      </FormFrame>
    </div>
  );
}
