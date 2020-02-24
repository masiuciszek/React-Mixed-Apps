import * as React from 'react';
import { StyledContact, StyledSocialWrapper, StyledWebWrapper } from './Styles.contact';
import Title from '../styled/title/Title';
import { webs, socialData } from '../../utils/contactData';
import SocialItem from './SocialItem';
import WebItem from './WebItem';

interface P {

}

const Contact: React.FC<P> = () => {
  const [webDataXs, setWebXsData] = React.useState(webs);
  const [socialDataXs, setSocialXsData] = React.useState(socialData);

  return (
    <StyledContact>
      <Title mainTitle="Where you can find me" color="#333" size="3rem" />
      <StyledSocialWrapper>
        {socialDataXs.map((x) => <SocialItem key={x.id} item={x} />)}
      </StyledSocialWrapper>
      <StyledWebWrapper>
        {webDataXs.map((x) => <WebItem key={x.id} item={x} />)}
      </StyledWebWrapper>
    </StyledContact>
  );
};
export default Contact;
