import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const InputAppearance = styled.div`
  font-size: 22px;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
`
const InputBox = styled.input<any>`
  border-radius: 1%;
  margin-right: 2%;
  margin-bottom: 1%;
  padding-bottom: 1%;
  padding-left: 3%;
  background-color: #f0f0f0;
  text-align: right;
`
const InputCheckBox = styled.input`
  margin-right: 2%;
  margin-bottom: 1%;
`
const InputCheckBoxLabel = styled.label`
    
`
const SubmitButton = styled.input`
  margin-right: 2%;
  padding-left: 5%;
  padding-bottom: 1%;
  border-radius: 1%;
  background-color: #80ced7;
`
const FormFrame = styled.form`
  margin: 2%;
  direction: rtl;
`

const FormTitle = styled.div`
  margin-right: 2%;
  text-align: right;
  font-weight: bold;
  letter-spacing: normal;
`
const FormSecondTitle = styled.div`
  margin-right: 2%;
  text-align: right;
  letter-spacing: normal;
`
interface FormInput{
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
}

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data:FormInput) => console.log(data);
    console.log(errors);
    return (
        <div>
            <FormFrame onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>
                    ?משתמש חדש
                </FormTitle>
                <FormSecondTitle>
                    הרשם
                </FormSecondTitle>
                <InputBox type="text" placeholder="שם פרטי" name="First name"
                          ref={register({required: true, maxLength: 80})} />
                <br/>
                <InputBox type="text" placeholder="שם משפחה" name="Last name"
                          ref={register({required: true, maxLength: 100})} />
                <br/>
                <InputBox type="text" placeholder="אימייל" name="Email"
                          ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                <br/>
                <InputBox type="tel" placeholder="טלפון נייד" name="Mobile number"
                          ref={register({required: true, minLength: 6, maxLength: 12})} />
                <br/>
                <InputBox type="number" placeholder="סיסמא" name="סיסמא"
                       ref={register({required: true, max: 12, min: 6})} />
                <div>
                    <InputCheckBox type="checkbox" id="CriminalBackGroundCheck" name="CriminalBackGroundCheck"
                                   ref={register({required: true})} />
                    <InputCheckBoxLabel htmlFor="CriminalBackGroundCheck">אני ללא עבר פלילי</InputCheckBoxLabel>
                </div>
                <div>
                    <InputCheckBox type="checkbox" id="UserAgreement" name="UserAgreement"
                                   ref={register({required: "חובה להסכים לתנאי השימוש"})} />
                    <InputCheckBoxLabel htmlFor="UserAgreement">אני מסכים לתנאי השימוש</InputCheckBoxLabel>
                </div>
                <br/>
                <SubmitButton type="submit" value="צור חשבון חדש" >
                </SubmitButton>
            </FormFrame>
        </div>
    );
}
