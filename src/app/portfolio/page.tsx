import type { NextPage } from "next";
import PortfolioCard from "@/components/card/PortfolioCard";
import { PortfolioCardProps } from "@/types/types";
const Portfolio: NextPage = () => {
  const portfolioData: PortfolioCardProps[] = [
    {
      title: "New Dynamic Project",
      techStack: "React, TypeScript",
      role: "Full Stack Developer",
      imageUrl: "/imgs/portfolio/1.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>

          <div className="row">
            {/* Dynamic Portfolio Items generated from the imported PortfolioCard component */}
            {portfolioData.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
