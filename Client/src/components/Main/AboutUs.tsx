import * as React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo_hero_u.svg";
export interface IAboutUsProps {}

export default function AboutUs(props: IAboutUsProps) {
  return (
    <div>
      <div>?מי אנחנו</div>
      <div>7 אנשים, מטרה אחת</div>
      <div>הנגשת מאגר הידע הטמון בשורדי השואה לציבור הרחב</div>
      <Logo />
      <div>
        מאפשרת לכל אחד ואחת למצוא את הגיבור שלהם, שיעורר בהם השארה וילמד אותם משהו חדש. מישהו שנערית
        את ניסיון חייו וחוכמתו HeroU{" "}
      </div>
      <div>אנחנו מאמינים כי יש לנו הזכות ללמוד מהם, כל עוד אפשר.</div>
      <img src={require("../../assets/icons/BraveLogo.png")} />
      <div>
        {" "}
        מצעד הגבורה הינו פרויקט לאומי המהווה דרך חינוכית חדשנית להסתכל על זיכרון השואה באמצעות הנגשת
        דרך חיים שהופכת את הזיכרון שלנו למקור השראה ויזמות חברתית
      </div>
      <div>פותח במסגרת האקתון הגבורה 2021. HeroU</div>
      <div>הצוות שלנו</div>
    </div>
  );
}
