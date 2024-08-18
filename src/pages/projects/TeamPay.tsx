import React from "react";
import ProjectPage from "@/pages/projects/ProjectPage";
import image from "@/assets/TeamPayHome.png";
import { ReactCard, ShadCnCard, SupabaseCard, TailwindCard, ViteCard } from "./CardDetails";

const TeamPay: React.FC = () => {
  const techStack = [
    ReactCard,
    ViteCard,
    TailwindCard,
    SupabaseCard,
    ShadCnCard,

  ];

  return (
    <ProjectPage
      title="Team Pay"
      description="Working under a small business, I quickly learned that tracking pay for small business owners is a pain. Usually using several spreadsheets, these business owners have to spend hours bookkeeping the expenses related to their business. To solve this problem, I came up with Team Pay: a website that allows business owners to add employees to track their payment."
      images={[image]}
      techStack={techStack}
      websiteLink="https://pay.hejamadi.com"
    />
  );
};

export default TeamPay;
