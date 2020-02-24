/* eslint-disable react/prop-types */
import * as React from 'react';
import { ISocialData } from '../../utils/contactData';
import { StyledSocialItem } from './Styles.contact';

interface P {
  item: ISocialData;
}

const SocialItem: React.FC<P> = ({ item }) => {
  const { url, icon } = item;
  return (
    <StyledSocialItem>
      {' '}
      <a href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
      {' '}
    </StyledSocialItem>
  );
};
export default SocialItem;
