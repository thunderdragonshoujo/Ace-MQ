"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event:any){
    event.preventDefault();
    console.log("popping toast from footer");
    const notify = () => toast('Thanks you are now subscribed. ', {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  
    // Collect form data
    const formData = {
      email: emailRef.current?.value || '',
    };
    axios({
      method:"POST",
      url: 'https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs',
      data:JSON.stringify({
        subject:"Customer has subscribed to Newsletter for ACE MQ",
        message: formData,
        toaddress: "randall.mcclure@acemq.com",
        toaddress2: "info@acemq.com",
    }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(function (response) {
      // Handle success
      console.log('popping toast from footer after axios post');
      notify();
      console.log(response.data);
  })
  .catch(function (error) {
      // Handle error
      console.error("There was an error!", error);
  });
  }
  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.footerContent}
        style={{
          display: 'flex',
          width: '80vw',
          justifyContent: 'space-between',
        }}>
        <div
          // className={styles.footerItem}

          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <div
            className={styles.widthMin}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <div>
              <Image
                alt='aceLOGO'
                height={896}
                width={1920}
                className={styles.aceLogo}
                src={'/logoMQ.png'}
              />
            </div>
          </div>

          <div>
            <div
              className={styles.widthMin}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '1vw',
              }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{}}>
                <Image
                  className={styles.icon}
                  alt='aceLOGO'
                  height={896}
                  width={1920}
                  src={'/call.png'}
                  style={{ marginLeft: '2px' }}
                />
              </motion.div>
              <div
                className={styles.text1}
                style={{
                  fontWeight: 'normal',
                  marginLeft: '2vw',
                }}>
                305-981-6475
              </div>
            </div>

            <div
              className={styles.widthMin}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '2vw',
              }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{}}>
                <Image
                  alt='aceLOGO'
                  height={896}
                  width={1920}
                  className={styles.icon2}
                  src={'/location.png'}
                />
              </motion.div>
              <div
                className={styles.text2}
                style={{
                  fontWeight: 'normal',
                  marginLeft: '2vw',
                }}>
                66 W. Flagler St. 9th Floor <br /> Miami, FL 33130
              </div>
            </div>
          </div>
        </div>

        <div
          // className={styles.footerItem}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <div className={styles.heading3}>Navigate</div>
          <div>
            <Link href={'/'}>
              {' '}
              <div
                className={styles.text2}
                style={{
                  marginTop: '2vw',
                }}>
                Home
              </div>
            </Link>
            <Link href={'/rabbitmq'}>
              {' '}
              <div
                className={styles.text2}
                style={{
                  marginTop: '.8vw',
                }}>
                RabbitMQ
              </div>
            </Link>
            <Link href={'/fipsmq'}>
              {' '}
              <div
                className={styles.text2}
                style={{
                  marginTop: '.8vw',
                }}>
                FIPS
              </div>
            </Link>
            <Link href={'/mq-services'}>
              {' '}
              <div
                className={styles.text2}
                style={{
                  marginTop: '.8vw',
                }}>
                Middleware Services
              </div>
            </Link>
            <Link href={'/support'}>
              {' '}
              <div
                className={styles.text2}
                style={{
                  marginTop: '.8vw',
                }}>
                Development Service
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: "space-between",
          }}
          // className={styles.footerItem}
        >
          <div className={styles.heading3}>Newsletter</div>
          <div>
            <input
              className={`${styles.text2} ${styles.widthMin}  ${styles.inputContainer}`}
              placeholder='Enter Your Email'
              type='text'
              ref={emailRef}
            />

            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.button}
                onClick={handleSubmit}>
                Submit
              </motion.button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          <div className={styles.heading3}>Connect With Us</div>
          <Link href={'https://www.linkedin.com/company/acemq/'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
               marginTop: '1.5vw',
              }}>
              <Image
                height={100}
                width={100}
                style={{ width: '1.8vw', height: 'auto' }}
                alt='Link'
                src={'/link.png'}
              />
            </motion.button>
            <ToastContainer />
          </Link>
        </div>
      </div>
      <div className={`${styles.text1}  ${styles.copyWritsContainer}`}>
        © AceMQ Copyright 2024. All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
