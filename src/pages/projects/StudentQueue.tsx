import React from "react";
import ProjectPage from "@/pages/projects/ProjectPage";
import image from "@/assets/StudentQueue/studentqueuenew.png";
import image2 from "@/assets/StudentQueue/student-queue1.png"
import { ReactCard, ShadCnCard, SupabaseCard, TailwindCard, TypescriptCard, ViteCard } from "./CardDetails";

const StudentQueue: React.FC = () => {
  const techStack = [
    ReactCard,
    ViteCard,
    TypescriptCard,
    TailwindCard,
    SupabaseCard,
    ShadCnCard,
  ];

  return (
    <ProjectPage
      title="Student Queue"
      description="As a tutor, it is a pain to keep track of the infinite questions that people keep asking. To solve this very problem, I created Student Queue, a website made to queue student's questions. I made this website with a quick and simple Supabase database garnished with some ShadCN components. The website works really well as I finally can answer many more questions! 10/10 will recommend"
      images={[image, image2]}
      techStack={techStack}
      websiteLink="https://queuestudent.netlify.app"
    />
  );
};

export default StudentQueue;
