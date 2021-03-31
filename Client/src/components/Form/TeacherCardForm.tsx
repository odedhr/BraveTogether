import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DropFile from "./DropFile";
import { CategoriesRenderer, InTheNextDay, SubTitle, Title } from "../Main/Main";
import { TeacherCardFormProps } from "./TeacherCardFormContainer";
import { Category } from "../../store/storeTypes";
export type TeacherInput = {
  speciality: string;
  fullName: string;
  about: string;
  address: string;
};

const StyledForm = styled.form`
  display: "flex";
  flex-direction: "row-reverse";
  justify-content: "center";
`;
const FormWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #000000;
  background-color: #ffffff;
  width: 500px;
  height: 300px;
  display: flex;
  margin-top: 5%;
  flex-direction: row-reverse;
  justify-content: center;
`;
const Input = styled.input<any>`
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: rgba(0, 0, 0, 0.7);
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: ${(props) => (props.isBold ? "bold" : "")};
  }
  margin: 5% 0%;
`;
const TextArea = styled.textarea`
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: rgba(0, 0, 0, 0.7);
  border: none;
`;
export default function TeacherCardForm(props: TeacherCardFormProps) {
  const { categories, convertAddressToLocationThenCreateEvent, newEvent } = props;
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const { register, handleSubmit, errors } = useForm();
  const [files, setFiles] = React.useState<File[]>([]);
  const onSubmit = (data: TeacherInput) => {
    convertAddressToLocationThenCreateEvent(data.address, data);
  };

  const onClickCategory = (category: Category, isSelectedString: string) => {
    if (isSelectedString) {
      const newCategories = selectedCategories!.filter((selectedCategory) => {
        if (selectedCategory !== isSelectedString) return selectedCategory;
      });
      setSelectedCategories(newCategories);
    } else {
      const categories =
        selectedCategories && selectedCategories.length > 0
          ? [...selectedCategories, category.name]
          : [category.name];
      setSelectedCategories(categories);
    }
  };
  const getFiles = (filesFromDropZone: File[]) => {
    setFiles(filesFromDropZone);
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title>בוא נוסיף את המורה שלך (ובקרוב שלנו)</Title>
      <InTheNextDay>במה המורה מתמחה?</InTheNextDay>
      {CategoriesRenderer(categories, selectedCategories, onClickCategory)}
      <FormWrapper>
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", width: "50%", direction: "rtl" }}
        >
          <Input
            type="text"
            placeholder="מומחיות ספציפית?"
            name="speciality"
            ref={register({ required: true, max: 15, min: 2 })}
            isBold={true}
          />
          <Input
            type="text"
            placeholder="מה שם המורה?"
            name="hero_name"
            ref={register({ required: true, max: 15, min: 2 })}
          />
          <Input type="text" placeholder="כתובת? רחוב ועיר יספיקו" name="address" ref={register} />
          <TextArea
            name="about"
            placeholder="ספרו לנו על הגיבור"
            ref={register({ required: true, max: 0, maxLength: 30 })}
          />
          <input type="submit" />
        </StyledForm>
        <div style={{ marginRight: "10%", marginTop: "44px" }}>
          <DropFile getFiles={getFiles} />
        </div>
      </FormWrapper>
    </div>
  );
}
