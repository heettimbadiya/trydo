import React from 'react'
import ContactCard from '../../components/contact/ContactCard'
import ContactForm from '../../components/contact/ContactForm'
import ContactMap from '../../components/contact/ContactMap'
import ServicePage2 from '../../components/contact/ServicePage2'

const Contact = () => {
  return (
    <>
      <ContactCard />
      <ServicePage2 />
      <ContactForm />
      <ContactMap />
    </>
  );
}

export default Contact
