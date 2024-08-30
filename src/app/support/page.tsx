import React from 'react'
import SupportPage from './SupportPage'

export const metadata = {
  title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
  description:
    "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
  alternates: {
    canonical: "https://acemq.com/support",
  },
  openGraph: {
    title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
    description:
      "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
    url: "https://acemq.com/support",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <SupportPage />
  )
}

export default page