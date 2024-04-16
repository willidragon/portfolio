// PortfolioCard.tsx
import React from "react";
import { PortfolioCardProps } from "@/types/types";
import styles from "./PortfolioCard.module.css"; // Ensure path is correct

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  techStack,
  role,
  imageUrl,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Background image styling applied here */}
      </div>
      <div className={styles.content}>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm font-medium text-gray-500 mt-2">
          Tech Stack: {techStack}
        </p>
        <p className="text-sm font-medium text-gray-500">Role: {role}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
