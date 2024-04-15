import SpriteIcon from '../../images/sprite.svg';
import HeroImg from '../../images/Rectangle 1.png';
import { useState } from 'react';
import {
  BtnStart,
  BoxCheck,
  HomeImg,
  HomeInfo,
  Section,
  InfoHomeBox,
  BoxWrap,
} from './Home.styled';

export const Home = () => {
  const [changeHover, setChangeHover] = useState(false);

  const handleToggleArrow = () => {
    setChangeHover((prevState) => !prevState);
  };

  return (
    <Section>
      <HomeInfo>
        <h2>Make Life Easier for the Family:</h2>
        <p>Find Babysitters Online for All Occasions</p>
        <BtnStart to="/nannies" onChange={handleToggleArrow}>
          <span>Get started</span>
          <svg width="15" height="22">
            <use
              xlinkHref={
                changeHover
                  ? `${SpriteIcon}#icon-Arrow-inline`
                  : `${SpriteIcon}#icon-Arrow-up`
              }
            />
          </svg>
        </BtnStart>
      </HomeInfo>
      <HomeImg src={HeroImg} alt="home" />
      <InfoHomeBox>
        <BoxCheck>
          <svg width="20" height="15">
            <use xlinkHref={`${SpriteIcon}#icon-check`} />
          </svg>
        </BoxCheck>
        <BoxWrap>
          <p>Experienced nannies</p>
          <h2>15,000</h2>
        </BoxWrap>
      </InfoHomeBox>
    </Section>
  );
};
