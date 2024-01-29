import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroimage.png" // Import the hero image


export const Hero = () => {
  // Example usage of the getImageUrl function
  

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sailaja Nerella</h1>
        <p className={styles.description}>
          I'm a Mern Stack Developer using React and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:nerellasailaja5@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage} // Use the imported hero image directly
        alt="Sailaja Nerella - Mern Stack Developer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
