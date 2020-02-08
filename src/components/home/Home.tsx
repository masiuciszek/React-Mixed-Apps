import * as React from 'react';
import { IHomeData, HomeData } from '../../utils/navData';
import { StyledHome } from './Styled.home';
import HomeBox from './HomeBox';

interface P {

}

const Home: React.FC<P> = () => {
  const [homeDataState, sethomeDataState] = React.useState<IHomeData[]>(HomeData);
  return (
    <>
      <StyledHome>
        {homeDataState.map((homeBox) => <HomeBox key={homeBox.id} homeData={homeBox} />)}
      </StyledHome>
    </>
  );
};
export default Home;
