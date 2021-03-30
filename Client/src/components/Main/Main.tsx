import * as React from "react";
import styled from "styled-components";
import { Category } from "../../store/storeTypes";
import { MainProps } from "./MainContainer";
import { ReactComponent as Chef } from "../../assets/icons/chef.svg";
import { ReactComponent as Chess } from "../../assets/icons/chess.svg";
import { ReactComponent as Langugage } from "../../assets/icons/language.svg";
import { ReactComponent as Study } from "../../assets/icons/study.svg";
import { ReactComponent as Music } from "../../assets/icons/music.svg";
import Map from "../Map/Map";
import Popup from "../Modal/Modal";
const Title = styled.div`
  font-size: 55px;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #0a100d;
`;
const SubTitle = styled.div`
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
  width: 7%;
  height: 3%;
  flex-grow: 0;
  padding: 9px 23px 9px 23.5px;
  border-radius: 50px;
  background-color: ${(props) => (props.isSelected ? "darkgrey" : "#e5e5e5")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0.5%;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
const Categories = styled.div`
  display: flex;
  justify-content: center;
`;
const Icons: any = {
  chess: <Chess />,
  chef: <Chef />,
  study: <Study />,
  music: <Music />,
  language: <Langugage />,
};

export default function Main(props: MainProps) {
  const { categories, selectCategory, selectedCategories } = props;
  const [isModalOpen, setOpenModal] = React.useState(false);
  const onClickCategory = (category: Category, isSelected: string) => {
    if (isSelected) {
      const newCategories = selectedCategories!.filter((selectedCategory) => {
        if (selectedCategory !== isSelected) return selectedCategory;
      });
      selectCategory(newCategories);
    } else {
      const categories =
        selectedCategories && selectedCategories.length > 0
          ? [...selectedCategories, category.name]
          : [category.name];
      selectCategory(categories);
    }
  };
  return (
    <div>
      <div>
        <Title>השיעורים הכי משמעותיים</Title>
        <Title>מגיבורים מעוררי השראה</Title>
      </div>
      <SubTitle>מערך שיעורים בהתנדבות, מועברים על ידי גיבורי שואה</SubTitle>
      <Text>?מה בא לך ללמוד</Text>

      {CategoriesRenderer()}
      <Text>!דרך אגב, אפשר יותר מדבר אחד</Text>
      <Map openModal={() => setOpenModal(true)} />
      <Popup isModalOpen={isModalOpen} closePopup={(isOpen: boolean) => setOpenModal(isOpen)}>
        <></>
      </Popup>
    </div>
  );

  function CategoriesRenderer() {
    return (
      <Categories>
        {categories &&
          categories.map((category: Category) => {
            const isSelected = selectedCategories?.find(
              (selectedCategory) => category.name === selectedCategory
            ) as string;
            return (
              <CategoryWrapper
                key={category.name}
                isSelected={!!isSelected}
                onClick={() => onClickCategory(category, isSelected)}
              >
                <div style={{ marginRight: "7px" }}>{category.name}</div>
                {category.imgName && Icons[category.imgName]}
              </CategoryWrapper>
            );
          })}
      </Categories>
    );
  }
}
