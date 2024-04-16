// PortfolioCard.tsx
import React from "react";
import { PortfolioCardProps } from "@/types/types";
import styles from "./PortfolioCard.module.css"; // Ensure path is correct

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  techStack,
  role,
  imageUrl,
  url,
  description, // Make sure to destructure the description from props
}) => {
  return (
    <a
      href={url}
      className={styles.cardContainer}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Background image styling applied here */}
      </div>
      <div className={styles.content}>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-sm font-medium text-gray-500">{role}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm font-medium text-gray-500">TechStack:</span>
          {techStack.map((techImageUrl, index) => (
            <img
              key={index}
              src={techImageUrl}
              alt={`Technology ${index + 1}`}
              className="h-6 w-auto"
            />
          ))}
        </div>
        <hr className="my-2 border-gray-300" /> {/* Divider */}
        <div className="text-sm font-medium text-black mt-2">{description}</div>
      </div>
    </a>
  );
};

export default PortfolioCard;
