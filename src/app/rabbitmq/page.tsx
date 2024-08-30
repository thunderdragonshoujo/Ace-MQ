import React from 'react'
import RabitmqPage from './RabitmqPage'

export const metadata = {
  title: "RabbitMQ Consulting, Support & Professional Services",
  description:
    "AceMQ specializes in RabbitMQ consulting, support, and professional services. Enhance your RabbitMQ systems with expert guidance and reliable solutions tailored to your needs.",
  alternates: {
    canonical: "https://acemq.com/rabbitmq/",
  },
  openGraph: {
    title: "RabbitMQ Consulting, Support & Professional Services",
    description:
      "AceMQ specializes in RabbitMQ consulting, support, and professional services. Enhance your RabbitMQ systems with expert guidance and reliable solutions tailored to your needs.",
    url: "https://acemq.com/rabbitmq/",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <RabitmqPage />
  )
}

export default page