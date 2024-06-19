import React from "react";
import ProjectPage from "@/pages/projects/ProjectPage";
import image from "@/assets/notemonyuh.png";
import { ClerkCard, DaisyUICard, ReactCard, TailwindCard, ViteCard } from "./CardDetails";

const Taskmon: React.FC = () => {
  const techStack = [
    ReactCard,
    ViteCard,
    DaisyUICard,
    TailwindCard,
    ClerkCard,
  ];

  return (
    <ProjectPage
      title="Taskmon"
      description="After finally learning some React, I really wanted to work with a database. So I made Taskmon! I wanted to make a simple application that could store my tasks. Yeah, I know there are a million to-do list tutorials online, but this one I made using documentation and sheer patience. I learned A LOT about databases, authentication, and providers. Very cool project, will recommend!"
      images={[image]}
      techStack={techStack}
      githubLink="https://github.com/HejSidharth/Taskmon"
      websiteLink="https://taskmon.netlify.com"
    />
  );
};

export default Taskmon;
