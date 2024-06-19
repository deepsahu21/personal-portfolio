import React from "react";
import ProjectPage from "@/pages/projects/ProjectPage";
import { ClerkCard, DaisyUICard, ReactCard, ShadCnCard, SupabaseCard, TailwindCard, ViteCard } from "./CardDetails";
import image1 from "@/assets/Trackalack/trackalacknew.png"
import image2 from "@/assets/Trackalack/trackalack2.png"


const Trackalack: React.FC = () => {
  const techStack = [
    ReactCard,
    ViteCard,
    DaisyUICard,
    ShadCnCard,
    TailwindCard,
    SupabaseCard,
    ClerkCard,
  ];

  return (
    <ProjectPage
      title="Trackalack"
      description="As a busy college student, I was having trouble keeping track of homework assignments and wanted to create a tool that would keep everything in one place. This prompted me to create Trackalack! This project took me weeks, as I was learning how to work with Relational databases. They can be pretty annoying, but the pain subsides over time. On top of making sure that the database works properly, I also had to work with very tricky frontend components which also made me split hairs, alas this website is functional."
      images={[image1, image2]}
      techStack={techStack}
      githubLink="https://github.com/HejSidharth/Trackalack"
      websiteLink="https://trackalack.com"
    />
  );
};

export default Trackalack;
