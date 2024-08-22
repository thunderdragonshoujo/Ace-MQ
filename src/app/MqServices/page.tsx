"use client";
import { useEffect, useState } from "react";
import styles from "./MqServices.module.css";
import Image from "next/image";
import CardComp from "@/components/cardComp/CardComp";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MqServices = () => {
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
      window.addEventListener("resize", handleSize);
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  });
  return (
    <div className={styles.Maindiv} style={{ alignItems: "center" }}>
      <div
        style={{
          backgroundImage: "url('/backimageHead.png')",
          backgroundSize: "cover",
          width: "99vw",
          height: "38vw",
          mixBlendMode: "multiply",
        }}
      />
      <div className={styles.MainHeading}>
        Your Trusted
        <br />{" "}
        <span style={{ fontWeight: "200" }}>
          Message{" "}
          <span style={{ fontWeight: "bold", color: "#8FD5CC" }}>
            Queuing
            <br /> Services
          </span>{" "}
          <span style={{ fontWeight: "bold" }}> Partner </span>
        </span>
        <div className={styles.subHead}>
          Expertise, Support, and Value for Your Messaging & Queuing
          Implementation
        </div>
      </div>
      <div style={{ width: "70vw" }}>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          animate={control}
          transition={{ duration: 1 }}
        >
          <div className={styles.text1}>
            At
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
              AceMQ{" "}
            </span>{" "}
            we have developed a comprehensive practice around message brokers.
            Our engineers possess extensive experience working closely with
            message
            {!isMobile && <br />}
            broker products, including RabbitMQ. Their in-depth knowledge and
            architectural understanding of Message Brokers allow us to
            seamlessly integrate it into your unique
            {!isMobile && <br />} technology stack. As an internationally
            accredited partner of many of the top Message Brokers, we are the
            go-to choice for all your message broker service needs.
          </div>
          {!isMobile && (
            <div
              className={styles.codeimg}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "2.5vw",
                marginBottom: "2.5vw",
              }}
            >
              <Image
                alt="codeimg"
                width={3148}
                height={1101}
                src={"/codeimg.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                }}
              />
            </div>
          )}
          {isMobile && (
            <div
              style={{
                marginTop: "5vw",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                alt="cdMbl"
                width={2390}
                height={960}
                src={"/cdMbl.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                }}
              />
              <Image
                alt="cd2Mbl"
                width={1193}
                height={1047}
                src={"/cd2Mbl.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "4vw",
                }}
              />
            </div>
          )}
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={ref1}
          initial={{ x: -50, opacity: 0 }}
          animate={control1}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              display: isMobile ? "block" : "flex",
              width: "80vw",
              justifyContent: "space-between",
              alignSelf: "center",
              alignItems: "center",
              marginTop: isMobile ? "5vw" : "2vw",
            }}
          >
            <div>
              <Image
                alt="cycle"
                width={1708}
                height={1005}
                src={"/cycle.png"}
                style={{
                  width: isMobile ? "80vw" : "40vw",
                  height: "auto",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: isMobile ? "2vw" : "0vw",
                alignSelf: "center",
              }}
            >
              <div
                className={styles.service}
                style={{
                  fontWeight: "300",
                  width: isMobile ? "12vw" : "8vw",
                  height: isMobile ? "6vw" : "4vw",
                  backgroundColor: "#8FD5CC",
                  textAlign: "center",
                  borderRadius: "1vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#000",
                  marginBottom: ".6vw",
                }}
              >
                Our
              </div>
              <div className={styles.service}>Services</div>

              <div
                className={styles.text1}
                style={{ marginTop: 0, textAlign: "start" }}
              >
                Our consultants have encountered and successfully resolved a{" "}
                {!isMobile && <br />} wide range of challenges related to
                message brokers. With years
                {!isMobile && <br />} of experience in supporting message broker
                products and
                {!isMobile && <br />} environments, our engineers are
                well-prepared to tackle any issue
                {!isMobile && <br />} you may face.
              </div>
            </div>
          </div>

          <div className={styles.assessment}>
            <div>
              <Image
                alt="assessment"
                width={1398}
                height={954}
                src={"/assessment.png"}
                style={{
                  width: isMobile ? "100vw" : "35vw",
                  height: "auto",
                }}
              />
            </div>

            <div>
              <Image
                alt="charrt"
                width={3110}
                height={1424}
                src={"/charrt.png"}
                style={{
                  width: isMobile ? "100vw" : "40vw",
                  height: "auto",
                  marginTop: isMobile ? "2vw" : "0vw",
                }}
              />
            </div>
          </div>

          <div className={styles.supportive}>
            <Image
              alt="circle"
              width={326}
              height={326}
              src={"/circle.png"}
              style={{
                width: isMobile ? "50vw" : "17vw",
                height: isMobile ? "50vw" : "17vw",
                marginTop: "2vw",
              }}
            />
            <Image
              alt="supSer"
              width={1392}
              height={776}
              src={"/supSer.png"}
              style={{
                width: isMobile ? "100vw" : "38vw",
                height: "auto",
                marginTop: "2vw",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          ref={ref2}
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}
        >
          <div
            className={styles.service}
            style={{
              textAlign: "center",
              marginTop: "6vw",
              marginBottom: "2vw",
            }}
          >
            Our <span style={{ color: "#8FD5CC" }}> Differentiator</span>
            <br />& <span style={{ fontWeight: "200" }}>Value</span>
          </div>

          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                alt="trouble"
                width={2572}
                height={1048}
                src={"/trouble.png"}
                style={{
                  width: "60vw",
                  height: "auto",
                }}
              />
            </div>
          )}

          {isMobile && (
            <div style={{ alignSelf: "center", marginTop: "4vw" }}>
              <Image
                alt="troubleMbl"
                width={2528}
                height={1913}
                src={"/troubleMbl.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "2vw",
                }}
              />
              <Image
                alt="proMbl1"
                width={772}
                height={220}
                src={"/proMbl1.png"}
                style={{
                  width: "40vw",
                  height: "auto",
                  marginTop: "2vw",
                }}
              />
              <Image
                alt="proMbl2"
                width={772}
                height={220}
                src={"/proMbl2.png"}
                style={{
                  width: "40vw",
                  height: "auto",
                  marginTop: "2vw",
                }}
              />
              <Image
                alt="proMbl3"
                width={772}
                height={220}
                src={"/proMbl3.png"}
                style={{
                  width: "60vw",
                  height: "auto",
                  marginTop: "2vw",
                }}
              />
            </div>
          )}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                alt="concover"
                width={2528}
                height={1913}
                src={"/concover.png"}
                style={{
                  width: "60vw",
                  height: "auto",
                  marginTop: "6vw",
                }}
              />
            </div>
          )}
          {isMobile && (
            <div>
              <div
                className={styles.service}
                style={{ textAlign: "center", marginTop: "2vw" }}
              >
                <span style={{ fontWeight: "200" }}> Consulting</span> &
                Assessment
              </div>
              <div
                className={styles.text1}
                style={{
                  textAlign: "center",
                  marginTop: 0,
                  fontSize: "2.5vw",
                  width: "99vw",
                }}
              >
                Our consulting services cover a wide range of areas, including:
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "4vw",
                }}
              >
                <Image
                  alt="con1Mbl"
                  width={1176}
                  height={310}
                  src={"/con1Mbl.png"}
                  style={{
                    width: "80vw",
                    height: "auto",
                    marginTop: "2vw",
                  }}
                />

                <Image
                  alt="con2Mbl"
                  width={1185}
                  height={252}
                  src={"/con2Mbl.png"}
                  style={{
                    width: "80vw",
                    height: "auto",
                    marginTop: "4vw",
                  }}
                />

                <Image
                  alt="con3Mbl"
                  width={1176}
                  height={376}
                  src={"/con3Mbl.png"}
                  style={{
                    width: "80vw",
                    height: "auto",
                    marginTop: "4vw",
                  }}
                />
                <Image
                  alt="con4Mbl"
                  width={1209}
                  height={376}
                  src={"/con4Mbl.png"}
                  style={{
                    width: "80vw",
                    height: "auto",
                    marginTop: "4vw",
                  }}
                />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            
            alignItems: "center",
            flexDirection: "column",
            alignSelf:"center",
          }}
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={control3}
          transition={{ duration: 1 }}
        >
          <div className={styles.commercial}>
            <div
              style={{
                width: isMobile ? "99vw" : "34vw",
                display: isMobile ? "flex" : "block",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "normal",
              }}
            >
              <div
                style={{
                  marginLeft: isMobile ? "0vw" : "1vw",
                  textAlign: isMobile ? "center" : "start",
                  marginTop: isMobile ? "4vw" : "0vw",
                }}
              >
                <div className={styles.service}>
                  <span style={{ color: "#8FD5CC" }}>Support</span> &
                  <span style={{ fontWeight: "300" }}> Services</span>
                </div>

                <div
                  className={styles.text1}
                  style={{
                    textAlign: isMobile ? "center" : "start",
                    marginTop: "1vw",
                    width: isMobile ? "99vw" : "50vw",
                  }}
                >
                   Our support offerings include:
                </div>
              </div>

              <div>
                <Image
                  alt="commercial"
                  width={1586}
                  height={869}
                  src={"/commercial.png"}
                  style={{
                    width: isMobile ? "80vw" : "34vw",
                    height: "auto",
                    marginTop: "2vw",
                  }}
                />
              </div>
            </div>
            <div>
              <Image
                alt="infra"
                width={1806}
                height={874}
                src={"/infra.png"}
                style={{
                  width: isMobile ? "80vw" : "45vw",
                  height: "auto",
                  marginTop: isMobile ? "4vw" : "0vw",
                }}
              />
            </div>
          </div>

          {!isMobile && (
            <div className={styles.elevate}>
              <Image
                alt="elevate"
                width={3190}
                height={1266}
                src={"/elevate.png"}
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "6vw",
                  marginBottom: isMobile ? "" : "8vw",
                }}
              />
            </div>
          )}
       
          {/* <ContactForm /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default MqServices;
