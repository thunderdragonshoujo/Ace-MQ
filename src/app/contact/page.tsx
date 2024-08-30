import React from 'react'
import ContactPage from './ContactPage'

export const metadata = {
  title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
  description:
    "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
  alternates: {
    canonical: "https://acemq.com/contact",
  },
  openGraph: {
    title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
    description:
      "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
    url: "https://acemq.com/contact",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <ContactPage />
  )
}

export default page