import * as React from 'react';
import { BgWrapper, PageWrapper } from '../components/styled/Wrappers';
import Jokes from '../components/jokes/Jokes';

interface P {

}

const JokesApp: React.FC<P> = () => (
  <>
    <BgWrapper>
      <PageWrapper>
        <Jokes />
      </PageWrapper>
    </BgWrapper>

  </>
);
export default JokesApp;
