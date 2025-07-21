import React from "react";
import ProjectPage from "@/pages/projects/ProjectPage";
import image from "@/assets/notemon.jpg";
import { AppwriteCard, ClerkCard, DaisyUICard, ReactCard, TailwindCard, TypescriptCard, ViteCard } from "./CardDetails";

const Notemon: React.FC = () => {
  const techStack = [
    ReactCard,
    ViteCard,
    TypescriptCard,
    DaisyUICard,
    TailwindCard,
    AppwriteCard,
    ClerkCard,
  ];

  return (
    <ProjectPage
      title="Notemon"
      description="I hate it when I start a new coding project and need to go back to my old repositories and copy code that would help with the setup. This is why I built Notemon, an application to save your code snippits. This was my first project working with additional libraries such as Tiptap. Really fun project! "
      images={[image]}
      techStack={techStack}
      githubLink="https://github.com/HejSidharth/Notemon"
      websiteLink="https://notemon.netlify.app"
    />
  );
};

export default Notemon;
