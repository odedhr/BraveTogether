import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { UserPost } from "../../actions/usersAction";
import { SignUpFormProps } from "./SignUpFormContainer";
export const InputBox = styled.input<any>`
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

export const SubmitButton = styled.input`
  padding-left: 5%;
  padding-bottom: 1%;
  border-radius: 1%;
  background-color: #80ced7;
`;

export const Form = styled.form`
  direction: rtl;
`;

interface FormInput {
  first_name: string;
  last_name: string;
  email: string;
  cellphone: string;
  password: string;
  has_criminal_record: boolean;
  has_committed_to_privacy: boolean;
}

export default function SignUpForm(props: SignUpFormProps) {
  const { registerUserRequset } = props;
  const { register, handleSubmit, errors } = useForm({ mode: "onSubmit" });
  const onSubmit = (data: FormInput) => {
    const user: UserPost = { ...data, is_manager: true };
    registerUserRequset(user);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="text"
          id="first_name"
          placeholder="שם פרטי"
          name="first_name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <br />
        <InputBox
          type="text"
          id="last_name"
          placeholder="שם משפחה"
          name="last_name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <br />
        <InputBox
          type="text"
          id="email"
          placeholder="אימייל"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <InputBox
          type="tel"
          id="cellphone"
          placeholder="טלפון נייד"
          name="cellphone"
          ref={register({ required: false, minLength: 6, maxLength: 12 })}
        />
        <br />
        <InputBox
          type="password"
          id="password"
          placeholder="סיסמא"
          name="password"
          ref={register({ required: true, max: 12, min: 6 })}
        />
        <div>
          <InputCheckBox
            type="checkbox"
            id="has_criminal_record"
            name="has_criminal_record"
            ref={register({ required: true })}
          />
          <InputCheckBoxLabel htmlFor="has_criminal_record">אני ללא עבר פלילי</InputCheckBoxLabel>
        </div>
        <div>
          <InputCheckBox
            type="checkbox"
            id="has_committed_to_privacy"
            name="has_committed_to_privacy"
            ref={register({ required: "חובה להסכים לתנאי השימוש" })}
          />
          <InputCheckBoxLabel htmlFor="has_committed_to_privacy">
            אני מסכים לתנאי השימוש
          </InputCheckBoxLabel>
        </div>
        <br />
        <SubmitButton type="submit" value="צור חשבון חדש"></SubmitButton>
      </Form>
    </div>
  );
}
