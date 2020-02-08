import * as React from 'react';
import { Link } from 'react-router-dom';
import { IHomeData } from '../../utils/navData';
import { StyledLink } from '../styled/Buttons';
import {
  FlexTitle, FlexText, StyledHomeBox, FlexWrapper,
} from './Styled.home';

interface P {
  homeData: IHomeData;
}

const HomeBox: React.FC<P> = ({ homeData }) => {
  const {
    title, path, text, backgroundUrl,
  } = homeData;

  return (
    <>
      <StyledHomeBox backgroundUrl={backgroundUrl}>
        <FlexWrapper>
          <FlexTitle>
            <h4>{title}</h4>
          </FlexTitle>
          <FlexText>
            <p>{text}</p>
            <StyledLink><Link to={path}>{title}</Link></StyledLink>
          </FlexText>
        </FlexWrapper>
      </StyledHomeBox>

    </>
  );
};
export default HomeBox;
