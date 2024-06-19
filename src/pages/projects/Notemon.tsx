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
      description="To earn additional income, I offer tutoring services. As a tutor, I was responsible for conducting office hours for an SAT preparation class. This role was enjoyable until the number of students in the Zoom meeting exceeded ten, resulting in a deluge of questions. Managing the influx of inquiries and maintaining the order in which questions were asked became increasingly challenging. This experience motivated me to develop an organized system to streamline the process Student Queue!"
      images={[image]}
      techStack={techStack}
      githubLink="https://github.com/your-repo"
      websiteLink="https://your-website.com"
    />
  );
};

export default Notemon;
