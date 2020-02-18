/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledTitle, StyledHeading } from './styled.title';

interface P {
  mainTitle: string;
  secondaryTitle?: string;
  color?: string;
  size?: string;
}

const Title: React.FC<P> = ({
  mainTitle, secondaryTitle, color, size,
}): JSX.Element => (
  <StyledTitle>
    <StyledHeading color={color} size={size}>
      {mainTitle}
    </StyledHeading>

    {secondaryTitle && (
      <StyledHeading as="h5" color={color} size={size}>
        {secondaryTitle}
      </StyledHeading>
    )}
  </StyledTitle>
);
export default Title;
