"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { colors } from "@/utils/Theme";
import React, { useEffect, useState } from "react";
import { Corben } from "next/font/google";
import Link from "next/link";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stories = [
  {
    id: 1,
    title: 'Real-Time Payment Processor Production Issues',
    userImage: '/ps4.png',
    content:
      'Remediating performance and scaling issues with a RabbitMQ cluster in production',
    image: '/st4.png',
  },
  {
    id: 2,
    title: 'RabbitMQ in Kubernetes',
    userImage: '/ps5.png',
    content: 'Configuring RabbitMQ in Kubernetes for success',
    image: '/st5.png',
  }
];
export default function Home() {
  const [isMObile, setisMobile] = useState(false);

  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  const [Box1, setBox1] = useState(false);
  const [Box2, setBox2] = useState(false);
  const [Box3, setBox3] = useState(false);
  const [Box4, setBox4] = useState(false);
  const [Box5, setBox5] = useState(false);
  const [Box6, setBox6] = useState(false);
  const [Box7, setBox7] = useState(false);
  const [Box8, setBox8] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 870) {
        setisMobile(true);
        console.log("True", isMObile);
      } else {
        setisMobile(false);
        console.log("False", isMObile);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  // Animation Controls //
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  if (inView) {
    control.start({ x: 0, opacity: 1 });
  }

  if (inView1) {
    control1.start({ x: 0, opacity: 1 });
  }

  if (inView2) {
    control2.start({ x: 0, opacity: 1 });
  }

  if (inView3) {
    control3.start({ x: 0, opacity: 1 });
  }
  return (
    <div
      className={styles.containerWidth}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Image
        className={styles.imgBack}
        style={{}}
        alt='abt'
        height={896}
        width={1920}
        // src={isMObile ? "/bg2.png" : "/bg1.png"}
        src={'/bg1.png'}
      />
      <motion.div
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={control}
        style={{ marginBottom: !isMObile ? '377vw' : '1470vw' }}>
        <Image
          alt='abt'
          className={styles.headerLine}
          height={896}
          width={1920}
          src={'/headerLineBottom.png'}
        />
      </motion.div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '90vw',
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: isMObile ? 'center' : 'auto',
        }}>
        {/* CONTAINER 1  */}
        <motion.div
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={control}
          className={styles.contentContainer1}>
          {!isMObile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt='bg'
                  height={896}
                  width={1920}
                  // style={{ width: "2vw", height: "auto" }}
                  src={'/line1.png'}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1.5vw',
            }}>
            <div className={styles.head1}>Message</div>
            {/* <div className={styles.h2}>Innovations</div> */}
            <div
              style={{
                color: colors.primary,
                fontSize: isMObile ? '8vw' : '7vw',
                lineHeight: '7vw',
              }}
              className={styles.headL}>
              Queuing
            </div>
            <div className={styles.technology}>
              Technology <span style={{ fontWeight: '300' }}> Experts</span>
            </div>
            <div className={styles.line1}>
              AceMQ is a firm built on delivering excellence on all Messaging
              Queuing
              {!isMObile && <br />} Solutions. We have exclude tools and
              streaming Tools, in Streaming,
              {!isMObile && <br />} Architecture, and how they integrate in
              various environments. Let us
              {!isMObile && <br />} assist you with your Message brokers
              deployment or assess your current
              {!isMObile && <br />} environment.
            </div>
            <Link href={'/contact'}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btn}>
                Contact Us
              </motion.button>
            </Link>
            {/* trusted Card */}
            <div
              className={styles.trustedCard}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2vw',
              }}>
              <div className={styles.h3}>
                Trusted by{' '}
                <span style={{ color: colors.secondary }}>
                  Brands Globally:
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  width: '80vw',
                  gap: '4vw',
                  alignItems: 'center',
                }}>
                <div
                  onMouseEnter={() => setB1h(true)}
                  onMouseLeave={() => setB1h(false)}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: '5vw', height: 'auto' }}
                    // src={"/brand1.png"}
                    src={b1h ? '/brand1h.png' : '/brand1.png'}
                  />
                </div>

                <div
                  onMouseEnter={() => setB2h(true)}
                  onMouseLeave={() => setB2h(false)}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: '17vw', height: 'auto' }}
                    src={b2h ? '/brand2k.png' : '/brand2.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => setB3h(true)}
                  onMouseLeave={() => setB3h(false)}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: '14vw', height: 'auto' }}
                    src={b3h ? '/brand3h.png' : '/brand3.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB4h(true);
                  }}
                  onMouseLeave={() => setB4h(false)}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: '14vw', height: 'auto' }}
                    src={b4h ? '/brand4h.png' : '/brand4.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB5h(true);
                  }}
                  onMouseLeave={() => setB5h(false)}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: '14vw', height: 'auto' }}
                    src={b5h ? '/brand5h.png' : '/brand5.png'}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* CONTAINER 2  */}
        {/* CONTAINER 8  */}
        <motion.div
          ref={ref1}
          initial={{ x: -30, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={control1}
          className={styles.contentContainer}>
          {!isMObile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt='bg'
                  height={896}
                  width={1920}
                  src={'/line2.png'}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
              width: '79vw',
            }}>
            <div
              className={styles.MqCont}
              style={{
                gap: '5vw',
              }}>
              <div>
                {' '}
                <div
                  className={styles.sectionHeadings}
                  style={{
                    lineHeight: '4vw',
                    fontSize: '6vw',
                    marginBottom: '2vw',
                  }}>
                  <span style={{ fontWeight: '200' }}>MQ</span>
                  <span>&nbsp;Services</span>
                </div>
                <div className={styles.MqDesc}>
                  We offer a range of services to address all your messaging
                  {!isMObile && <br />} and queuing requirements.Our team of
                  seasoned
                  {!isMObile && <br />} professionals excels in delivering
                  top-notch solutions to
                  {!isMObile && <br />} enhance the reliability, scalability,
                  and performance of
                  {!isMObile && <br />} your MQ systems”
                </div>
              </div>
              {/* Featured Item  */}
              <div
                style={{
                  marginTop: isMObile ? '3vw' : '-6vw',
                }}
                className={styles.featuredItem}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1vw',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    style={{ width: isMObile ? '10vw' : '3vw', height: 'auto' }}
                    src={'/sericon1.png'}
                  />
                </div>
                <div className={styles.serviceHeading2}>
                  <span style={{ fontWeight: 'lighter' }}>Assessments</span>
                  <span>
                    {' '}
                    & <br />
                    <span style={{ color: colors.primary }}>Advisory</span>{' '}
                    Roles
                  </span>
                </div>
                <div className={styles.servieText}>
                  Assessments of existing and planned environments based on
                  <br /> tool best practices and years of industry expertise. We
                  assess
                  <br /> your environment on client connectivity, application
                  code, best
                  <br />
                  practices, and current design/development concepts including
                  <br />
                  agile and continuous integration.
                </div>
              </div>
            </div>

            <div>
              <div
                className={styles.flexRowMin}
                style={{
                  display: isMObile ? 'block' : 'flex',
                  gap: '2vw',
                  marginTop: isMObile ? '3vw' : '0',
                  // flexDirection: "column",
                }}>
                <div className={styles.featuredItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      style={{
                        width: isMObile ? '10vw' : '3vw',
                        height: 'auto',
                      }}
                      src={'/sericon2.png'}
                    />
                  </div>
                  <div className={styles.serviceHeading2}>
                    <span style={{ color: colors.primary }}>Consulting</span> &{' '}
                    <br />{' '}
                    <span style={{ fontWeight: 'lighter' }}>
                      {' '}
                      Troubleshooting
                    </span>
                  </div>
                  <div className={styles.servieText}>
                    Immediate access to Senior MQ Expertise. We have MQ experts
                    on hand to troubleshoot production issues or to consult you
                    on your environment.
                  </div>
                </div>
                <div
                  style={{
                    marginTop: isMObile ? '2vw' : '0',
                    marginBottom: isMObile ? '2vw' : '0',
                  }}
                  className={styles.featuredItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      style={{
                        width: isMObile ? '10vw' : '3vw',
                        height: 'auto',
                      }}
                      src={'/sericon3.png'}
                    />
                  </div>
                  <div
                    style={{ color: colors.primary }}
                    className={styles.serviceHeading2}>
                    Support
                  </div>
                  <div className={styles.servieText}>
                    Operation and Sustainment of your environment. We provide
                    customized solutions to supply you with the support you
                    need. Including Service Level Agreements, Response and
                    Resolution Times, and dedicated support specialists.
                  </div>
                </div>
                <div className={styles.featuredItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      style={{
                        width: isMObile ? '10vw' : '3vw',
                        height: 'auto',
                      }}
                      src={'/sericon4.png'}
                    />
                  </div>
                  <div className={styles.serviceHeading2}>
                    <span style={{ color: colors.primary }}>Training</span> &{' '}
                    <br />{' '}
                    <span style={{ fontWeight: 'lighter' }}>Mentorship</span>
                  </div>
                  <div className={styles.servieText}>
                    We provide training, coaching, and advisory on all Messaging
                    and Queuing toolsets. Our goal is to enable your team.
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.amongContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
              <div>
                <div
                  className={`${styles.txtCenter} ${styles.sectionHeadings}`}>
                  <span style={{ color: colors.secondary }}>Among </span>{' '}
                  <span style={{ fontWeight: 'normal' }}>The</span> Best
                </div>
                <div className={styles.servieText}>
                  Ace8 has helped the World&apos;s premiere companies reach
                  exceptional outcomes
                </div>
              </div>
              <div style={{ display: isMObile ? 'block' : 'flex', gap: '2vw' }}>
                <div className={styles.amongContainer}>
                  <Link
                    href={{
                      pathname: `/stories/${stories[0].id}`,
                      query: {
                        content: stories[0].content,
                        title: stories[0].title,
                        user: stories[0].userImage,
                        image: stories[0].image,
                      },
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={'/story11.png'}
                    />
                  </Link>
                </div>
                <div className={styles.amongContainer}>
                  <Link
                    href={{
                      pathname: `/stories/${stories[1].id}`,
                      query: {
                        content: stories[1].content,
                        title: stories[1].title,
                        user: stories[1].userImage,
                        image: stories[1].image,
                      },
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={'/story22.png'}
                    />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTAINER 4  */}
        <motion.div
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={control2}
          className={styles.contentContainer}>
          {!isMObile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt='bg'
                  height={896}
                  width={1920}
                  src={'/line3.png'}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              top: '-2vw',
            }}>
            <div
              style={{
                fontSize: isMObile ? '7vw' : '2.2vw',
                fontWeight: 'bold',
                marginTop: isMObile ? '3vw' : '0',
              }}>
              Ace8&apos;s
            </div>
            <div className={styles.card}>FULL STACK</div>
            <div className={styles.headinglg}>Capabilities</div>
            <div
              style={{
                fontSize: isMObile ? '3vw' : '1vw',
                lineHeight: isMObile ? '4vw' : '',
              }}>
              AceMQ is a subsidiary of a larger, highly specialized full-stack
              services company,
              <span
                style={{
                  border: `.1vw solid ${colors.secondary}`,
                  borderRadius: '.3vw',
                  padding: '.1vw',
                }}>
                Ace8,
              </span>{' '}
              therefore we understand how your Message Queing tool fits into
              your environment as a whole and thus we can advise and support you
              beyond the scope of your tool of choice.
            </div>
            <div
              // style={{ backgroundColor: "red" }}
              className={styles.domainsContainer}>
              <div className={styles.servicesContainer}>
                <div
                  style={{
                    position: 'relative',
                    marginTop: isMObile ? '0vw' : '8vw',
                  }}
                  className={styles.serviceItem}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1vw',
                      height: 'auto',
                    }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={108}
                      width={118}
                      src={'/1icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      1
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Advanced Architectures
                    <br />
                    <span style={{ color: colors.secondary }}>(AceEA)</span>
                  </div>
                  <div className={styles.servieText}>
                    Our team of experts excels in designing and implementing
                    advanced technology enterprise architectures, ensuring your
                    systems are not just up to date, but ahead of the curve.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={108}
                      width={118}
                      src={'/exp1.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      2
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Messaging Queuing
                    <span style={{ color: colors.secondary }}> (AceMQ)</span>
                  </div>
                  <div className={styles.servieText}>
                    Seamless communication is the backbone of any successful
                    enterprise. Ace8 specializes in crafting robust messaging
                    queuing solutions to optimize your data flow and enhance
                    collaboration.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/3icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      3
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    DevSecOps
                    <br />
                    <span style={{ color: colors.secondary }}>(AceDSO)</span>
                  </div>
                  <div className={styles.servieText}>
                    Security is at the core of everything we do. With our
                    DevSecOps practices, we seamlessly integrate security into
                    the development process, providing you with a robust and
                    secure foundation.
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    marginTop: isMObile ? '4vw' : '8vw',
                  }}
                  className={styles.serviceItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/4icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      4
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Cloud-Native
                    <br />{' '}
                    <span style={{ color: colors.secondary }}>(AceCloud)</span>
                  </div>
                  <div className={styles.servieText}>
                    Ace8 pioneers Cloud-Native solutions, leveraging the power
                    of the cloud to enhance scalability, flexibility, and
                    efficiency. Transform your business operations with our
                    expert cloud services.
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: '-4VW',
                  alignSelf: 'center',
                }}>
                <Image
                  alt='bg'
                  height={896}
                  width={1920}
                  style={{
                    width: isMObile ? '50vw' : '30vw',
                    height: 'auto',
                  }}
                  className={styles.lorgeLogo}
                  src={'/largeLogo.png'}
                />
              </div>
              <div className={styles.servicesContainer}>
                <div
                  style={{
                    position: 'relative',
                    // bottom: isMObile ? "0vw" : "8vw",
                  }}
                  className={styles.serviceItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/5icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      5
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Extreme Automation <br />
                    <span style={{ color: colors.secondary }}>
                      (AceAutomate)
                    </span>
                  </div>
                  <div className={styles.servieText}>
                    Efficiency is key. Ace8 excels in Extreme Automation,
                    optimizing your workflows and processes, allowing your
                    business to operate at maximum productivity.
                  </div>
                </div>
                <div
                  style={{ marginTop: isMObile ? '0' : '8vw' }}
                  className={`${styles.serviceItem} ${styles.margint1}`}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/6icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      6
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Data Management and Solutions
                    <br />{' '}
                    <span style={{ color: colors.secondary }}>(AceData)</span>
                  </div>
                  <div className={styles.servieText}>
                    Unlock the full potential of your data with Ace8&apos;s
                    comprehensive Data Management and Solutions. From storage to
                    analytics, we ensure your data is a valuable asset, not a
                    challenge.
                  </div>
                </div>
                <div
                  style={{ marginTop: isMObile ? '0' : '8vw' }}
                  className={`${styles.serviceItem} ${styles.margint2}`}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/7icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      7
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Support and Incident Management
                    <br />{' '}
                    <span style={{ color: colors.secondary }}>
                      (AceFortify)
                    </span>
                  </div>
                  <div className={styles.servieText}>
                    Our dedicated support and incident management services
                    guarantee that your systems remain operational, minimizing
                    downtime and ensuring a seamless experience for your users.
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    // bottom: isMObile ? "0vw" : "8vw",
                  }}
                  className={styles.serviceItem}>
                  <div style={{ display: 'flex', gap: '1vw' }}>
                    {' '}
                    <Image
                      className={styles.StackImage}
                      alt='bg'
                      height={896}
                      width={1920}
                      // style={{ width: "5vw", height: "auto" }}
                      src={'/8icon.png'}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}>
                      8
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Microservices/Code/ <br /> Development
                    <br />
                    <span style={{ color: colors.secondary }}>(AceMS)</span>
                  </div>
                  <div className={styles.servieText}>
                    Agility with our Microservices/Code/Development expertise.
                    Ace8 empowers you to build and scale applications with ease,
                    fostering innovation and rapid development cycles.
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btnSecondary}>
              {' '}
              <Link href={'/MqServices'}>Ace8&apos;s Services</Link>
            </button>
            {/* Card Large */}
            <div
              className={styles.devSection}
              style={{
                display: isMObile ? 'block' : 'flex',
                justifyContent: 'space-between',
                height: isMObile ? 'auto' : '25vw',
                border: `.1vw solid ${colors.secondary}`,
                borderRadius: '1vw',
                marginTop: '5.5vw',

                width: isMObile ? '90vw' : '79vw',
              }}>
              <div
                style={{ gap: 0 }}
                className={styles.devContentContainer}>
                <div className={styles.serviceHeading}>
                  <span style={{ color: colors.secondary }}>RabbitMQ </span>{' '}
                  <span style={{ fontWeight: 'lighter' }}>Enterprise</span>{' '}
                  Support
                </div>
                <div
                  style={{
                    fontSize: isMObile ? '3vw' : '2.1vw',
                    fontWeight: 'bold',
                    width: '40vw',
                  }}>
                  How we{' '}
                  <span style={{ fontWeight: 'lighter' }}>
                    Saved Millions <br />
                  </span>{' '}
                  <span style={{ color: colors.secondary }}>Downtime </span> in
                  for a <span style={{ color: colors.secondary }}>Global </span>{' '}
                  <span style={{ fontWeight: 'lighter' }}>Retail Giant</span>
                </div>
                {isMObile && (
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.cardImg}
                      src={'/loop.png'}
                    />
                  </div>
                )}
                <div className={styles.servieText}>
                  Learn how AceMQ&apos;s RabbitMQ Enterprise support saved a
                  global Retail Giant millions of dollars in downtime, while
                  saving them thousands in hiring costs.
                </div>
                <button
                  style={{
                    alignSelf: isMObile ? 'center' : 'self-start',
                    marginTop: '2vw',
                  }}
                  className={styles.btnSecondary}>
                  Learn More
                </button>
              </div>
              {!isMObile && (
                <div>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    className={styles.cardImg}
                    src={'/loop.png'}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* CONTAINER 6 */}
        <motion.div
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={control3}
          transition={{ duration: 1 }}
          style={{
            alignItems: isMObile ? 'center' : 'normal',
            display: 'flex',
            flexDirection: isMObile ? 'column' : 'unset',
            alignSelf: 'center',
            marginLeft: '2vw',
            // backgroundColor: "red",
            // width: "99vw",
          }}
          className={styles.contentContainer}>
          {!isMObile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  style={{ position: 'relative', zIndex: 1 }}
                  className={styles.lineStyles}
                  alt='bg'
                  height={896}
                  width={1920}
                  src={'/line4.png'}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
              width: '79vw',
            }}>
            <div
              style={{
                fontSize: isMObile ? '5vw' : '3vw',
                fontWeight: 'bold',
                lineHeight: '4vw',
              }}>
              <span>
                Technologies
                <br />
              </span>
            </div>
            <div className={styles.techContainer}>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}>
                <motion.div
                  transition={{ duration: 0.5 }}
                  initial={{ y: 0 }}
                  animate={Box1 ? { y: 7 } : { y: 0 }}>
                  <Image
                    alt='rabbitmqr'
                    width={158}
                    height={152}
                    className={styles.rabbitImg}
                    src={'/rabit.png'}
                    onMouseEnter={() => setBox1(true)}
                    onMouseLeave={() => setBox1(false)}
                  />
                </motion.div>
                <motion.div
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box1 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                  className={styles.techHeading}>
                  RabbitMQ
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '6.5vw',
                }}>
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={Box2 ? { y: 7 } : { y: 0 }}
                  onMouseEnter={() => {
                    setBox2(true);
                  }}
                  onMouseLeave={() => {
                    setBox2(false);
                  }}>
                  <Image
                    alt='awssqs'
                    width={158}
                    height={152}
                    src={'/AWSA.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    transition: 'opacity 0.5s ease',
                    opacity: Box2 ? 1 : 0,
                  }}>
                  AWS SQS
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}>
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={Box3 ? { y: 7 } : { y: 0 }}
                  onMouseEnter={() => {
                    setBox3(true);
                  }}
                  onMouseLeave={() => {
                    setBox3(false);
                  }}>
                  <Image
                    alt='pubsub'
                    width={158}
                    height={152}
                    src={'/GooglePub.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box3 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                  Google <br />
                  PubSub
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '6.5vw',
                }}>
                <motion.div
                  animate={Box4 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox4(true);
                  }}
                  onMouseLeave={() => {
                    setBox4(false);
                  }}>
                  <Image
                    alt='pulsar'
                    width={158}
                    height={152}
                    src={'/apatch.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box4 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                  Apache <br />
                  Pulsar
                </motion.div>
              </div>
            </div>
            <div
              style={{
                marginTop: 0,
                alignSelf: 'flex-end',
                marginRight: '5vw',
              }}
              className={styles.techContainer}>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  // marginTop: "6.5vw",
                }}>
                <motion.div
                  animate={Box5 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox5(true);
                  }}
                  onMouseLeave={() => {
                    setBox5(false);
                  }}>
                  <Image
                    alt='Kafka'
                    width={158}
                    height={152}
                    src={'/kaf.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box5 ? 1 : 0,

                    transition: 'opacity 0.5s ease',
                  }}>
                  Kafka
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '5vw',
                }}>
                <motion.div
                  animate={Box6 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox6(true);
                  }}
                  onMouseLeave={() => {
                    setBox6(false);
                  }}>
                  <Image
                    alt='ibm'
                    width={158}
                    height={152}
                    src={'/IBMM.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box6 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                  IBM <br />
                  ActiveMQ
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  // marginTop: "6.5vw",
                }}>
                <motion.div
                  animate={Box7 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox7(true);
                  }}
                  onMouseLeave={() => {
                    setBox7(false);
                  }}>
                  <Image
                    alt='awss'
                    width={158}
                    height={152}
                    src={'/awssim.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box7 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                  AWS
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '5vw',
                }}>
                <motion.div
                  animate={Box8 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox8(true);
                  }}
                  onMouseLeave={() => {
                    setBox8(false);
                  }}>
                  <Image
                    alt='others'
                    width={158}
                    height={152}
                    src={'/oters.png'}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    fontWeight: 'bold',
                    marginTop: '1.5vw',
                    opacity: Box8 ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                  Others
                </motion.div>
              </div>
            </div>
            {!isMObile && (
              <Image
                alt='bg'
                height={896}
                width={1920}
                draggable={false}
                className={styles.bgEarth}
                src={'/bgEarth(2).png'}
              />
            )}

            <div
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'relative',
                left: '-7vw',
                width: '87vw',
                display: isMObile ? 'block' : 'flex',
                height: 'auto',
              }}
              className={styles.devSection}>
              <div

              // className={styles.devContentContainer}
              >
                <div
                  className={styles.h3}
                  style={{ fontSize: isMObile ? '' : '2.2vw' }}>
                  Strategically Aligned <br /> With{' '}
                  <span style={{ color: colors.secondary }}>
                    {' '}
                    Industry Leaders
                  </span>
                </div>
              </div>
              {!isMObile && (
                <>
                  <div>
                    <Image
                      style={{ width: '6vw', height: 'auto' }}
                      alt='bg'
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={'/aws.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/vmware.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/rabbitmq.png'}
                    />
                  </div>

                  <div>
                    <Image
                      alt='bg'
                      height={95}
                      width={348}
                      className={styles.indImage}
                      src={'/broadcom.png'}
                    />
                  </div>
                </>
              )}
              {isMObile && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5vw',
                    marginTop: '3vw',
                  }}>
                  <div>
                    <Image
                      style={{
                        width: isMObile ? '12vw' : '6vw',
                        height: 'auto',
                      }}
                      alt='bg'
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={'/aws.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/vmware.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/rabbitmq.png'}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                height: isMObile ? 'auto' : '25vw',
                borderRadius: '1vw',
                position: 'relative',
                left: '-7vw',
                margin: 0,
                width: '87vw',
                display: isMObile ? 'block' : 'flex',
                marginBottom: '2vw',
              }}
              className={styles.devSection}>
              {' '}
              <div>
                <Image
                  alt='bg'
                  height={896}
                  width={1920}
                  draggable={false}
                  className={styles.aceCardImg}
                  src={'/AceTile.png'}
                  style={{ zIndex: '2' }}
                />
              </div>
              <div
                style={{ margin: 0 }}
                className={styles.devContentContainer}>
                <div className={styles.h3}>
                  <span style={{ fontWeight: 'lighter', width: '87vw' }}>
                    Who
                  </span>{' '}
                  We
                  <span style={{ color: colors.secondary }}> Are</span>
                </div>
                <div className={styles.servieText}>
                  At{' '}
                  <span
                    style={{
                      borderWidth: '.1vw',
                      padding: '.2vw',
                      borderRadius: '.5vw',
                      fontWeight: 'bold',
                      color: 'rgba(255, 102, 0, 1)',
                      borderColor: 'rgba(255, 102, 0, 1)',
                    }}>
                    AceMQ
                  </span>{' '}
                  we have assembled a team of product experts and architectural
                  experts with a combined wealth of experience. This enables us
                  to offer the most comprehensive Message Queuing Services and
                  Support in the industry. Our goal is to ensure that our
                  clients achieve optimal performance, efficiency, and
                  reliability in their messaging queuing systems and ultimately
                  achieve their business goals.
                </div>
              </div>
            </div>
            {/* <ContactForm
              maincontainerStyles={{ left: '-4vw', width: '85vw' }}
              containerStyles={{ width: '85vw' }}
            /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
