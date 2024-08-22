// "use client";
import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import { colors } from "../../utils/Theme";

const BlogPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "99vw" }}>
      <Image
        alt="abt"
        height={896}
        width={1920}
        style={{ width: "100vw", height: "auto", opacity: 0.3 }}
        src={"/headerPic.png"}
      />
      <div className={`${styles.header} ${styles.alignCenter}`}>
        <span className={styles.head1}>
          Our <span style={{ color: colors.primary }}>Blogs</span>
        </span>
      </div>
    </div>
  );
};
export default BlogPage;
