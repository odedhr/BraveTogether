import * as React from "react";
import styled from "styled-components";
import { Hero } from "../Form/TeacherCardForm";
export interface IMapCardProps {
  hero: Hero;
}

const HeroInfo = styled.div`
  width: 60%;
  position: absolute;
  right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Icon = styled.div`
  background-color: yellow;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-bottom: 15px;
`;
const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 433px;
  padding: 28px 0 0;
  height: 341px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;
const SetClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  text-align: center;
  width: 100%;
  height: 89px;
  margin: 8px 0 0;
  color: white;
  background-color: #048ba8;
  position: absolute;
  bottom: 0;
  font-weight: bold;
  font-size: 1.7em;
`;
const HeroImg = styled.div``;

export default function MapCard(props: IMapCardProps) {
  const { hero } = props;
  return (
    <Card style={{}}>
      <div style={{ display: "flex" }}>
        <HeroImg>img div</HeroImg>
        <HeroInfo dir="rtl">
          <Icon></Icon>
          <div style={{ fontWeight: "bold", marginBottom: "15px", fontSize: "1.5em" }}>
            {hero.speciality}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {hero.fullName}
            <br />
            {hero.location}
          </div>
          <div style={{ fontWeight: "bold" }}>{hero.description}</div>
        </HeroInfo>
      </div>
      <SetClass>תיאום שיעור</SetClass>
    </Card>
  );
}
