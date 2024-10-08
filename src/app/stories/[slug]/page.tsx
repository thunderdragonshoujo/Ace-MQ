/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './content.module.css';
import { colors } from '../../../utils/Theme';
import { motion } from 'framer-motion';
// import ReactHtmlParser from 'react-html-parser';

const CustomerStories = [
  {
    id: 1,
    title: 'Real-Time Payment Processor Production Issues',
    content: ` 
One of our clients, a real-time payment processing client, had performance and scaling issues with their RabbitMQ cluster in production. 

Our best practice is to understand the overall infrastructure and use cases when RabbitMQ is used as the messaging tier. 

We were able to get them operational in 2 days in a collaborative and rapid-fire team setting that resulted in a follow-up architectural review that was able to give them a reliable
platform that renewed their confidence in the technology and gave their user base guaranteed uptime and responsiveness. Overall the engagement was very successful and the
client is available as a reference if your challenges sound similar!
 `,
  },
  {
    id: 2,
    title: 'RabbitMQ in Kubernetes',
    content: ` 
Not all of our clients have issues that are solely RabbitMQ. Commonly, we correct misunderstandings of the default out-of-the-box configuration where it is a standalone installation,
a preconfigured docker image, or a dynamic Kubernetes deployment.

Issues around monitoring, management, and how to support high availability, quorum queues, and performance characteristics are very common. 

One great success story we had was a company deploying RabbitMQ in Kubernetes where they had it co-resident with their in-house propriety application in the pods deployed.
We were able to explain how sudden pod restarts could cause disruption and recovery issues for RabbitMQ when their application failed.

Simple changes in their deployments and networking resulted in a quick win and a better understanding of how RabbitMQ is best implemented in Kubernetes.`,
  },
  {
    id: 3,
    title: 'Critical Web Launch',
    content: `
Customer Background:
Embarking on a transformative journey, we delve into the narrative of AlphaCommerce—an avant-garde e-commerce entity on the cusp of unveiling a game-changing web platform.

The challenge that lay ahead was twofold:
a stringent four-month timeline and an existing C++ codebase sprawling over a million lines.

The Challenge:
The aspiration to revolutionize online shopping was underscored by a pressing concern—persistent server crashes within AlphaCommerce's existing C++ codebase. With the impending
launch, ensuring stability, reliability, and an impeccable user experience became paramount.

Navigating the Transition: C++ to Java:
Enter Ace8, a dynamic consulting partner adept at architectural metamorphosis. The task was formidable—to transition over a million lines of C++ code to Java, while adhering to the
launch timeline and eradicating the specter of server crashes.

Strategic Approach: Conversion Tools and Precision:
Armed with ingenuity, Ace8 embarked on the transformation journey. The company engineered custom conversion tools to meticulously translate C++ constructs into their Java counterparts.
The process went beyond surface-level syntax, encapsulating the essence of logic and functionality.

Ace8's relentless efforts ensured a seamless translation, with each line of code adapted to Java's landscape. The result was a codebase poised for Java excellence, bolstered by a newfound
stability that banished server crashes.

Triumph of Launch: A Seamless Unveiling:
The culmination arrived as AlphaCommerce's web platform went live. The transition from C++ to Java was a resounding success, evident in the crash-free experience that greeted users.
What was once marred by instability was now a testament to architectural finesse.

Epilogue: A Journey of Transformation and Victory:
The AlphaCommerce case study epitomizes the synergy between technical prowess and strategic collaboration. In the face of a ticking clock, Ace8's expertise forged a path where a
massive C++ codebase embraced the Java paradigm. This transition empowered AlphaCommerce's triumphant web launch—upholding excellence and defying constraints.

The narrative stands as an embodiment of strategic partnership and technological acumen, underscoring the triumph that emerges when challenges are met with innovative solutions.
`,
  },
  {
    id: 4,
    title: 'Microservices Migration',
    content: `
  Customer Name

  We’ve added a fictional name for this company due to contractual obligations for the company to remain anonymous. 
  
  Customer Background
  
  A rapidly growing e-commerce startup, XYZ Ventures, faced a critical challenge. They needed to launch a large-scale web platform within six months to capitalize on an upcoming
  peak shopping season. The platform was designed to accommodate the surge in online traffic and offer enhanced customer experiences through personalized recommendations and
  real-time inventory updates.

  Initial Problem
  
  XYZ Ventures had already developed a suite of custom microservices in Golang to power various aspects of the platform. However, as the launch date approached, they realized
  that their existing microservices architecture might not efficiently handle the expected high load. Additionally, the microservices deployment required manual scaling and
  management, posing a potential bottleneck.
  
  Migration Requirement
  
  To ensure seamless scalability and simplified management, XYZ Ventures decided to migrate their custom Golang microservices to AWS Lambda, leveraging serverless architecture.
  This transition would not only facilitate automatic scaling but also optimize costs by eliminating the need for permanent infrastructure.
   
  AceIT Consulting Solution
  
  AceIT Consulting, a specialized cloud consultancy, was engaged to assist XYZ Ventures with this migration.
  
  AceIT understood the urgency and devised a comprehensive strategy:
  
  1. Assessment and Planning: AceIT's team collaborated closely with XYZ Venture's engineers to analyze each microservice's functionalities, dependencies, and performance
  characteristics. This analysis helped identify potential challenges in the migration process.
  
  2. Conversion Tools Development: AceIT developed custom conversion tools that could efficiently translate Golang-based microservices into AWS Lambda functions.
  The tools automatically generated Lambda-compatible code and adapted relevant parts of the microservices to the serverless architecture.
  
  3. Performance Optimization: As part of the migration, AceIT optimized the codebase to ensure that the Lambda functions were efficient and performed well under variable
  workloads.
  
  4. Integration and Testing: After the conversion, AceIT&apos;s team integrated the AWS Lambda functions with the rest of the platform and conducted rigorous testing to
  validate their functionality, performance, and scalability.
  
  5. Deployment and Monitoring: AceIT assisted in deploying the migrated platform on AWS and implemented thorough monitoring and alerting mechanisms to ensure the
  platform's stability and reliability.
  
  Successful Outcome:
  
  Despite the complexity of migrating numerous custom microservices to AWS Lambda, AceIT Consulting's expertise and conversion tools enabled XYZ Ventures to successfully
  complete the migration within the tight six-month timeframe. The new serverless architecture not only provided automatic scaling to handle high traffic but also
  reduced operational overhead and optimized costs. As a result, XYZ Ventures launched their web platform on time, offering customers an exceptional shopping experience during
  the peak season.
  
  This case study demonstrates the strategic partnership between XYZ Ventures and AceIT Consulting, highlighting how advanced planning, tailored tooling, and expert knowledge
  can overcome challenges and accelerate digital transformations.
  `,
  },
  {
    id: 5,
    title: 'Web Launch',
    content: `
Customer Name

We’ve added a fictional name for this company due to contractual obligations for the company to remain anonymous. 

Customer Background

In the realm of swift transformations, we delve into the narrative of ABCTechWave—an ambitious tech start-up poised to unveil a groundbreaking web platform. Faced with an
arduous timeline of two months, ABCTechWave grappled with an existing infrastructure built manually through the AWS console.

The Challenge

Aspiring to revolutionize online experiences, ABCTechWave confronted a twofold challenge—delivering a high-scale web platform within an ultra-tight timeframe and rectifying
an AWS infrastructure pieced together manually. Amidst the urgency, scalability, security, and efficient resource management were paramount.

IaC's Intervention: A Paradigm Shift

Enter Ace8, a trailblazing consulting firm attuned to the nuances of modern architecture. The imperative was clear—to transition from manual infrastructure configuration to the
transformative world of Infrastructure as Code (IaC).

The MVP Leap: CloudFormation Templates

Ace8 orchestrated the creation of an MVP (Minimum Viable Product) by wielding the might of CloudFormation templates. These templates encapsulated the entire infrastructure setup,
rendering manual configuration obsolete. With IaC, ABCTechWave could breathe life into their AWS resources with speed, precision, and repeatability.

Evolution of Excellence: Microservices-Ready PaaS

The narrative did not conclude at MVP—Ace8's expertise sculpted an evolution. The CloudFormation templates, once MVP enablers, morphed into an advanced Platform-as-a-Service
(PaaS) foundation for microservices. Autoscaling, load balancing, and container orchestration danced harmoniously within these templates.

Triumph of On-Time Launch: A Transformative Launch

As the clock ticked, the culmination arrived. ABCTechWave's web platform saw the light of day, radiating the seamless functionality promised. The marriage of IaC and CloudFormation
templates endowed ABCTechWave with an infrastructure orchestrated for growth, scalability, and impeccable user experiences.

Epilogue: A Tale of IaC Empowerment

The ABCTechWave case study stands as a testament to IaC's transformative power. What began as a race against time evolved into an architectural odyssey, embracing CloudFormation
templates as the architects of a microservices-ready PaaS. This story underscores the essence of precision, automation, and the ability to redefine infrastructure with IaC.

The narrative serves as an emblem of collaboration between expertise and technology, exemplifying the heights that can be reached when timelines are met without compromising
quality, and infrastructure evolves to a state of orchestrated brilliance.`,
  },
];
const BlogPage = (props: any) => {
  const [content, setContent] = useState('');
  const user = props.searchParams.user;
  const title = props.searchParams.title;

  useEffect(() => {
    const PostContent = CustomerStories.find(
      (i) => i.title == props.searchParams.title
    );
    if (PostContent && PostContent.content) {
      setContent(PostContent.content);
    } else {
      setContent('');
    }
    // setContent(PostContent.content);
  });

  const image = props.searchParams.image;
  //   console.log(props.searchParamas.content);
  //   console.log(props.searchParams.content);
  //   console.log(props.searchParams.title);
  //   console.log(props.searchParams.user);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '99vw' }}>
      <Image
        alt='abt'
        height={896}
        width={1920}
        style={{ width: '100vw', height: 'auto' }}
        src={'/bgHStories.png'}
      />
      <div className={`${styles.header} ${styles.alignCenter}`}>
        <span className={styles.head1}>
          Customer<span style={{ color: colors.primary }}> Story</span>
        </span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.postsContainer}>
          {/* {CustomerStories.map((item) => {
            return ( */}
          <div className={styles.postItem}>
            <div style={{ position: 'relative' }}>
              <Image
                alt='abt'
                height={896}
                width={1920}
                className={styles.storyImage}
                src={image}
              />{' '}
              <Image
                alt='abt'
                height={896}
                width={1920}
                className={styles.StoryIcon}
                src={user}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1vw',
                alignItems: 'flex-start',
              }}>
              <div className={styles.featuredContainer}></div>
              <div className={styles.head2}>{title}</div>
              <pre
                style={{ width: '70vw', fontFamily: 'sans-serif' }}
                className={styles.serviceText2}>
                {/* {ReactHtmlParser(content)} */}
                {content}
              </pre>
              {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.91 }}
                    style={{
                      color: "black",
                      alignSelf: "start",
                      marginTop: "1vw",
                    }}
                    className={styles.btnPrimary}
                  >
                    Learn more
                  </motion.button> */}
            </div>
          </div>
          {/* );
          })} */}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
