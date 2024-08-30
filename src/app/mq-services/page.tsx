import React from 'react'
import MqServices from './MqServices'

export const metadata = {
  title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
  description:
    "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
  alternates: {
    canonical: "https://acemq.com/mq-services",
  },
  openGraph: {
    title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
    description:
      "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
    url: "https://acemq.com/mq-services",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <MqServices />
  )
}

export default page