import React from "react";
import styles from "./ProjectCard.module.css";


// Importing images
import image1 from "../../assets/projects/project.png";

// Add more imports for other images as needed

const images = [image1]; // Add more images to this array if needed

export const ProjectCard = ({ project: { title, imageSrc, description, skills } }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={title} // Use the title of the project for alt text
          className={styles.image}
        />
      ))}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
