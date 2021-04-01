import * as React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo_hero_u.svg";
import BraveLogo from "../../assets/icons/BraveLogo.png";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkdin.svg";

import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 70px 25%;
`;
const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const TeamMember = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin: 10px 5px;
  border-radius: 10px;
  width: 130px;
  cursor: pointer;
`;

export default function AboutUs() {
  return (
    <div>
      <AboutContainer style={{ textAlign: "right" }} dir="rtl">
        <div style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>מי אנחנו?</div>
        <div style={{ fontWeight: "bold" }} dir="rtl">
          7 אנשים, מטרה אחת.
        </div>
        <div style={{ fontWeight: "bold", marginBottom: "50px" }}>
          הנגשת מאגר הידע הטמון בשורדי השואה לציבור הרחב.
        </div>
        <Logo style={{ marginBottom: "30px" }} />
        <div style={{ marginBottom: "20px" }}>
          HeroU מאפשרת לכל אחד ואחת למצוא את הגיבור שלהם, שיעורר בהם השארה וילמד אותם משהו חדש.
          מישהו שנעריץ את ניסיון חייו וחוכמתו.
        </div>
        <div style={{ fontWeight: "bold", marginBottom: "50px" }}>
          אנחנו מאמינים כי יש לנו הזכות ללמוד מהם, כל עוד אפשר.
        </div>
        <img style={{ width: "200px", margin: "0 -7px 20px 0" }} src={BraveLogo} />

        <div style={{ marginBottom: "20px" }}>
          מצעד הגבורה הינו פרויקט לאומי המהווה דרך חינוכית חדשנית להסתכל על זיכרון השואה באמצעות
          הנגשת דרך חיים שהופכת את הזיכרון שלנו למקור השראה ויזמות חברתית.
        </div>
        <div style={{ fontWeight: "bold" }}>HeroU פותח במסגרת האקתון הגבורה 2021. </div>
      </AboutContainer>
      <div style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>הצוות שלנו</div>

      <TeamContainer>
        <TeamMember
          onClick={() => window.open("https://www.linkedin.com/in/orit-weinstein-ba33351b0/")}
        >
          <b>Orit Weinstein</b>
          UX Designer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember onClick={() => window.open("https://www.linkedin.com/in/oded-harel-5780455b/")}>
          <b>Oded Harel</b>
          Programmer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember onClick={() => window.open("https://www.linkedin.com/in/noarassin/")}>
          <b>Noa Rassin</b>
          Product Owner
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember onClick={() => window.open("http://www.linkedin.com/in/niv-eliyahu")}>
          <b>Niv Eliyahu</b>
          Programmer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember onClick={() => window.open("https://www.linkedin.com/in/lliioorrn")}>
          <b>Lior Nataf</b>
          Programmer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember
          onClick={() => window.open("https://www.linkedin.com/in/hagit-buda-2600b1183/")}
        >
          <b>Hagit Buda</b>
          Programmer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
        <TeamMember onClick={() => window.open("https://www.linkedin.com/in/boban-sugareski/")}>
          <b>Boban Sugareski</b>
          Programmer
          <LinkedIn height={30} style={{ marginTop: "15px" }} width={30}></LinkedIn>
        </TeamMember>
      </TeamContainer>
    </div>
  );
}
