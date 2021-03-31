import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Form, InputBox, SubmitButton } from "./SignUpForm";

interface FormInput {
  address: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  CriminalBackGroundCheck: boolean;
  userAgreement: boolean;
}
export default function Event() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: FormInput) => {};

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="text"
          id="address"
          placeholder="כתובת"
          name="Address"
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

        <br />
        <SubmitButton type="submit" value="צור חשבון חדש"></SubmitButton>
      </Form>
    </div>
  );
}
