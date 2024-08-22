/** @format */

import React from 'react';
import styles from './contactForm.module.css';
import { colors } from '../../utils/Theme';
import Image from 'next/image';

export const ContactForm = ({ containerStyles,maincontainerStyles, id }: any) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        paddingBottom: '2vw',
        borderRadius: '20px',
        width: '80vw',
        position: 'relative',
        alignSelf: "center",
        ...maincontainerStyles
      }}>
      <div
        id={id}
        style={{
          width: '3vw',
          height: '3vw',
          position: 'absolute',
          top: '-8vw',
          left: 0,
        }}></div>
      <div
        className={styles.contactCard1}
        style={{ backgroundColor: colors.primary }}>
        Contact{' '}
        <span style={{ fontWeight: 'bold', marginLeft: '.25vw' }}>Us</span>
      </div>
      <div
        style={containerStyles}
        className={styles.devSection}>
        <div
          style={{
            marginLeft: '3vw',
            marginTop: '2vw',
          }}
          className={styles.devContentContainer}>
          <div className={styles.servieText}>
            Contact Us To Speak With One of Our MQ Aces
          </div>
          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt='bg'
              height={896}
              width={1920}
              src={'/c1.png'}
            />
            <div className={styles.servieText}>info@acemq.com</div>
          </div>

          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt='bg'
              height={896}
              width={1920}
              src={'/c2.png'}
            />
            <div className={styles.servieText}>305-204-2607</div>
          </div>
          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt='bg'
              height={896}
              width={1920}
              src={'/c3.png'}
            />
            <div className={styles.servieText}>
              66 W. Flagler St. 9th Floor Miami, FL 33130
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div style={{ display: 'flex', gap: '1.2vw' }}>
            <div className={styles.inputItem}>
              <Image
                alt='profile'
                src={'/name-icon.png'}
                width={800}
                height={1500}
                style={{ width: '1.1vw', height: '1.1vw' }}
              />
              <div>
                <input
                  className={styles.contactInput}
                  placeholder='Name'
                  type='text'
                  name=''
                  id=''
                />
              </div>
            </div>
            <div className={styles.inputItem}>
              <Image
                alt='email'
                src={'/email-icon.png'}
                width={800}
                height={1500}
                style={{ width: '1vw', height: '.8vw' }}
              />
              <div>
                <input
                  className={styles.contactInput}
                  placeholder='Email'
                  type='email'
                  name=''
                  id=''
                />
              </div>
            </div>
          </div>
          <div
            className={styles.inputItem}
            style={{ alignItems: 'flex-start' }}>
            <Image
              alt='message'
              src={'/chat-icon.png'}
              width={800}
              height={1500}
              style={{ width: '1vw', height: '.8vw', marginTop: '1.4vw' }}
            />
            <div>
              <textarea
                className={styles.contactTextArea}
                placeholder='Message'
                name=''
                id=''
                cols={50}
                rows={10}></textarea>
            </div>
          </div>
          <div
            className={styles.inputItem}
            style={{ borderBottom: 'none', marginLeft: 'auto' }}>
            <button
              style={{}}
              className={styles.contactCard}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
