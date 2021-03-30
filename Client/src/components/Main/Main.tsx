import * as React from "react";
import styled from "styled-components";
import { Category } from "../../store/storeTypes";
import { MainProps } from "./MainContainer";
import { ReactComponent as Chef } from "../../assets/icons/chef.svg";
import { ReactComponent as Chess } from "../../assets/icons/chess.svg";
import { ReactComponent as Langugage } from "../../assets/icons/language.svg";
import { ReactComponent as Study } from "../../assets/icons/study.svg";
import { ReactComponent as Music } from "../../assets/icons/music.svg";

const Title = styled.div`
  font-size: 60px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #2c828c;
`;
const SubTitle = styled.div`
  font-size: 35px;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: rgba(44, 130, 140, 0.8);
`;
const Text = styled.div`
  margin-top: 2%;
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
  return (
    <div>
      <Title>.התנדבות, לא מה שחשבת</Title>
      <SubTitle>גיבורי שואה מכל הארץ מתנדבים ללמוד אותך</SubTitle>
      <Text>מה תרצה ללמד? אפשר יותר מדבר אחד </Text>

      <Categories>
        {categories &&
          categories.map((category: Category) => {
            const categories =
              selectedCategories && selectedCategories.length > 0
                ? [...selectedCategories, category.name]
                : [category.name];
            const isSelected = selectedCategories?.find(
              (selectedCategory) => category.name === selectedCategory
            ) as string;
            console.log(selectedCategories);
            return (
              <CategoryWrapper
                isSelected={!!isSelected}
                onClick={() => {
                  if (isSelected) {
                    const newCategories = selectedCategories!.slice(
                      selectedCategories!.findIndex(
                        (selectedCategory) => selectedCategory === isSelected
                      )
                    );
                    console.log(newCategories);
                    selectCategory(newCategories);
                  } else {
                    selectCategory(categories);
                  }
                }}
              >
                <div style={{ marginRight: "7px" }}>{category.name}</div>
                {category.imgName && Icons[category.imgName]}
              </CategoryWrapper>
            );
          })}
      </Categories>
    </div>
  );
}
