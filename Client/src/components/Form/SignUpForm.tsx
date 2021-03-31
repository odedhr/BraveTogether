import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { UserPost } from "../../actions/usersAction";
import { SignUpFormProps } from "./SignUpFormContainer";
export const InputBox = styled.input<any>`
  border: none;
  border-radius: 7px;
  margin: 9px;
  padding: 10px 30px;
  width: 35%;
  min-width:fit-content;
  background-color: #f0f0f0;
  text-align: right;
`;

const InputCheckBox = styled.input`
  margin-right: 1%;
  margin-bottom: 1%;
`;
const InputCheckBoxLabel = styled.label``;

export const SubmitButton = styled.input`
  padding: 17px 15px;
  margin: 5px;
  background-color: #048ba8;
  width: 30%;
  min-width:fit-content;
  color:white;
  border:none;
  border-radius: 12px;
  font-size: 16px;
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
    const user: UserPost = { ...data, is_manager: true, has_applied_for_manager: true };
    registerUserRequset(user);
  };
  return (
    <div>
      <Form style={{margin:"20px 70px"}} onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="text"
          id="first_name"
          placeholder="איך קוראים לך?"
          name="first_name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <br />
        <InputBox
          type="text"
          id="last_name"
          placeholder="שם המשפחה שלך?"
          name="last_name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <br />
        <InputBox
          type="tel"
          id="cellphone"
          placeholder="מה הנייד שלך?"
          name="cellphone"
          ref={register({ required: false, minLength: 6, maxLength: 12 })}
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
          type="password"
          id="password"
          placeholder="סיסמא"
          name="password"
          ref={register({ required: true, max: 12, min: 6 })}
        />
        <div style= {{ marginTop:"25px" }}>
          <InputCheckBox
            type="checkbox"
            id="has_criminal_record"
            name="has_criminal_record"
            ref={register({ required: true })}
          />
          <InputCheckBoxLabel style={{padding:"10px"}} htmlFor="has_criminal_record">אני ללא עבר פלילי</InputCheckBoxLabel>
        </div>
        <div style= {{ }}>
          <InputCheckBox
            type="checkbox"
            id="has_committed_to_privacy"
            name="has_committed_to_privacy"
            ref={register({ required: "חובה להסכים לתנאי השימוש" })}
          />
          <InputCheckBoxLabel style={{padding:"10px"}} htmlFor="has_committed_to_privacy">
            אני מסכים לתנאי השימוש
          </InputCheckBoxLabel>
        </div>
        <br />
        <SubmitButton type="submit" value="שליחת בקשת הצטרפות"></SubmitButton>
      </Form>
    </div>
  );
}
