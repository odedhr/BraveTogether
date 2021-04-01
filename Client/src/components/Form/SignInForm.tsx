import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignInFormProps } from "./SignInFormContainer";

const InputBox = styled.input<any>`
  border: none;
  border-radius: 7px;
  margin: 9px;
  padding: 9px 30px;
  width: 30%;
  background-color: #f0f0f0;
  text-align: right;
`;

const InputCheckBox = styled.input`
  margin-right: 2%;
  margin-bottom: 1%;
`;
const InputCheckBoxLabel = styled.label``;

const SubmitButton = styled.input`
  padding: 10px 15px;
  margin: 15px 9px;
  background-color: #048ba8;
  width: 15%;
  min-width:fit-content;
  color:white;
  border:none;
  border-radius: 12px;
  font-size: 17px;
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
  const { tokenRequest } = props;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ username, password }: FormInput) => tokenRequest(username, password);
  return (
    <div>
      <FormFrame style={{margin:"20px 70px"}} onSubmit={handleSubmit(onSubmit)}>
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
