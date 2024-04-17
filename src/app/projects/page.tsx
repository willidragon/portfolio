import type { NextPage } from "next";
import PortfolioCard from "@/components/card/PortfolioCard";
import { PortfolioCardProps } from "@/types/types";
import AnimatedWavyLine from "@/components/line/AnimatedWavyLine";
const Portfolio: NextPage = () => {
  const portfolioData: PortfolioCardProps[] = [
    {
      title: "中科Life租房網",
      techStack: ["portfolio/imgs/techstack/wp.png", "imgs/techstack/divi.png"],
      role: "Frontend Developer, Visual Designer",
      imageUrl: "imgs/portfolio/renthouse.png",
      url: "http://3.108.53.183/",
      description:
        "This project involves creating a responsive website using Wordpress and Divi theme. I worked with another backend engineer to properly set up various api endpoints.",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container max-w-custom mx-auto">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
              <AnimatedWavyLine
                text="xxxxxxxxxxxxxx"
                colorClass="wavyLine-yellow"
              />
            </div>
          </div>
          <div className="row">
            {portfolioData.map((project, index) => (
              <>
                <PortfolioCard key={index} {...project} />
                <div style={{ height: "10px" }}>&nbsp;</div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
