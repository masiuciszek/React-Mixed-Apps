import * as React from 'react';
import { PageWrapper } from '../components/styled/Wrappers';
import Contact from '../components/contact/Contact';

interface P {

}

const ContactPage: React.FC<P> = () => (
  <PageWrapper>
    <Contact />
  </PageWrapper>
);
export default ContactPage;
