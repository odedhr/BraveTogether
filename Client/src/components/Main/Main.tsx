import * as React from "react";
import styled from "styled-components";
import { Category } from "../../store/storeTypes";
import { MainProps } from "./MainContainer";
import { ReactComponent as Chef } from "../../assets/icons/chef.svg";
import { ReactComponent as Chess } from "../../assets/icons/chess.svg";
import { ReactComponent as Langugage } from "../../assets/icons/language.svg";
import { ReactComponent as Study } from "../../assets/icons/study.svg";
import { ReactComponent as Music } from "../../assets/icons/music.svg";
import gif1 from "../../assets/icons/giph1.gif";
import gif2 from "../../assets/icons/giph2.gif";
import gif3 from "../../assets/icons/giph3.gif";
import gif4 from "../../assets/icons/giph4.gif";
import gif5 from "../../assets/icons/giph5.gif";
import Map from "../Map/MapContainer";
import Popup from "../Modal/Modal";
import AboutUs from "./AboutUs";
export const Title = styled.div`
  font-size: 50px;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #0a100d;
  width: fit-content;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubTitle = styled.div`
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: rgba(27, 27, 58, 0.5);
`;
const Text = styled.div`
  margin-top: 1%;
`;
const CategoryWrapper = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 25px;
  flex-grow: 0;
  padding: 9px 23px 9px 23.5px;
  border-radius: 50px;
  border: solid 1px #000000;
  background-color: ${(props) => (props.isSelected ? "#048ba8" : "#ffffff")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 0.5%;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
`;
const Icons: any = {
  chess: <Chess />,
  chef: <Chef />,
  study: <Study />,
  music: <Music />,
  language: <Langugage />,
};

export default function Main(props: MainProps) {
  const {
    categories,
    selectedCategories,
    managerSignedUp,
    managerLoggedIn,
    selectCategory,
    getAllEvents,
    getAllHeroesRequest,
  } = props;
  React.useEffect(() => {
    getAllEvents();
    getAllHeroesRequest();
  });
  const [isModalOpen, setOpenModal] = React.useState(false);
  const [isMangerSignedUpState, setIsMangerSignedUpState] = React.useState(false);
  const onClickCategory = (category: Category, isSelected: string) => {
    if (isSelected) {
      const newCategories = selectedCategories!.filter((selectedCategory) => {
        if (selectedCategory !== isSelected) return selectedCategory;
      });
      selectCategory(newCategories);
    } else {
      const categories =
        selectedCategories && selectedCategories.length > 0
          ? [...selectedCategories, category.imgName]
          : [category.imgName];
      selectCategory(categories);
    }
  };
  React.useEffect(() => {
    if (managerSignedUp) setIsMangerSignedUpState(true);
    if (managerLoggedIn) setIsMangerSignedUpState(false);
  }, [managerSignedUp, managerLoggedIn]);
  return (
    <div>
      {isMangerSignedUpState ? AfterRegisterManagerText() : WelcomeText()}

      {CategoriesRenderer(categories, selectedCategories, onClickCategory)}
      <Text>!דרך אגב, אפשר יותר מדבר אחד</Text>
      <Map openModal={() => setOpenModal(true)} />
      <AboutUs />
      <Popup isModalOpen={isModalOpen} closePopup={(isOpen: boolean) => setOpenModal(isOpen)}>
        <></>
      </Popup>
    </div>
  );

  function WelcomeText() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <img style={{ height: "200px", width: "200px" }} src={gif1} />
            <img style={{ height: "200px", width: "200px" }} src={gif2} />
          </div>
          <div style={{ flexGrow: 1 }}>
            <TitleWrapper>
              <Title>השיעורים הכי משמעותיים</Title>
              <Title>מגיבורים מעוררי השראה</Title>
            </TitleWrapper>
            <SubTitle>מערך שיעורים בהתנדבות, מועברים על ידי גיבורי שואה</SubTitle>
            <Text>?מה בא לך ללמוד</Text>
          </div>
          <div style={{ flexGrow: 1 }}>
            <img style={{ height: "200px", width: "200px" }} src={gif4} />
            <img style={{ height: "200px", width: "200px" }} src={gif5} />
          </div>
        </div>
      </>
    );
  }
}
export const CategoriesRenderer = (
  categories: Category[],
  selectedCategories: string[] | undefined,
  onClickCategory: (categoryName: Category, foundString: string) => void
) => {
  return (
    <Categories>
      {categories &&
        categories.map((category: Category) => {
          const foundString = selectedCategories?.find(
            (selectedCategory) => category.imgName === selectedCategory
          ) as string;
          return (
            <CategoryWrapper
              key={category.imgName}
              isSelected={!!foundString}
              onClick={() => onClickCategory(category, foundString)}
            >
              <div style={{ marginRight: "7px" }}>{category.name}</div>
              {category.imgName && Icons[category.imgName]}
            </CategoryWrapper>
          );
        })}
    </Categories>
  );
};
export const InTheNextDay = styled.div`
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: rgba(10, 16, 13, 0.7);
  font-size: 25px;
  width: 50%;
  margin-top: 1%;
`;
const QuestionText = styled.div`
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: rgba(10, 16, 13, 0.6);
`;
function AfterRegisterManagerText() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Title>בקשתך התקבלה</Title>
      <InTheNextDay>
        בימים הקרובים, אנו נעבור על בקשתך על מנת לאשר אותה, זאת על מנת לשמור על בטיחות הגיבוים
        והתלמידים כאחד. תוך יום-יומיים נחזור אלייך. תודה על הסבלנות
      </InTheNextDay>
      <div style={{ marginTop: "3%" }}>
        <QuestionText> שאלות? רעיונות? נשמע לשמוע מכם </QuestionText>
        <QuestionText> doers@brave-together.com </QuestionText>
      </div>
    </div>
  );
}
