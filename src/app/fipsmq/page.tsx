import React from 'react'
import Fipspage from './Fipspage'

export const metadata = {
  title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
  description:
    "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
  alternates: {
    canonical: "https://acemq.com/fipsmq/",
  },
  openGraph: {
    title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
    description:
      "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
    url: "https://acemq.com/fipsmq/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};



const page = () => {
  return (
    <Fipspage />
  )
}

export default page