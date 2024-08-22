"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./fips.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import CardComp from "@/components/cardComp/CardComp";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { useInView } from "react-intersection-observer";

const Fipspage = () => {
  const [circle, setcircle] = useState(false);
  const [circle2, setcircle2] = useState(false);
  const [circle3, setcircle3] = useState(false);
  const [circle4, setcircle4] = useState(false);
  const [circle5, setcircle5] = useState(false);
  const [circle6, setcircle6] = useState(false);
  const [circle7, setcircle7] = useState(false);
  const [circle8, setcircle8] = useState(false);
  const [circle9, setcircle9] = useState(false);
  const [circle10, setcircle10] = useState(false);
  const [circle11, setcircle11] = useState(false);
  const [circle12, setcircle12] = useState(false);
  const [circle13, setcircle13] = useState(false);
  const [circle14, setcircle14] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  // Animation Controls //

  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  // Animation Refs //

  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  if (inView) {
    control.start({ x: 0, opacity: 1 });
  }
  if (inView1) {
    control1.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    control2.start({ y: 0, opacity: 1 });
  }
  if (inView3) {
    control3.start({ x: 0, opacity: 1 });
  }
  if (inView4) {
    control4.start({ y: 0, x: 0, opacity: 1 });
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
      window.addEventListener("resize", handleSize);
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  }, []);

  return (
    <div className={styles.MainView} style={{ backgroundColor: "#0D111C" }}>
      <div
        style={{
          backgroundImage: "url('/magic.png')",
          backgroundSize: "cover",
          width: "99vw",
          height: "42vw",
          mixBlendMode: "multiply",
        }}
      />
      <motion.div
        ref={ref}
        animate={control}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.heading}
      >
        <Image
          alt="fip"
          width={3214}
          height={1032}
          src={"/fip.png"}
          style={{ width: isMobile ? "90vw" : "80vw", height: "auto" }}
        />
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        ref={ref1}
        animate={control1}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.Desc}>
          At{" "}
          <span
            style={{
              backgroundColor: "#8FD5CC",
              padding: ".3vw",
              borderRadius: "1vw",
              color: "#000",
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              marginRight: ".3vw",
              marginLeft: ".3vw",
            }}
          >
            {" "}
            AceMQ,{" "}
          </span>{" "}
          we specialize in providing comprehensive support services for FIPS,
          the leading FIPS-
          <br /> compliant message broker. Our team of experts is well-versed in
          leveraging our FIPSMQ solution, to enable secure and scalable
          <br /> messaging solutions for businesses that require compliance with
          FIPS (Federal Information Processing Standards) guidelines.
        </div>

        <div className={styles.crypto}>
          <Image
            alt="crypto"
            width={3214}
            height={1032}
            src={"/crypto.png"}
            style={{ width: isMobile ? "90vw" : "80vw", height: "auto" }}
          />
        </div>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          alignItems: isMobile ? "center" : "normal",
          flexDirection: "column",
        }}
        ref={ref2}
        animate={control2}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {!isMobile && (
          <div className={styles.Fps}>
            <Image
              alt="Fps"
              width={3460}
              height={1349}
              src={"/Fps.png"}
              style={{ width: "88vw", height: "auto" }}
            />
          </div>
        )}
        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "4vw",
            }}
          >
            <Image
              alt="Fps"
              width={1444}
              height={1051}
              src={"/fpmb.png"}
              style={{ width: "80vw", height: "auto" }}
            />
            <Image
              alt="Fps"
              width={1940}
              height={1260}
              src={"/cryptomb.png"}
              style={{ width: "80vw", height: "auto", marginTop: "6vw" }}
            />
          </div>
        )}
      </motion.div>

      <motion.div
        ref={ref3}
        animate={control3}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: isMobile ? "block" : "flex",
          alignItems: "center",
          width: "90vw",
          gap: "5vw",
          justifyContent: "space-between",
          alignSelf: "center",
          marginTop: "3vw",
        }}
      >
        {!isMobile && (
          <div style={{ width: "50vw" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "45vw",
              }}
            >
              <div className={styles.circleMain}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle ? 1 : 0,
                  }}
                >
                  1
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle(true)}
                  onMouseLeave={() => setcircle(false)}
                >
                  <AnimatePresence>
                    {circle && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image1"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/changemanage1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
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
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image2"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/changemanage.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
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
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Change
                  <br />
                  Management
                </motion.div>
              </div>

              <div className={styles.circleMain} style={{ marginTop: "5vw" }}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle2 ? 1 : 0,
                  }}
                >
                  2
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle2(true)}
                  onMouseLeave={() => setcircle2(false)}
                >
                  <AnimatePresence>
                    {circle2 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image1"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/deploy1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
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
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image2"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/deploy.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
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
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Deployments
                </motion.div>
              </div>

              <div className={styles.circleMain}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle3 ? 1 : 0,
                  }}
                >
                  3
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle3(true)}
                  onMouseLeave={() => setcircle3(false)}
                >
                  <AnimatePresence>
                    {circle3 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster1"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/disaster1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
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
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/disaster.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
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
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Disaster
                  <br />
                  Recovery
                </motion.div>
              </div>

              <div className={styles.circleMain} style={{ marginTop: "5vw" }}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle4 ? 1 : 0,
                  }}
                >
                  4
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle4(true)}
                  onMouseLeave={() => setcircle4(false)}
                >
                  <AnimatePresence>
                    {circle4 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster1"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/qa1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
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
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster"
                          alt="changemanage"
                          width={222}
                          height={222}
                          src={"/qa.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
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
                    transition: "opacity 0.8s ease",
                  }}
                >
                  QA
                </motion.div>
              </div>
            </div>
            <div
              className={styles.desc2}
              style={{ width: "36vw", marginLeft: "12vw" }}
            >
              High Availability
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                width: "45vw",
                marginTop: "-3vw",
                marginLeft: "1vw",
              }}
            >
              <div className={styles.circleMain} style={{ marginTop: "5vw" }}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle5 ? 1 : 0,
                  }}
                >
                  8
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle5(true)}
                  onMouseLeave={() => setcircle5(false)}
                >
                  <AnimatePresence>
                    {circle5 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image1"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/team1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle5 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image2"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/team.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc2}
                  style={{
                    opacity: circle5 ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Team Culture
                </motion.div>
              </div>

              <div
                className={styles.circleMain}
                style={{ marginTop: "-1.5vw" }}
              >
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle6 ? 1 : 0,
                  }}
                >
                  7
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle6(true)}
                  onMouseLeave={() => setcircle6(false)}
                >
                  <AnimatePresence>
                    {circle6 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image1"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/doc1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle6 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="image2"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/doc.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc2}
                  style={{
                    opacity: circle6 ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Documentation
                </motion.div>
              </div>

              <div className={styles.circleMain} style={{ marginTop: "7vw" }}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle7 ? 1 : 0,
                  }}
                >
                  6
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => {
                    setcircle7(true), console.log("True");
                  }}
                  onMouseLeave={() => {
                    setcircle7(false), console.log("False");
                  }}
                >
                  <AnimatePresence>
                    {circle7 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster1"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/plan1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle7 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/plan.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc2}
                  style={{
                    opacity: circle7 ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Capacity
                  <br />
                  Planning
                </motion.div>
              </div>

              <div className={styles.circleMain}>
                <motion.div
                  style={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "4vw" : "2vw",
                    color: "gray",
                    marginRight: ".5vw",
                    transition: "opacity 0.8s ease",
                    opacity: circle8 ? 1 : 0,
                  }}
                >
                  5
                </motion.div>
                <motion.div
                  className={styles.circlee}
                  onMouseEnter={() => setcircle8(true)}
                  onMouseLeave={() => setcircle8(false)}
                >
                  <AnimatePresence>
                    {circle8 && (
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster1"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/analysis1.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: 1,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {!circle8 && (
                      <motion.div
                        transition={{ duration: 0.8 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          key="disaster"
                          alt="changemanage"
                          width={111}
                          height={111}
                          src={"/analysis.png"}
                          style={{
                            width: "6vw",
                            height: "6vw",
                            position: "absolute",
                            opacity: 1,
                            top: 0,
                            left: 0,
                            transition: "opacity 0.8s ease",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className={styles.desc2}
                  style={{
                    opacity: circle8 ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                >
                  Root Cause
                  <br />
                  Analysis
                </motion.div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "6vw",
                marginTop: "-2vw",
              }}
            >
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle9 ? 1 : 0,
                }}
              >
                9
              </motion.div>
              <motion.div
                className={styles.circlee}
                onMouseEnter={() => setcircle9(true)}
                onMouseLeave={() => setcircle9(false)}
              >
                <AnimatePresence>
                  {circle9 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="image1"
                        alt="changemanage"
                        width={111}
                        height={111}
                        src={"/heart1.png"}
                        style={{
                          width: "6vw",
                          height: "6vw",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {!circle9 && (
                    <motion.div
                      transition={{ duration: 0.8 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="image2"
                        alt="changemanage"
                        width={111}
                        height={111}
                        src={"/heart.png"}
                        style={{
                          width: "6vw",
                          height: "6vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle9 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Game Day
              </motion.div>
            </div>
          </div>
        )}
        {isMobile && (
          <>
            {" "}
            <div
              className={styles.desc2}
              style={{
                textAlign: "center",
                marginLeft: "12vw",
                fontSize: "5vw",
              }}
            >
              High Availability
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <div className={styles.circleMain}>
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle ? 1 : 0,
                    }}
                  >
                    1
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle(true)}
                    onMouseLeave={() => setcircle(false)}
                  >
                    <AnimatePresence>
                      {circle && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image1"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/changemanage1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
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
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image2"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/changemanage.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
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
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Change
                    <br />
                    Management
                  </motion.div>
                </div>

                <div className={styles.circleMain} style={{}}>
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle4 ? 1 : 0,
                    }}
                  >
                    4
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle4(true)}
                    onMouseLeave={() => setcircle4(false)}
                  >
                    <AnimatePresence>
                      {circle4 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster1"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/qa1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
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
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/qa.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
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
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    QA
                  </motion.div>
                </div>

                <div
                  className={styles.circleMain}
                  style={{ marginTop: "-1.5vw" }}
                >
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle6 ? 1 : 0,
                    }}
                  >
                    7
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle6(true)}
                    onMouseLeave={() => setcircle6(false)}
                  >
                    <AnimatePresence>
                      {circle6 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image1"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/doc1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle6 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image2"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/doc.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle6 ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Documentation
                  </motion.div>
                </div>
              </div>

              <div>
                <div className={styles.circleMain} style={{}}>
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle2 ? 1 : 0,
                    }}
                  >
                    2
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle2(true)}
                    onMouseLeave={() => setcircle2(false)}
                  >
                    <AnimatePresence>
                      {circle2 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image1"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/deploy1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
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
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image2"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/deploy.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
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
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Deployments
                  </motion.div>
                </div>
                <div
                  className={styles.circleMain}
                  //  style={{ marginTop: "4vw" }}>
                >
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle8 ? 1 : 0,
                    }}
                  >
                    5
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle8(true)}
                    onMouseLeave={() => setcircle8(false)}
                  >
                    <AnimatePresence>
                      {circle8 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster1"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/analysis1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle8 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/analysis.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle8 ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Root Cause
                    <br />
                    Analysis
                  </motion.div>
                </div>
                <div
                  className={styles.circleMain}
                  // style={{ marginTop: "-4vw" }}
                >
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle5 ? 1 : 0,
                    }}
                  >
                    8
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle5(true)}
                    onMouseLeave={() => setcircle5(false)}
                  >
                    <AnimatePresence>
                      {circle5 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image1"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/team1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle5 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image2"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/team.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle5 ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Team Culture
                  </motion.div>
                </div>
              </div>

              <div style={{}}>
                <div className={styles.circleMain}>
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle3 ? 1 : 0,
                    }}
                  >
                    3
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle3(true)}
                    onMouseLeave={() => setcircle3(false)}
                  >
                    <AnimatePresence>
                      {circle3 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster1"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/disaster1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
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
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster"
                            alt="changemanage"
                            width={222}
                            height={222}
                            src={"/disaster.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
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
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Disaster
                    <br />
                    Recovery
                  </motion.div>
                </div>
                <div className={styles.circleMain} style={{}}>
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle7 ? 1 : 0,
                    }}
                  >
                    6
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle7(true)}
                    onMouseLeave={() => setcircle7(false)}
                  >
                    <AnimatePresence>
                      {circle7 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster1"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/plan1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle7 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="disaster"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/plan.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle7 ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Capacity
                    <br />
                    Planning
                  </motion.div>
                </div>
                <div
                  className={styles.circleMain}
                  // style={{ marginTop: "-4vw" }}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  // }}
                >
                  <motion.div
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "4vw" : "2vw",
                      color: "gray",
                      marginRight: ".5vw",
                      transition: "opacity 0.8s ease",
                      opacity: circle9 ? 1 : 0,
                    }}
                  >
                    9
                  </motion.div>
                  <motion.div
                    className={styles.circlee}
                    onMouseEnter={() => setcircle9(true)}
                    onMouseLeave={() => setcircle9(false)}
                  >
                    <AnimatePresence>
                      {circle9 && (
                        <motion.div
                          transition={{ duration: 0.6 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image1"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/heart1.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              opacity: 1,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!circle9 && (
                        <motion.div
                          transition={{ duration: 0.8 }}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            key="image2"
                            alt="changemanage"
                            width={111}
                            height={111}
                            src={"/heart.png"}
                            style={{
                              width: "12vw",
                              height: "12vw",
                              position: "absolute",
                              opacity: 1,
                              top: 0,
                              left: 0,
                              transition: "opacity 0.8s ease",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className={styles.desc2}
                    style={{
                      opacity: circle9 ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    Game Day
                  </motion.div>
                </div>
              </div>
            </div>
          </>
        )}
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "center" : "normal",
          }}
        >
          <Image
            alt="Fps"
            width={1582}
            height={828}
            src={"/high.png"}
            style={{
              width: isMobile ? "100vw" : "50vw",
              height: "auto",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        ref={ref4}
        animate={control4}
        initial={{ y: -50, x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.message}>
          Advanced{" "}
          <span style={{ color: "#8FD5CC" }}>
            Messaging
            <br /> Patterns{" "}
          </span>
          and <span style={{ fontWeight: "300" }}> Optimization</span>{" "}
        </div>

        <div className={styles.AdvDesc}>
          Unlock the full potiential of RabbitMQ with our advanced messaging
          pattern and
          {!isMobile && <br />} optimization techniques. we go beyond basic
          messaging functionality to help you build
          {!isMobile && <br />} robust and scalable messaging architectures.
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "center",
            // backgroundColor: "red",
            justifyContent: "space-between",
            marginTop: "2vw",
            width: isMobile ? "70vw" : "38vw",
          }}
        >
          <div>
            <div className={styles.circleMain1}>
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle10 ? 1 : 0,
                }}
              >
                1
              </motion.div>
              <motion.div
                className={styles.circlee1}
                onMouseEnter={() => setcircle10(true)}
                onMouseLeave={() => setcircle10(false)}
              >
                <AnimatePresence>
                  {circle10 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const1"
                        alt="const1"
                        width={222}
                        height={222}
                        src={"/const1.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
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
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const"
                        alt="const"
                        width={222}
                        height={222}
                        src={"/const.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle10 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Construction
              </motion.div>
            </div>
            <div className={styles.circleMain1} style={{ marginLeft: "3vw" }}>
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle11 ? 1 : 0,
                }}
              >
                2
              </motion.div>
              <motion.div
                className={styles.circlee1}
                onMouseEnter={() => setcircle11(true)}
                onMouseLeave={() => setcircle11(false)}
              >
                <AnimatePresence>
                  {circle11 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const1"
                        alt="const1"
                        width={222}
                        height={222}
                        src={"/routing1.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
                          position: "absolute",
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
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const"
                        alt="const"
                        width={222}
                        height={222}
                        src={"/routing.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle11 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Routing
              </motion.div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: isMobile ? "9vw" : "3vw",
              width: isMobile ? "100vw" : "",
            }}
          >
            <div style={{}}>
              <Image
                alt="msgPatrn"
                width={632}
                height={632}
                src={"/msgPatrn.png"}
                style={{
                  width: "50vw",
                  height: "auto",
                }}
              />
            </div>

            <div className={styles.circleMain1} style={{ marginTop: "2vw" }}>
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle12 ? 1 : 0,
                }}
              >
                3
              </motion.div>
              <motion.div
                className={styles.circlee1}
                onMouseEnter={() => setcircle12(true)}
                onMouseLeave={() => setcircle12(false)}
              >
                <AnimatePresence>
                  {circle12 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const1"
                        alt="const1"
                        width={222}
                        height={222}
                        src={"/transfer1.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
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
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const"
                        alt="const"
                        width={222}
                        height={222}
                        src={"/transfer.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle12 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Transformation
              </motion.div>
            </div>
          </div>
          <div>
            <div className={styles.circleMain1} style={{ marginLeft: "1.5vw" }}>
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle13 ? 1 : 0,
                }}
              >
                5
              </motion.div>
              <motion.div
                className={styles.circlee1}
                onMouseEnter={() => setcircle13(true)}
                onMouseLeave={() => setcircle13(false)}
              >
                <AnimatePresence>
                  {circle13 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const1"
                        alt="const1"
                        width={222}
                        height={222}
                        src={"/monitr1.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
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
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const"
                        alt="const"
                        width={222}
                        height={222}
                        src={"/monitr.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle13 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Monitoring
              </motion.div>
            </div>
            <div className={styles.circleMain1} style={{ marginRight: "3vw" }}>
              <motion.div
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : "2vw",
                  color: "gray",
                  marginRight: ".5vw",
                  transition: "opacity 0.8s ease",
                  opacity: circle14 ? 1 : 0,
                }}
              >
                4
              </motion.div>
              <motion.div
                className={styles.circlee1}
                onMouseEnter={() => setcircle14(true)}
                onMouseLeave={() => setcircle14(false)}
              >
                <AnimatePresence>
                  {circle14 && (
                    <motion.div
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const1"
                        alt="const1"
                        width={222}
                        height={222}
                        src={"/channel1.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 1,
                          transition: "opacity 0.8s ease",
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
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        key="const"
                        alt="const"
                        width={222}
                        height={222}
                        src={"/channel.png"}
                        style={{
                          width: isMobile ? "14vw" : "7vw",
                          height: isMobile ? "14vw" : "7vw",
                          position: "absolute",
                          opacity: 1,
                          top: 0,
                          left: 0,
                          transition: "opacity 0.8s ease",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className={styles.desc2}
                style={{
                  opacity: circle14 ? 1 : 0,
                  transition: "opacity 0.8s ease",
                }}
              >
                Channels
              </motion.div>
            </div>
          </div>
        </div>
        {!isMobile && (
          <>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                alt="load"
                width={3188}
                height={2694}
                src={"/load.png"}
                style={{ width: "80vw", height: "auto", marginTop: "5vw" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                alt="btn"
                width={3190}
                height={1266}
                src={"/btn.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "5vw ",
                  marginBottom: isMobile ? "" : "8vw",
                }}
              />
            </div>
          </>
        )}

        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "4vw",
            }}
          >
            <Image
              alt="securembl"
              width={1286}
              height={980}
              src={"/securembl.png"}
              style={{ width: "80vw", height: "auto" }}
            />
            <Image
              alt="codembl"
              width={1276}
              height={1014}
              src={"/codembl.png"}
              style={{ width: "80vw", height: "auto", marginTop: "2vw" }}
            />
            <Image
              alt="msgmbl"
              width={1940}
              height={1260}
              src={"/msgmbl.png"}
              style={{ width: "80vw", height: "auto", marginTop: "6vw" }}
            />

            <Image
              alt="msgimgmbl"
              width={1392}
              height={834}
              src={"/msgimgmbl.png"}
              style={{ width: "80vw", height: "auto", marginTop: "4vw" }}
            />

            <CardComp
              stylee={{ backgroundColor: "#00121e" }}
              Heading="Empower your messaging with FIPSMQ"
              Desc="the leading FIPS-compliant message broker, supported comprehensively by AceMQ. Ensure secure and scalable solutions adhering to FIPS 140-2 standards with our expert guidance. Achieve high availability and fault tolerance, critical for mission-critical systems, all while maintaining FIPS compliance. From secure message routing to load balancing, trust AceMQ to optimize your FIPS-compliant message broker. Elevate your messaging architecture—partner with us for FIPS-compliant excellence."
            />
          </div>
        )}
        {/* <ContactForm /> */}
      </motion.div>
    </div>
  );
};
export default Fipspage;
