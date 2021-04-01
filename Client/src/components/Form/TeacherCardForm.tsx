import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DropFile from "./DropFile";
import { CategoriesRenderer, InTheNextDay, SubTitle, Title } from "../Main/Main";
import { TeacherCardFormProps } from "./TeacherCardFormContainer";
import { Category, Event } from "../../store/storeTypes";
import { Token } from "../../actions/types/userActionTypes";
import shortId from "shortid";
import { translate } from "../../actions/usersAction";
export type TeacherInput = {
  speciality: string;
  fullName: string;
  description: string;
  location: string;
};
export type Hero = {
  fullName: string | undefined;
  description: string | undefined;
  location: string | undefined;
  speciality: string | undefined;
  manager_id: string | undefined;
  id?: string;
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
  const {
    categories,
    newEvent,
    user,
    hero,
    convertAddressToLocationThenCreateEvent,
    postNewEvent,
    createHeroRequset,
  } = props;
  const [selectedCategories, setSelectedCategories] = React.useState<string>("");
  const { register, handleSubmit, errors } = useForm();
  const [files, setFiles] = React.useState<File[]>([]);
  const [formData, setFormData] = React.useState<TeacherInput | null>(null);
  const onSubmit = (data: TeacherInput) => {
    if (selectedCategories) {
      const hero = {
        image: files[0],
        token: user.token!,
        full_name: data.fullName,
        manager_id: user.id!,
        speciality: data.speciality,
        location: data.location,
      };
      createHeroRequset(hero as any);
      translate(data.location).then((res: any) => {
        convertAddressToLocationThenCreateEvent(res.data.translation);
      });
      setFormData(data);
    } else {
      alert("צריך לבחור קטגוריה");
    }
  };
  React.useEffect(() => {
    if (newEvent?.lat && newEvent?.long && hero.id) {
      const createEvent: any = {
        lat: newEvent.lat,
        long: newEvent?.long,
        address: formData?.location!,
        hero_id: hero.id,
        manager_id: user.id!,
        title: shortId(),
        description: formData?.description!,
        tags: selectedCategories,
        // pic: files[0],
        token: user.token!,
        reward: 10,
      };
      postNewEvent(createEvent);
    }
  }, [newEvent, hero]);

  const onClickCategory = (category: Category, isSelectedString: string) => {
    setSelectedCategories(category.imgName);
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
      {CategoriesRenderer(categories, [selectedCategories], onClickCategory)}
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
            name="fullName"
            ref={register({ required: true, max: 15, min: 2 })}
          />
          <Input type="text" placeholder="כתובת? עיר ורחוב יספיקו" name="location" ref={register} />
          <TextArea
            name="description"
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
