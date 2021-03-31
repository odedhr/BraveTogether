import React from "react";
import { useForm } from "react-hook-form";

interface TeacherInput {
  speciality: string;
  fullName: string;
  about: string;
}

export default function TeacherCardForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: TeacherInput) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="speciality" ref={register({ required: true })}>
        <option value="לימודים לבגרות">לימודים לבגרות</option>
        <option value="בישול ואפיה">בישול ואפיה</option>
        <option value="שפות">שפות</option>
        <option value="נגינה">נגינה</option>
        <option value="שחמט">שחמט</option>
      </select>
      <input
        type="text"
        placeholder="?מה שם המורה"
        name="fullName"
        ref={register({ required: true, max: 15, min: 2 })}
      />
      <input
        type="text"
        placeholder="כתובת? רחוב ועיר יספיקו"
        name="address"
        ref={register}
      />
      <textarea
        name="ספרו לנו על הגיבור"
        ref={register({ required: true, max: 0, maxLength: 30 })}
      />
      <input type ="file"/>
      <input type="submit" />
    </form>
  );
}
