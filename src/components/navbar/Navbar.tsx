"use client";
import React from "react";

import Link from "next/link";
// import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathName = usePathname();
  const [scroll, setScroll] = useState(false);
  const [color, setColor] = useState(false);

  console.log(pathName, "PATHnAME ");
  //   const session = await auth();
  const [isMobile, setIsMobile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onModalActive = () => {
    setShowDropDown(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setShowDropDown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
        setColor(false);
        // if (window.scrollY > 500) {
        // }
        if (window.scrollY > 1700) {
          console.log("gere");
          setScroll(false);
          setColor(true);
        }
      }
      if (window.scrollY == 0) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 870) {
        setIsMobile(true);
        console.log("True", isMobile);
      } else {
        setIsMobile(false);
        console.log("False", isMobile);
      }
    };

    if (typeof window !== "undefined") {
      handleSize();
      window.addEventListener("resize", handleSize);

      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  }, []);
  return (
    <div
      style={{
        height:
          !scroll && typeof window !== "undefined" && window?.scrollY !== 0
            ? "5.5vw"
            : "5.5vw",
      }}
      className={`${styles.container} ${scroll ? styles.scrollActive : " "}`}
    >
      <div className={styles.LinksContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.mainLogo}
            height={45}
            width={183}
            src={"/logo.png"}
            alt="logo"
          />
        </Link>

        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/" && styles.navActive
          } `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/MqServices" && styles.navActive
          }`}
          href={"/MqServices"}
        >
          {" "}
          MQ Services
        </Link>
        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/rabitmq" && styles.navActive
          } `}
          href="/rabitmq"
        >
          RabitMQ
        </Link>
        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/support" && styles.navActive
          }`}
          href="/support"
        >
          Support Services
        </Link>
        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/fips" && styles.navActive
          }`}
          href="/fips"
        >
          FIPS
        </Link>
        <Link
          className={`${styles.navLink}  ${styles.mobDisplay}  ${
            pathName === "/stories" && styles.navActive
          }`}
          href="/stories"
        >
          Customer Stories
        </Link>
      </div>

      <div className={styles.btnContainer}>
        <Link href={"/contact"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
            className={color ? styles.btnSignup1 : styles.btnSignup}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
      {isMobile && (
        <div>
          <Image
            onClick={() => setShowModal(true)}
            height={45}
            width={183}
            className={styles.mobIcon}
            src={"/navLines.png"}
            alt="logo"
          />

          {showModal && (
            <div className={styles.modalContainer}>
              <Link
                onClick={handleClose}
                style={{ marginTop: "10vw" }}
                className={`${styles.navLink}  ${
                  pathName === "/" && styles.navActive
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={handleClose}
                className={`${styles.navLink}  ${
                  pathName === "/rabitmq" && styles.navActive
                }`}
                href="/rabitmq"
              >
                RabitMQ
              </Link>

              <Link
                onClick={handleClose}
                href={"/fips"}
                className={`${styles.navLink}  ${
                  pathName === "/fips" && styles.navActive
                }`}
              >
                FIPS
              </Link>
              <Link
                onClick={handleClose}
                className={`${styles.navLink}  ${
                  pathName === "/support" && styles.navActive
                }`}
                href="/support"
              >
                Support Services
              </Link>
              <Link
                onClick={handleClose}
                className={`${styles.navLink}  ${
                  pathName === "/MqServices" && styles.navActive
                }`}
                href="/MqServices"
              >
                MQ Services
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

// TO DO TODAY

// UNI

// WORK

// 1 SIGNUP API WITH PRISMA
// 3 SCREENS
// IRIVED 1 SCREEN
// STRIPE PAYMENT IMPLEMENTATION IN CODER DOST
