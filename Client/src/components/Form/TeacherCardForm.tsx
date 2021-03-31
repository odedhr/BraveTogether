import React from "react";
import { useForm } from "react-hook-form";

interface TeacherInput

export default function TeacherCardForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="מומחיות ספציפית"
        type="radio"
        value="לימודים לבגרות"
        ref={register({ required: true })}
      />
      <input
        name="מומחיות ספציפית"
        type="radio"
        value="בישול ואפיה"
        ref={register({ required: true })}
      />
      <input name="מומחיות ספציפית" type="radio" value="שפות" ref={register({ required: true })} />
      <input name="מומחיות ספציפית" type="radio" value="נגינה" ref={register({ required: true })} />
      <input name="מומחיות ספציפית" type="radio" value="שחמט" ref={register({ required: true })} />
      <input
        type="text"
        placeholder="?מה שם המורה"
        name="?מה שם המורה"
        ref={register({ required: true, max: 15, min: 2 })}
      />
      <input
        type="text"
        placeholder="כתובת? רחוב ועיר יספיקו"
        name="כתובת? רחוב ועיר יספיקו"
        ref={register}
      />
      <textarea
        name="ספרו לנו על הגיבור"
        ref={register({ required: true, max: 0, maxLength: 30 })}
      />

      <input type="submit" />
    </form>
  );
}
