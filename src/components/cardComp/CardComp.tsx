import React from "react";
import { motion } from "framer-motion";
import styles from "./cardComp.module.css";

const CardComp = ({ Heading = "", Desc = "", btnText = "", stylee = {} }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        gap: "4vw",
        textAlign: "center",
        ...stylee,
      }}
    >
      <div
        style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
        className={styles.heading1}
      >
        {Heading}
      </div>
      <div
        style={{ width: "80%", alignSelf: "center" }}
        className={styles.text2}
      >
        {Desc}
      </div>
      {!btnText ? null : (
        <motion.button
          style={{
            marginBottom: "10vw",
            width: "auto",
            alignSelf: "center",
            height: "8vw",
          }}
          key={"id45"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.91 }}
          className={styles.btnSignup}
        >
          {btnText}
        </motion.button>
      )}
    </div>
  );
};

export default CardComp;
