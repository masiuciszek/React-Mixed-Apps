import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavList } from './Styles.nav';
import { navData, INavData } from '../../../utils/navData';


interface P {

}

const LargeNavList: React.FC<P> = () => {
  const [navDataList, setnavDataList] = React.useState<INavData[]>(navData);
  return (
    <>
      <StyledNavList>
        {
          navDataList.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>
                {' '}
                {item.text}
              </Link>
            </li>
          ))
        }
      </StyledNavList>
    </>
  );
};
export default LargeNavList;
