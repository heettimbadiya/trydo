import React from 'react'
import ContactCard from '../../components/contact/ContactCard'
import ContactForm from '../../components/contact/ContactForm'
import ContactMap from '../../components/contact/ContactMap'
import ServicePage2 from '../../components/service/ServicePage2'
import HeroSection from '../../components/global/HeroSection'
import background from "../../assets/images/contact/bg-image-17.jpg"

const Contact = () => {
  return (
    <>
      <HeroSection Titale={"Contact With Us"} url={background} />
      <ContactCard />
      <ServicePage2 />
      <ContactForm />
      <ContactMap />
    </>
  );
}

export default Contact
