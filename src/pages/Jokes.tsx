import * as React from 'react';
import { BgWrapper, PageWrapper } from '../components/styled/Wrappers';

interface P {

}

const JokesApp: React.FC<P> = () => {
  let a;
  return (
    <>
      <BgWrapper>
        <PageWrapper>
          <h1> Jokes </h1>
        </PageWrapper>
      </BgWrapper>

    </>
  );
};
export default JokesApp;
