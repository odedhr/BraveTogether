import * as React from 'react';
import styled from 'styled-components'

const Title = styled.div`
font-size: 60px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #2c828c;
`

const SubTitle = styled.div`
font-size: 35px;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: rgba(44, 130, 140, 0.8);
`

const Text = styled.div`
margin-top: 2%;
`
export interface IMainProps {
}

export default function Main (props: IMainProps) {
  return (
    <div>
      <Title>
          .התנדבות, לא מה שחשבת
          </Title>
          <SubTitle>
         גיבורי שואה מכל הארץ מתנדבים ללמד אותך
          </SubTitle>
          <Text>מה תרצה ללמד? אפשר יותר מדבר אחד </Text>
    </div>
  );
}
