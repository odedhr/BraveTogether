import React from "react";
import { useForm } from "react-hook-form";
import DropFile from "./DropFile";
interface TeacherInput {
  speciality: string;
  fullName: string;
  about: string;
}

export default function TeacherCardForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: TeacherInput) => console.log(data);
  const [files, setFiles] = React.useState<File[]>([]);
  const getFiles = (filesFromDropZone: File[]) => {
    setFiles(filesFromDropZone);
    console.log("files", files);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", width: "50%" }}
    >
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
      <input type="text" placeholder="כתובת? רחוב ועיר יספיקו" name="address" ref={register} />
      <textarea
        name="about"
        placeholder="ספרו לנו על הגיבור"
        ref={register({ required: true, max: 0, maxLength: 30 })}
      />
      <DropFile getFiles={getFiles} />
      <input type="submit" />
    </form>
  );
}
