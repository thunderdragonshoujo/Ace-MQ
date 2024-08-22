/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './support.module.css';
import { colors } from '../../utils/Theme';
import { motion, useAnimation } from 'framer-motion';
import CardComp from '@/components/cardComp/CardComp';
import { ContactForm } from '@/components/contactForm/ContactForm';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Fipspage = () => {
  const [Box1, setBox1] = useState(false);
  const [Box2, setBox2] = useState(false);
  const [Box3, setBox3] = useState(false);
  const [Box4, setBox4] = useState(false);
  const [Box5, setBox5] = useState(false);
  const [Box6, setBox6] = useState(false);
  const [Box7, setBox7] = useState(false);
  const [Box8, setBox8] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  // Animation Controls
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  //  Animation Refs
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
    control2.start({ y: 0, x: 0, opacity: 1 });
  }

  if (inView3) {
    control3.start({ x: 0, opacity: 1 });
  }

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== undefined && window.innerWidth < 870) {
        setisMobile(true);
      } else {
        setisMobile(false);
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
        justifyContent: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          width: '99vw',
          overflow: 'hidden',
          backgroundImage: "url('/header24.png')",
          backgroundSize: 'cover',
          alignItems: 'center',
          justifyContent: 'center',
          height: '36vw',
        }}>
        <Image
          alt='abt'
          height={896}
          width={1920}
          className={styles.containerImg}
          src={'/support1.png'}
        />{' '}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',

          width: '70vw',
        }}>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '4vw',
          }}
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          animate={control}
          transition={{ duration: 1 }}>
          <div
            style={{
              width: isMobile ? '80vw' : '66vw',
              alignSelf: 'center',
              marginTop: '2vw',
            }}
            className={styles.lgText}>
            At
            <span
              style={{
                backgroundColor: colors.secondary,
                padding: '.3vw',
                borderRadius: '1vw',
                color: '#000',
                fontWeight: 'bold',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '.3vw',
                marginLeft: '.3vw',
              }}>
              {' '}
              AceMQ{' '}
            </span>{' '}
            we are proud to offer 24/7 world-wide comprehensive SLA-based
            support for RabbitMQ Enterprise customers. Our dedicated team of
            experts is committed to ensuring uninterrupted operations and
            providing timely assistance for any RabbitMQ-related issues that may
            arise.
          </div>
          <div
            className={styles.codeimg}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '2.5vw',
              marginBottom: '2.5vw',
            }}>
            <Image
              alt='codeimg'
              width={3148}
              height={1101}
              src={'/suphead.png'}
              style={{
                width: isMobile ? '80vw' : '70vw',
                height: 'auto',
              }}
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ x: -50, opacity: 0 }}
          animate={control1}
          transition={{ duration: 1 }}>
          <div
            className={styles.service}
            style={{
              textAlign: 'center',
              marginTop: '6vw',
              marginBottom: '2vw',
            }}>
            Other
            <span style={{ fontWeight: 'lighter' }}> Supported </span>
            <span style={{ color: colors.secondary }}> Technologies</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              height: 'auto',
            }}>
            <div className={styles.techContainer}>
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
                    src={'/awssqs.png'}
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
                  marginTop: '8.5vw',
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
                    src={'/pubsub.png'}
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
                  marginTop: '4.5vw',
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
                    src={'/pulsar.png'}
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

              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '7.5vw',
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
                    src={'/kafka.png'}
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
                  marginTop: '3.5vw',
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
                    src={'/ibm.png'}
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
                  marginTop: '12.5vw',
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
                    src={'/awss.png'}
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
                  marginTop: '9.5vw',
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
                    src={'/others.png'}
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
            {!isMobile && (
              <Image
                alt='trouble'
                width={2572}
                height={1048}
                src={'/card1sup1.png'}
                style={{
                  width: '70vw',
                  height: 'auto',
                  marginBottom: '4vw',
                }}
              />
            )}
            {!isMobile && (
              <Image
                alt='trouble'
                width={2572}
                height={1048}
                src={'/card2sup.png'}
                style={{
                  width: '70vw',
                  height: 'auto',
                  marginBottom: '8vw',
                }}
              />
            )}

            {isMobile && (
              <div>
                <Image
                  alt='rtcMbl'
                  width={1300}
                  height={1051}
                  src={'/rtcMbl1.png'}
                  style={{
                    width: '80vw',
                    height: 'auto',
                    marginBottom: '4vw',
                  }}
                />
                <Image
                  alt='earthMbl'
                  width={1612}
                  height={914}
                  src={'/earthMbl.png'}
                  style={{
                    width: '80vw',
                    height: 'auto',
                    marginBottom: '4vw',
                  }}
                />

                <Image
                  alt='timeMbl'
                  width={1622}
                  height={972}
                  src={'/timeMbl.png'}
                  style={{
                    width: '80vw',
                    height: 'auto',
                    marginBottom: '4vw',
                  }}
                />

                <Image
                  alt='tailrMbl'
                  width={1343}
                  height={971}
                  src={'/tailrMbl.png'}
                  style={{
                    width: '80vw',
                    height: 'auto',
                    marginBottom: '4vw',
                  }}
                />
              </div>
            )}

            <div className={styles.supCard}>
              <div className={styles.cardContentContainer}>
                <div
                  style={{
                    color: 'white',
                    width: isMobile ? '0vw' : '30vw',
                    marginBottom: '.7vw',
                  }}
                  className={styles.heading3}>
                  Millions{' '}
                  <span style={{ fontWeight: 'lighter' }}>
                    {' '}
                    Saved in Downtime
                  </span>{' '}
                  for{' '}
                  <span style={{ color: colors.primary }}>
                    Global Retail
                  </span>{' '}
                  Giant
                </div>
                {isMobile && (
                  <div>
                    {' '}
                    <Image
                      alt='trouble'
                      width={2572}
                      height={1048}
                      src={'/cardImgSup.png'}
                      className={styles.cardImg}
                    />
                  </div>
                )}
                <div
                  style={{ width: isMobile ? '75vw' : '37vw', fontWeight:"200"}}
                  className={styles.contentText}>
                  In the relentless world of international retail, downtime can
                  have substantial costs. AceMQ&apos;s Support mitigated
                  {/* <br /> */}
                  several incidents for a major player, saving millions on
                  downtime. With seamless communication as a lifeline,
                  {/* <br /> */}
                  AceMQ&apos;s proactive monitoring and customized solutions
                  ensured uninterrupted messaging services. Result? Millions
                  {/* <br /> */}
                  saved in downtime costs, fortifying the enterprise against
                  operational disruptions and bolstering financial resilience.
                  {/* <br /> */}
                  Explore how AceMQ&apos;s support becomes a strategic asset for
                  global retailers navigating the competitive landscape.
                </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => scrollToContactForm()}
                    whileTap={{ scale: 0.99 }}
                    className={styles.btnCard}>
                    Learn More
                  </motion.div>
              </div>
              {!isMobile && (
                <div>
                  {' '}
                  <Image
                    alt='trouble'
                    width={2572}
                    height={1048}
                    src={'/cardImgSup.png'}
                    className={styles.cardImg}
                    style={{ width: '28vw', height:"21.3vw" }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          ref={ref2}
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}>
          <div
            className={styles.service}
            style={{
              textAlign: 'center',
              marginTop: '6vw',
              marginBottom: '.7vw',
              alignSelf: 'center',
              width: isMobile ? '60vw' : '50vw',
            }}>
            <span style={{ fontWeight: '200' }}>Maximizing </span>
            <span style={{ color: '#8FD5CC' }}> RabbitMQ Enterprise</span>{' '}
            <span style={{ fontWeight: '200' }}> Performance</span>
            <span>
              {' '}
              <span style={{ fontWeight: '200' }}>and</span> Reliability
            </span>
          </div>
          <div
            style={{
              width: isMobile ? '80vw' : '50vw',
              alignSelf: 'center',
              marginBottom: '2vw',
              textAlign: 'center',
            }}
            className={styles.lgText}>
            With our SLA-based support, we go beyond incident management to
            maximize the performance and reliability of your RabbitMQ Enterprise
            deployment. Our goal is to empower you with a highly available and
            optimized messaging infrastructure that meets your business
            requirements
          </div>
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                alt='trouble'
                width={2572}
                height={1048}
                src={'/card4sup.png'}
                style={{
                  width: '70vw',
                  height: 'auto',
                  marginBottom: '4vw',
                }}
              />
            </div>
          )}
          {isMobile && (
            <div
              style={{
                marginTop: '4vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                alt='proactivembl'
                width={1522}
                height={833}
                src={'/proactivembl.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginBottom: '2vw',
                }}
              />

              <Image
                alt='cdeMbl'
                width={1504}
                height={914}
                src={'/cdeMbl.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginBottom: '4vw',
                }}
              />
            </div>
          )}
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                alt='trouble'
                width={2572}
                height={1048}
                src={'/card3sup.png'}
                style={{
                  width: '70vw',
                  height: 'auto',
                  marginBottom: '4vw',
                }}
              />
            </div>
          )}
          {isMobile && (
            <div
              style={{
                marginTop: '4vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                alt='aceMbl'
                width={1622}
                height={1036}
                src={'/aceMbl.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginBottom: '4vw',
                }}
              />

              <Image
                alt='rootMbl'
                width={1351}
                height={853}
                src={'/rootMbl.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginBottom: '2vw',
                }}
              />
            </div>
          )}
        </motion.div>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}>
          <div
            className={styles.service}
            style={{ textAlign: 'center' }}>
            <span style={{ color: '#8FD5CC' }}> Features</span> and{' '}
            <span style={{ fontWeight: 'lighter' }}>Benefits</span>
          </div>
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image
                alt='trouble'
                width={2572}
                height={1048}
                src={'/supFlow.png'}
                style={{
                  width: '70vw',
                  height: 'auto',
                  marginBottom: '4vw',
                  marginTop: '2vw',
                }}
              />
            </div>
          )}
          {isMobile && (
            <div
              style={{
                marginTop: '4vw',
                display: 'flex',
                justifyContent: 'space-around',
              }}>
              <div style={{}}>
                <Image
                  alt='dedicatedMbl'
                  width={490}
                  height={469}
                  src={'/dedicatedMbl.png'}
                  style={{
                    width: '30vw',
                    height: 'auto',
                    marginBottom: '6vw',
                    marginLeft: '2vw',
                  }}
                />

                <Image
                  alt='techMbl'
                  width={533}
                  height={461}
                  src={'/techMbl.png'}
                  style={{
                    width: '34vw',
                    height: 'auto',
                  }}
                />
              </div>
              <div style={{}}>
                <Image
                  alt='reportMbl'
                  width={375}
                  height={469}
                  src={'/reportMbl.png'}
                  style={{
                    resize: 'horizontal',
                    width: '24vw',
                    height: 'auto',
                    marginBottom: '4vw',
                    marginLeft: '5vw',
                  }}
                />
                <Image
                  alt='robustMbl'
                  width={574}
                  height={533}
                  src={'/robustMbl.png'}
                  style={{
                    width: '36vw',
                    height: 'auto',
                    marginBottom: '4vw',
                  }}
                />
              </div>
            </div>
          )}
          <div
            style={{ alignSelf: 'center' }}
            className={styles.service}>
            <span style={{ color: colors.primary }}>The</span> AceMQ
            <span style={{ fontWeight: 'lighter' }}> Assurance</span>
          </div>
          <div
            style={{
              width: isMobile ? '80vw' : '64vw',
              alignSelf: 'center',
              marginTop: '1vw',
              textAlign: 'center',
            }}
            className={styles.lgText}>
            At AceMQ, we pledge that our Enterprise support not only provides
            insurance against costly downtime but also proves to be a more
            cost-effective solution compared to the expenses associated with
            hiring expert talent.
          </div>
          {!isMobile && (
            <div className={styles.elevate}>
              <Image
                alt='elevate'
                width={3190}
                height={1266}
                src={'/hoverCardSup.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginTop: '6vw',
                }}
              />
            </div>
          )}

          {/* <ContactForm
            id='contactForm'
            maincontainerStyles={{ marginTop: '7vw' }}
          /> */}
        </motion.div>
      </div>
    </div>
  );
};
export default Fipspage;
