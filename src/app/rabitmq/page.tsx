/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './rabitmq.module.css';
import { colors } from '../../utils/Theme';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { ContactForm } from '@/components/contactForm/ContactForm';
import CardComp from '@/components/cardComp/CardComp';
import { useInView } from 'react-intersection-observer';
// import Link from "next/link";

const stories = [
  {
    id: 4,
    title: 'Real-Time Payment Processor Production Issues',
    userImage: '/ps4.png',
    content:
      'Remediating performance and scaling issues with a RabbitMQ cluster in production',
    image: '/st4.png',
  },
  {
    id: 5,
    title: 'RabbitMQ in Kubernetes',
    userImage: '/ps5.png',
    content: 'Configuring RabbitMQ in Kubernetes for success',
    image: '/st5.png',
  },
];
const Aboutpage = () => {
  const [button1, setbutton1] = useState(false);
  const [button2, setbutton2] = useState(false);
  const [button3, setbutton3] = useState(false);
  const [button4, setbutton4] = useState(false);
  const [circle, setcircle] = useState(false);
  const [circle4, setcircle4] = useState(false);
  const [circle3, setcircle3] = useState(false);
  const [circle2, setcircle2] = useState(false);
  const [circle10, setcircle10] = useState(false);
  const [circle11, setcircle11] = useState(false);
  const [circle12, setcircle12] = useState(false);
  const [circle13, setcircle13] = useState(false);
  const [circle14, setcircle14] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  const [b6h, setB6h] = useState(false);

  // Animation Controls
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();

  //  Animation Refs
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

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

  if (inView4) {
    control4.start({ opacity: 1, x: 0 });
  }

  if (inView5) {
    control5.start({ x: 0, opacity: 1 });
  }
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== undefined && window.innerWidth < 870) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (typeof window !== undefined) {
      handleSize();
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  function scrollToContactForm() {
    // useEffect(() => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      if (typeof window !== undefined) {
        const offset = -100; // Adjust this value as needed
        window.scrollBy({ top: offset, behavior: 'smooth' });
      }
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
    // }, []);
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
        alignItems: 'center',
      }}>
      <div className={styles.containerImg}>
        <Image
          alt='abt'
          height={896}
          width={1920}
          style={{
            width: '99vw',
            height: 'auto',
            position: 'absolute',
            zIndex: 11,
            // marginTop: "5vw",
            top: '-6vw',
          }}
          // src={"/rimg.png"}
          src={'/rabbit.jpg'}
        />{' '}
      </div>

      <motion.div
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={control}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div className={styles.trust}>
          <div
            className={styles.trustedCard}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
            }}>
            <div className={styles.h3}>
              Trusted By The{' '}
              <span style={{ color: colors.secondary }}>Brands Globally</span>
            </div>

            <div
              style={{
                display: 'flex',
                width: '100%',
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
                  style={{ width: '14vw', height: 'auto' }}
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
                  style={{ width: '10vw', height: 'auto' }}
                  src={b3h ? '/brand3h.png' : '/brand3.png'}
                />
              </div>
              <div
                onMouseEnter={() => setB6h(true)}
                onMouseLeave={() => setB6h(false)}>
                <Image
                  alt='bg'
                  height={896}
                  width={1920}
                  style={{ width: '10vw', height: 'auto' }}
                  src={b6h ? '/MS111111.png' : '/brand7.png'}
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
                  style={{ width: '10vw', height: 'auto' }}
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
                  style={{ width: '10vw', height: 'auto' }}
                  src={b5h ? '/brand5h.png' : '/brand5.png'}
                />
              </div>
            </div>
          </div>
          {/* <Image
            alt="trust"
            height={584}
            width={3200}
            style={{ width: isMobile ? "90vw" : "80vw", height: "auto" }}
            src={"/trust.png"}
          /> */}
        </div>

        <div
          className={styles.trust}
          style={{ marginTop: '5vw' }}>
          <Image
            alt='rbt'
            height={760}
            width={2740}
            style={{ width: isMobile ? '80vw' : '70vw', height: 'auto' }}
            src={'/rbt.png'}
          />
        </div>

        <Link href={'https://www.rabbitmq.com/commercial-offerings'}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            className={styles.trust}
            style={{ marginTop: '2vw' }}>
            <Image
              alt='crcletxt'
              height={2974}
              width={1291}
              style={{ width: '75vw', height: 'auto' }}
              src={'/crcletxt.png'}
            />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        ref={ref1}
        initial={{ x: -50, opacity: 0 }}
        animate={control1}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          width: '87vw',
          justifyContent: 'space-around',
          flexDirection: isMobile ? 'column' : 'row',
          alignSelf: 'center',
          marginTop: '8vw',
          position: isMobile ? 'static' : 'relative',
          zIndex: 2,
          marginBottom: isMobile ? '' : '431vw',
          gap: isMobile ? '12vw' : '0vw',
          alignItems: isMobile ? 'center' : 'normal',
        }}>
        <motion.div
          className={styles.setShadow}
          animate={{
            height:
              button1 && isMobile
                ? '85vw'
                : !button1 && isMobile
                ? '43vw'
                : button1
                ? '36vw'
                : '19vw',
          }}
          style={{
            width: isMobile ? '80vw' : '20vw',
            borderRadius: isMobile ? '2vw' : '1vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#0d1117',
            position: 'relative',
          }}>
          <div style={{ marginTop: isMobile ? '-6.5vw' : '-3.2vw' }}>
            <Image
              alt='sett'
              height={317}
              width={346}
              style={{ width: isMobile ? '16vw' : '8vw', height: 'auto' }}
              src={'/sett.png'}
            />
          </div>
          <button
            onClick={() => {
              setbutton1(!button1);
              console.log('OK');
            }}
            style={{
              bottom: '0',
              position: 'absolute',
              marginBottom: isMobile ? '-3vw' : '-1vw',
            }}>
            <Image
              alt='down'
              height={46}
              width={46}
              style={{
                width: isMobile ? '6vw' : '2.5vw',
                height: isMobile ? '6vw' : '2.5vw',
              }}
              src={button1 ? '/up.png' : '/down.png'}
            />
          </button>

          <div
            style={{
              fontSize: isMobile ? '4vw' : '1.8vw',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: '1.5vw',
            }}>
            Troubleshooting
          </div>
          <motion.div
            animate={{ marginTop: button1 ? '.5vw' : '1.2vw' }}
            style={{
              fontSize: isMobile ? '3vw' : '1vw',
              color: '#fff',
              textAlign: 'center',
              fontWeight: '300',
            }}>
            Our Consultants have seen it all.
            <br /> With years of RabbitMQ product and
            <br />
            environment support our engineers
            <br /> our prepared to solve your RabbitMQ <br />
            challenges.
          </motion.div>

          <motion.div style={{ overflow: 'hidden' }}>
            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: isMobile ? '3.5vw' : '2.5vw',
                lineHeight: isMobile ? '4vw' : '1.8vw',
              }}>
              Production Outages and <br />
              Issues
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Problem Resolution and RCA to
              <br /> determine how to prevent reoccurring
              <br /> issues
            </div>

            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                marginTop: isMobile ? '3.5vw' : '2.5vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
              }}>
              Performance Issues
            </div>

            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Comprehensive monitoring and testing
              <br /> to identify performance blockers
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.setShadow}
          animate={{
            height:
              button2 && isMobile
                ? '160vw'
                : !button2 && isMobile
                ? '58vw'
                : button2
                ? '70vw'
                : '25vw',
          }}
          style={{
            width: isMobile ? '80vw' : '20vw',
            borderRadius: isMobile ? '2vw' : '1vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#0d1117',
            position: 'relative',
          }}>
          <div style={{ marginTop: isMobile ? '-7.5vw' : '-4.2vw' }}>
            <Image
              alt='sett'
              height={317}
              width={346}
              style={{ width: isMobile ? '16vw' : '8vw', height: 'auto' }}
              src={'/consult.png'}
            />
          </div>
          <button
            onClick={() => {
              setbutton2(!button2);
              console.log('OK');
            }}
            style={{
              bottom: '0',
              position: 'absolute',
              marginBottom: isMobile ? '-3vw' : '-1vw',
            }}>
            <Image
              alt='down'
              height={46}
              width={46}
              style={{
                width: isMobile ? '6vw' : '2.5vw',
                height: isMobile ? '6vw' : '2.5vw',
              }}
              src={button2 ? '/up.png' : '/down.png'}
            />
          </button>

          <div
            style={{
              fontSize: isMobile ? '4vw' : '1.8vw',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: '1.5vw',
              textAlign: 'center',
              lineHeight: isMobile ? '4.5vw' : '2.4vw',
            }}>
            <span style={{ fontWeight: button2 ? 'bold' : '200' }}>
              Consulting
            </span>{' '}
            &<br />
            Assessment
          </div>
          <motion.div
            // animate={{ marginTop: button1 ? ".5vw" : "1.2vw" }}
            style={{
              fontSize: isMobile ? '3vw' : '1vw',
              color: '#fff',
              textAlign: 'center',
              fontWeight: '300',
              marginTop: isMobile ? '2.5vw' : '1.5vw',
            }}>
            Coming equip with extensive
            <br /> experience with a multitude of
            <br />
            environments and RabbitMQ
            <br /> installations, our consultants can <br />
            ensure that your environment is in
            <br /> good health and provide
            <br /> recommendations to reach a best
            <br /> practice state.
          </motion.div>

          <motion.div style={{ overflow: 'hidden' }}>
            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: isMobile ? '2vw' : '2.5vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Assessments
            </div>
            <div
              style={{
                fontSize: isMobile ? '2.9vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                marginTop: isMobile ? '2vw' : '0vw',
                lineHeight: isMobile ? '4vw' : '1.5vw',
              }}>
              Perform a comprehensive assessment <br />
              of your environment or planned
              <br />
              environment including an Architecture,
              <br /> Code, Configuration, and Best Practice
              <br /> Adherence review
            </div>

            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Performance Optimization
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Tune RabbitMQ to meet Client’s
              <br /> Requirements around Sizing, Security,
              <br /> Scale, Setup,Architecture, and Load
              <br /> balancing in accordance with RabbitMQ
              <br /> Best Practices
            </div>

            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Migrations and Upgrades
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',

                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Migrations on to RabbitMQ or off.
              <br /> Current Version Upgrades
            </div>

            <div
              style={{
                fontSize: isMobile ? '3.2vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Mentorship and Knowledge
              <br /> Transfer
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',

                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Document all findings and
              <br /> recommendations and empower your
              <br /> team to reach future state and maintain
              <br /> and operate your environment
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.setShadow}
          animate={{
            height:
              button3 && isMobile
                ? '125vw'
                : !button3 && isMobile
                ? '50vw'
                : button3
                ? '53vw'
                : '22vw',
          }}
          style={{
            width: isMobile ? '80vw' : '20vw',
            borderRadius: isMobile ? '2vw' : '1vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#0d1117',
          }}>
          <div style={{ marginTop: isMobile ? '-7.5vw' : '-3.2vw' }}>
            <Image
              alt='suppor'
              height={317}
              width={346}
              style={{ width: isMobile ? '16vw' : '8vw', height: 'auto' }}
              src={'/suppor.png'}
            />
          </div>
          <button
            onClick={() => {
              setbutton3(!button3);
              console.log('OK');
            }}
            style={{
              bottom: '0',
              position: 'absolute',
              marginBottom: isMobile ? '-3vw' : '-1vw',
            }}>
            <Image
              alt='down'
              height={46}
              width={46}
              style={{
                width: isMobile ? '6vw' : '2.5vw',
                height: isMobile ? '6vw' : '2.5vw',
              }}
              src={button3 ? '/up.png' : '/down.png'}
            />
          </button>

          <div
            style={{
              fontSize: isMobile ? '4vw' : '1.8vw',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: '1.5vw',
            }}>
            Support Services
          </div>
          <motion.div
            animate={{ marginTop: isMobile ? '2vw' : '1.2vw' }}
            style={{
              fontSize: isMobile ? '3vw' : '1vw',
              color: '#fff',
              textAlign: 'center',
              fontWeight: '300',
            }}>
            Operation and Sustainment of your
            <br /> environment. We provide
            <br /> customized solutions to supply you <br /> with the support
            you need. Including
            <br /> Service Level Agreements,
            <br /> Response and Resolution Times,
            <br /> and dedicated support specialists.
          </motion.div>

          <motion.div style={{ overflow: 'hidden' }}>
            <div
              style={{
                fontSize: isMobile ? '3.5vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Comprehensive Support
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              A complete customized solution tailored
              <br /> to your environment and business
              <br /> demands. Includes troubleshooting,
              <br /> deployments, and operations and
              <br /> sustainment. Tied to dedicated
              <br /> resources and SLAs
            </div>

            <div
              style={{
                fontSize: isMobile ? '4vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: isMobile ? '4vw' : '2.2vw',
              }}>
              Commercial Support
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Support of RabbitMQ codebase
              <br /> including custom solutions as well as
              <br />
              proprietary patches, fixes, and general
              <br /> support.
            </div>

            <div
              style={{
                fontSize: isMobile ? '4vw' : '1.2vw',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#FB8817',
                marginTop: '2vw',
                lineHeight: '2.2vw',
              }}>
              Managed Service
            </div>
            <div
              style={{
                fontSize: isMobile ? '3vw' : '.9vw',
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: isMobile ? '4vw' : '1.5vw',
                marginTop: isMobile ? '2vw' : '0vw',
              }}>
              Managed solution of RabbitMQ
              <br /> environment and services
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.setShadow}
          style={{
            height: isMobile ? '50vw' : '20vw',
            width: isMobile ? '80vw' : '20vw',
            borderRadius: isMobile ? '2vw' : '1vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#0d1117',
            marginBottom: '4vw',
          }}>
          <div style={{ marginTop: isMobile ? '-7.5vw' : '-3.2vw' }}>
            <Image
              alt='trains'
              height={317}
              width={346}
              style={{ width: isMobile ? '16vw' : '8vw', height: 'auto' }}
              src={'/trains.png'}
            />
          </div>

          <div
            style={{
              fontSize: isMobile ? '4vw' : '1.8vw',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: isMobile ? '4vw' : '1.5vw',
            }}>
            Training & <br />
            Mentorship
          </div>
          <motion.div
            animate={{ marginTop: '1.2vw' }}
            style={{
              fontSize: isMobile ? '3vw' : '1vw',
              color: '#fff',
              textAlign: 'center',
              fontWeight: '300',
            }}>
            We provide training, coaching, and
            <br /> advisory on all Messaging and
            <br />
            Queuing toolsets. Our goal is to
            <br /> enable your team.
          </motion.div>
        </motion.div>
      </motion.div>
      <div
        style={{
          position: isMobile ? 'static' : 'absolute',
          marginTop: isMobile ? '0vw' : '162vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70vw',
        }}>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          className={styles.mtop}
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}>
          <div className={styles.among}>
            <span style={{ color: '#FF6600' }}>Among</span>{' '}
            <span style={{ fontWeight: '300' }}>The</span> Best
          </div>
          <div className={styles.amogDesc}>
            Ace8 has helped the World&apos;s premiere companies reach
            exceptional outcomes
          </div>

          <div
            style={{
              display: isMobile ? 'block' : 'flex',
              justifyContent: 'space-between',
              width: isMobile ? 'auto' : '70vw',
              alignSelf: 'center',
              marginTop: '3vw',
            }}>
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
                alt='cstmrstry'
                width={1352}
                height={850}
                src={'/story11.png'}
                style={{ width: isMobile ? '80vw' : '32vw', height: 'auto' }}
              />
            </Link>
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
              {' '}
              <Image
                alt='cstmrstry1'
                width={1352}
                height={850}
                src={'/story22.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '3vw' : '0vw',
                }}
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          animate={control3}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <div className={styles.capab}>
            Our <span style={{ fontWeight: '200' }}>Consulting</span>{' '}
            <span style={{ color: '#8FD5CC' }}>Capabilities</span>
          </div>
          <div className={styles.ConfiMain}>
            <div>
              <div className={styles.Seam}>
                <span style={{ fontWeight: '200' }}> Seamless</span> <br />
                <span style={{ color: '#8FD5CC' }}>Integration</span> and <br />
                Configuration
              </div>
              <div>
                <Image
                  alt='confi'
                  width={1558}
                  height={371}
                  src={'/confi.png'}
                  style={{
                    width: isMobile ? '80vw' : '35vw',
                    height: 'auto',
                    marginTop: isMobile ? '4vw' : '2vw',
                  }}
                />
              </div>
            </div>
            <div>
              <Image
                alt='code1'
                width={1334}
                height={1258}
                src={'/code1.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '5vw' : '0vw',
                }}
              />
            </div>
          </div>
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                marginTop: '3vw',
                height: '28vw',
              }}>
              <div className={styles.deploy}>
                <div className={styles.circleMain}>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle(true)}
                    onMouseLeave={() => setcircle(false)}>
                    <AnimatePresence>
                      {circle && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='image1'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/changemanage1.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='image2'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/changemanage.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                    }}>
                    Change
                    <br />
                    Management
                  </motion.div>
                </div>
                <div
                  className={styles.circleMain}
                  style={{}}>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle4(true)}
                    onMouseLeave={() => setcircle4(false)}>
                    <AnimatePresence>
                      {circle4 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='disaster1'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/qa1.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle4 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='disaster'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/qa.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle4 ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                    }}>
                    QA
                  </motion.div>
                </div>
              </div>
              <div className={styles.disaster}>
                <div>
                  <Image
                    alt='countcode'
                    width={1091}
                    height={828}
                    src={'/countcode.png'}
                    style={{ width: '50vw', height: 'auto' }}
                  />
                </div>
                <div className={styles.circleMain}>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle3(true)}
                    onMouseLeave={() => setcircle3(false)}>
                    <AnimatePresence>
                      {circle3 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='disaster1'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/disaster1.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle3 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='disaster'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/disaster.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle3 ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                    }}>
                    Disaster
                    <br />
                    Recovery
                  </motion.div>
                </div>
                <div>
                  <Image
                    alt='fault'
                    width={1486}
                    height={685}
                    src={'/fault.png'}
                    style={{ width: '70vw', height: 'auto' }}
                  />
                </div>
              </div>
              <div className={styles.FaultMain}>
                <div
                  className={styles.circleMain}
                  style={{}}>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle2(true)}
                    onMouseLeave={() => setcircle2(false)}>
                    <AnimatePresence>
                      {circle2 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='image1'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/deploy1.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle2 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}>
                          <Image
                            key='image2'
                            alt='changemanage'
                            width={222}
                            height={222}
                            src={'/deploy.png'}
                            style={{
                              width: '6vw',
                              height: '6vw',
                              position: 'absolute',
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: 'opacity 0.8s ease',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle2 ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                    }}>
                    Deployments
                  </motion.div>
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <>
              <div style={{ marginTop: '4vw' }}>
                <Image
                  alt='fault'
                  width={1486}
                  height={685}
                  src={'/fault.png'}
                  style={{ width: '80vw', height: 'auto' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: '2vw',
                  marginBottom: '2vw',
                }}>
                <div
                  style={{
                    height: '45vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <div className={styles.circleMain}>
                    <motion.div
                      className={styles.circlee}
                      onMouseEnter={() => setcircle(true)}
                      onMouseLeave={() => setcircle(false)}>
                      <AnimatePresence>
                        {circle && (
                          <motion.div
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='image1'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/changemanage1.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 1,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {!circle && (
                          <motion.div
                            transition={{ duration: 0.8 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='image2'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/changemanage.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                opacity: 1,
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className={styles.desc2}
                      style={{
                        opacity: circle ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                      }}>
                      Change
                      <br />
                      Management
                    </motion.div>
                  </div>

                  <div
                    className={styles.circleMain}
                    style={{}}>
                    <motion.div
                      className={styles.circlee}
                      onMouseEnter={() => setcircle4(true)}
                      onMouseLeave={() => setcircle4(false)}>
                      <AnimatePresence>
                        {circle4 && (
                          <motion.div
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='disaster1'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/qa1.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 1,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {!circle4 && (
                          <motion.div
                            transition={{ duration: 0.8 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='disaster'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/qa.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                opacity: 1,
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className={styles.desc2}
                      style={{
                        opacity: circle4 ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                      }}>
                      QA
                    </motion.div>
                  </div>
                </div>

                <div
                  style={{
                    height: '45vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <div className={styles.circleMain}>
                    <motion.div
                      className={styles.circlee}
                      onMouseEnter={() => setcircle3(true)}
                      onMouseLeave={() => setcircle3(false)}>
                      <AnimatePresence>
                        {circle3 && (
                          <motion.div
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='disaster1'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/disaster1.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 1,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {!circle3 && (
                          <motion.div
                            transition={{ duration: 0.8 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='disaster'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/disaster.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                opacity: 1,
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className={styles.desc2}
                      style={{
                        opacity: circle3 ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                      }}>
                      Disaster
                      <br />
                      Recovery
                    </motion.div>
                  </div>

                  <div
                    className={styles.circleMain}
                    style={{}}>
                    <motion.div
                      className={styles.circlee}
                      onMouseEnter={() => setcircle2(true)}
                      onMouseLeave={() => setcircle2(false)}>
                      <AnimatePresence>
                        {circle2 && (
                          <motion.div
                            transition={{ duration: 0.6 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='image1'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/deploy1.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: 1,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {!circle2 && (
                          <motion.div
                            transition={{ duration: 0.8 }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <Image
                              key='image2'
                              alt='changemanage'
                              width={222}
                              height={222}
                              src={'/deploy.png'}
                              style={{
                                width: '13vw',
                                height: '13vw',
                                position: 'absolute',
                                opacity: 1,
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.8s ease',
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className={styles.desc2}
                      style={{
                        opacity: circle2 ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                      }}>
                      Deployments
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  alt='countcode'
                  width={1091}
                  height={828}
                  src={'/countcode.png'}
                  style={{ width: '80vw', height: 'auto' }}
                />
              </div>
            </>
          )}
        </motion.div>
        <motion.div
          ref={ref4}
          animate={control4}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <div
            className={styles.among}
            style={{ lineHeight: isMobile ? '7vw' : '4vw' }}>
            Advanced <span style={{ fontWeight: '200' }}> Messaging</span>
            <br /> <span style={{ color: '#8FD5CC' }}>Patterns</span> and
            Optimization
          </div>
          <div
            className={styles.amogDesc}
            style={{
              lineHeight: isMobile ? '4vw' : '1.8vw',
              marginTop: isMobile ? '2vw' : '.8vw',
            }}>
            Unlock the full potential of RabbitMQ with our advanced messaging
            patterns and optimization techniques. We go beyond
            <br /> basic messaging functionality to help you build robust and
            scalable messaging architectures.
          </div>

          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: '2vw',
              width: isMobile ? 'auto' : '38vw',
              height: isMobile ? 'auto' : '30vw',
            }}>
            <div style={{ marginTop: '8vw', marginLeft: '1vw' }}>
              <div className={styles.circleMain1}>
                <motion.div
                  className={styles.circlee1}
                  onMouseEnter={() => setcircle10(true)}
                  onMouseLeave={() => setcircle10(false)}>
                  <AnimatePresence>
                    {circle10 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const1'
                          alt='const1'
                          width={222}
                          height={222}
                          src={'/channel1.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle10 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const'
                          alt='const'
                          width={222}
                          height={222}
                          src={'/channel.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc3}
                  style={{
                    opacity: circle10 ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}>
                  Channels
                </motion.div>
              </div>
              <div
                className={styles.circleMain1}
                style={{
                  marginTop: isMobile ? '4vw' : '2vw',
                  marginRight: '3.5vw',
                }}>
                <motion.div
                  className={styles.circlee1}
                  onMouseEnter={() => setcircle11(true)}
                  onMouseLeave={() => setcircle11(false)}>
                  <AnimatePresence>
                    {circle11 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const1'
                          alt='const1'
                          width={222}
                          height={222}
                          src={'/monitr1.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle11 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const'
                          alt='const'
                          width={222}
                          height={222}
                          src={'/monitr.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc3}
                  style={{
                    opacity: circle11 ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}>
                  Monitoring
                </motion.div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <div
                className={styles.circleMain1}
                style={{}}>
                <motion.div
                  className={styles.circlee1}
                  onMouseEnter={() => setcircle12(true)}
                  onMouseLeave={() => setcircle12(false)}>
                  <AnimatePresence>
                    {circle12 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const1'
                          alt='const1'
                          width={222}
                          height={222}
                          src={'/transfer1.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle12 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const'
                          alt='const'
                          width={222}
                          height={222}
                          src={'/transfer.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc3}
                  style={{
                    opacity: circle12 ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}>
                  Transformation
                </motion.div>
              </div>
              <div style={{}}>
                <Image
                  alt='msgPatrn'
                  width={632}
                  height={632}
                  src={'/msgPatrn.png'}
                  style={{
                    width: isMobile ? '30vw' : '15vw',
                    height: 'auto',
                    marginTop: '1.5vw',
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: '8vw', marginLeft: '1vw' }}>
              <div
                className={styles.circleMain1}
                style={{}}>
                <motion.div
                  className={styles.circlee1}
                  onMouseEnter={() => setcircle13(true)}
                  onMouseLeave={() => setcircle13(false)}>
                  <AnimatePresence>
                    {circle13 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const1'
                          alt='const1'
                          width={222}
                          height={222}
                          src={'/routing1.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle13 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const'
                          alt='const'
                          width={222}
                          height={222}
                          src={'/routing.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc3}
                  style={{
                    opacity: circle13 ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}>
                  Routing
                </motion.div>
              </div>
              <div
                className={styles.circleMain1}
                style={{
                  marginTop: isMobile ? '4vw' : '2vw',
                  marginLeft: '3.5vw',
                }}>
                <motion.div
                  className={styles.circlee1}
                  onMouseEnter={() => setcircle14(true)}
                  onMouseLeave={() => setcircle14(false)}>
                  <AnimatePresence>
                    {circle14 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const1'
                          alt='const1'
                          width={222}
                          height={222}
                          src={'/const1.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle14 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Image
                          key='const'
                          alt='const'
                          width={222}
                          height={222}
                          src={'/const.png'}
                          style={{
                            width: isMobile ? '15vw' : '7vw',
                            height: isMobile ? '15vw' : '7vw',
                            position: 'absolute',
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.8s ease',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc3}
                  style={{
                    opacity: circle14 ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}>
                  Construction
                </motion.div>
              </div>
            </div>
          </div>

          <div className={styles.mech}>
            <div>
              <Image
                alt='mechanism'
                width={1533}
                height={879}
                src={'/mechanism.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '2vw' : '0vw',
                }}
              />
            </div>
            <div>
              <Image
                alt='routescode'
                width={1466}
                height={842}
                src={'/routescode.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '4vw' : '0vw',
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref5}
          animate={control5}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <div
            className={styles.among}
            style={{
              lineHeight: isMobile ? '6vw' : '4.5vw',
              fontSize: isMobile ? '5vw' : '3vw',
            }}>
            <span style={{ color: '#FF6600' }}>Message Queue</span>{' '}
            <span style={{ fontWeight: '200' }}>Management</span>
            <br /> and Load Balancing
          </div>

          <div className={styles.optimMain}>
            <div>
              <Image
                alt='optimiz'
                width={1532}
                height={464}
                src={'/optimiz.png'}
                style={{
                  width: isMobile ? '80vw' : '40vw',
                  height: 'auto',
                  marginTop: isMobile ? '3vw' : '0vw',
                }}
              />
            </div>
            <div>
              <Image
                alt='rabbitIC'
                width={359}
                height={359}
                src={'/rabbitIC.png'}
                style={{ width: isMobile ? '20vw' : '9vw', height: 'auto' }}
              />
            </div>
          </div>
          <div className={styles.OverMain}>
            <div>
              <Image
                alt='overview'
                width={1244}
                height={882}
                src={'/overview.png'}
                style={{
                  width: isMobile ? '80vw' : '28vw',
                  height: 'auto',
                }}
              />
            </div>

            <div>
              <Image
                alt='enter'
                width={1549}
                height={723}
                src={'/enter.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '5vw' : '0vw',
                }}
              />
            </div>
          </div>

          <div
            className={styles.OverMain}
            style={{}}>
            <div>
              <Image
                alt='reliability'
                width={1563}
                height={719}
                src={'/reliability.png'}
                style={{ width: isMobile ? '80vw' : '32vw', height: 'auto' }}
              />
            </div>

            <div>
              <Image
                alt='overview2'
                width={1820}
                height={1014}
                src={'/overview2.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '3vw' : '0vw',
                }}
              />
            </div>
          </div>
          <div className={styles.OverMain}>
            <div>
              <Image
                alt='rbtcode'
                width={1454}
                height={1096}
                src={'/rbtcode.png'}
                style={{ width: isMobile ? '80vw' : '32vw', height: 'auto' }}
              />
            </div>

            <div>
              <Image
                alt='telementry'
                width={1534}
                height={791}
                src={'/telementry.png'}
                style={{
                  width: isMobile ? '80vw' : '32vw',
                  height: 'auto',
                  marginTop: isMobile ? '4vw' : '0vw',
                }}
              />
            </div>
          </div>

          <div style={{ alignSelf: 'center', marginTop: '5vw' }}>
            <Image
              alt='sla'
              width={2926}
              height={766}
              src={'/sla.png'}
              style={{ width: '70vw', height: 'auto' }}
            />
          </div>

          <div className={styles.among}>
            Key <span style={{ fontWeight: '200' }}>Support</span>{' '}
            <span style={{ color: '#8FD5CC' }}>Features:</span>
          </div>

          <div style={{ alignSelf: 'center', marginTop: '3vw' }}>
            <Image
              alt='round'
              width={3202}
              height={771}
              src={'/round.png'}
              style={{ width: '70vw', height: 'auto' }}
            />
          </div>

          <motion.button
            key={'id45'}
            onClick={() => scrollToContactForm()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            className={styles.button}>
            Learn More
          </motion.button>

          {isMobile ? (
            <div onClick={() => scrollToContactForm()}>
              <CardComp
                Heading='Unlock the True Potential of RabbitMQ in Your Enterprise.'
                Desc="Unlock the full power of RabbitMQ with AceMQ's expert services. Seamlessly integrate RabbitMQ into your environment for optimized performance. Our team ensures high availability and fault tolerance, sets up advanced messaging patterns, and fine-tunes configurations for optimal resource utilization. Experience risk-free upgrades, performance tuning, and world class support. Elevate your messaging architecture with AceMQ."
                btnText='Schedule a Free Consultation'
              />
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => scrollToContactForm()}
              style={{ alignSelf: 'center', marginTop: '5vw' }}>
              <Image
                alt='schedule'
                width={3230}
                height={1306}
                src={'/schedule.png'}
                style={{ width: '70vw', height: 'auto' }}
              />
            </motion.div>
          )}

          {/* <ContactForm
            id='contactForm'
            maincontainerStyles={{ marginTop: '12vw' }}
          /> */}
        </motion.div>
      </div>
    </div>
  );
};
export default Aboutpage;
