/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { navData, INavData } from '../../../utils/navData';
import { StyledNavListSmall } from './Styles.nav';

interface P {

}

const SmallList: React.FC<P> = () => {
  const [navDataList, setNavDataList] = React.useState<INavData[]>(navData);

  return (
    <StyledNavListSmall>
      {
        navDataList.map((x) => (
          <li key={x.id}>
            <Link to={x.path}>{x.text}</Link>
          </li>
        ))
      }
    </StyledNavListSmall>
  );
};
export default SmallList;
