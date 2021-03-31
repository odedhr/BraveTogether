import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  CriminalBackGroundCheck: boolean;
  userAgreement: boolean;
}

export default function SignUpForm(props: SignUpFormProps) {
  const { registerUserRequset } = props;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: FormInput) => registerUserRequset(data as any);
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="text"
          id="firstName"
          placeholder="שם פרטי"
          name="First name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <br />
        <InputBox
          type="text"
          id="lastName"
          placeholder="שם משפחה"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <br />
        <InputBox
          type="text"
          id="email"
          placeholder="אימייל"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <InputBox
          type="tel"
          id="phone"
          placeholder="טלפון נייד"
          name="Mobile number"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        <br />
        <InputBox
          type="text"
          id="password"
          placeholder="סיסמא"
          name="סיסמא"
          ref={register({ required: true, max: 12, min: 6 })}
        />
        <div>
          <InputCheckBox
            type="checkbox"
            id="CriminalBackGroundCheck"
            name="CriminalBackGroundCheck"
            ref={register({ required: true })}
          />
          <InputCheckBoxLabel htmlFor="CriminalBackGroundCheck">
            אני ללא עבר פלילי
          </InputCheckBoxLabel>
        </div>
        <div>
          <InputCheckBox
            type="checkbox"
            id="UserAgreement"
            name="UserAgreement"
            ref={register({ required: "חובה להסכים לתנאי השימוש" })}
          />
          <InputCheckBoxLabel htmlFor="UserAgreement">אני מסכים לתנאי השימוש</InputCheckBoxLabel>
        </div>
        <br />
        <SubmitButton type="submit" value="צור חשבון חדש"></SubmitButton>
      </Form>
    </div>
  );
}
