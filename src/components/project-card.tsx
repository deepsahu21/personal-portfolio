import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ReactLogo from "@/assets/react.svg";
import TailwindLogo from "@/assets/tailwindcss.svg";
import SupabaseLogo from "@/assets/supabase-logo-icon.svg";
import AppwriteLogo from "@/assets/appwrite.svg";
import ClerkLogo from "@/assets/clerk.ico";
import TypescriptLogo from "@/assets/typescript.png";
import OpenAILogo from "@/assets/openai-icon.svg"
import FlaskLogo from "@/assets/pocoo_flask-icon.svg"
import SolidLogo from "@/assets/solidjs.png"
import SCSSLogo from "@/assets/scss.png"
import FigmaLogo from "@/assets/figma.ico"
import ChakraLogo from "@/assets/Chakra.png"

import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  stack?: string[];
};

interface Dictionary {
  [key: string]: { name: string; img: string };
}

let dStack: Dictionary = {
  "React": { name: "React", img: ReactLogo },
  "Tailwind": { name: "Tailwind", img: TailwindLogo },
  "Supabase": { name: "Supabase", img: SupabaseLogo },
  "Appwrite": { name: "Appwrite", img: AppwriteLogo },
  "Clerk": { name: "Clerk", img: ClerkLogo },
  "Typescript": { name: "Typescript", img: TypescriptLogo },
  "OpenAI": { name: "OpenAI", img: OpenAILogo },
  "Flask": { name: "Flask", img: FlaskLogo },
  "Solid": { name: "Solid", img: SolidLogo },
  "SCSS": { name: "SCSS", img: SCSSLogo },
  "Figma": { name: "Figma", img: FigmaLogo },
  "Chakra": { name: "Chakra", img: ChakraLogo },
};

const CustomCard: React.FC<CardProps> = ({
  title,
  description,
  href,
  stack,
}) => {
  const card = (
    <Card>
      <CardHeader>
        <CardTitle className="text-base inline-flex ">
          <span className="border-b-2 hover:border-neutral-600">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          {stack &&
            stack.map((tech, index) => (
              <TooltipProvider key={index}>
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="">
                      <img
                        className="h-4 w-4 grayscale hover:grayscale-0 hover:rotate-6"
                        src={dStack[tech]?.img}
                        alt={tech}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{dStack[tech]?.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          {stack && (
            <div className="border rounded-2xl grayscale p-1">
              <MoreHorizontal className="w-2 h-2" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return href ? (
    <Link to={href} className="flex">
      {card}
    </Link>
  ) : (
    card
  );
};

export default CustomCard;

export function StudentQueueCard() {
  return (
    <CustomCard
      title="Student Queue"
      description="A website created to queue students during tutoring classes."
      href="/projects/student-queue"
      stack={["React", "Tailwind", "Supabase", "Clerk"]}
    />
  );
}

export function TrackalackCard() {
  return (
    <CustomCard
      title="Trackalack"
      description="A website created to track homework assignments for fellow students"
      href="/projects/trackalack"
      stack={["React", "Clerk", "Tailwind", "Supabase"]}
    />
  );
}

export function NotemonCard() {
  return (
    <CustomCard
      title="Notemon"
      description="A website created to save code snippets for later use"
      href="/projects/notemon"
      stack={["React", "Clerk", "Tailwind", "Appwrite"]}
    />
  );
}

export function TaskmonCard() {
  return (
    <CustomCard
      title="Taskmon"
      description="A website created to store tasks with productivity and aesthetics"
      href="/projects/taskmon"
      stack={["React", "Clerk", "Tailwind", "Appwrite"]}
    />
  );
}

export function AIWeatherCard() {
  return (
    <CustomCard
      title="AI Weather App"
      description="An AI weather app that recommends what to wear given the weather"
      href="https://github.com/HejSidharth/HonestWeather"
      stack={["OpenAI"]}
    />
  );
}

export function ParaillelCard() {
  return (
    <CustomCard
      title="Paraillel"
      description="SWE internship where I was responsible for optimizing the user flow"
      href="https://paraillel.com/"
      stack={["React", "Flask", "Tailwind"]}
    />
  );
}

export function OpenAQCard() {
  return (
    <CustomCard
      title="OpenAQ"
      description="Worked on a project designing and developing an AQI education tool"
      href="https://openaq.org/"
      stack={["Solid", "SCSS", "Figma"]}
    />
  );
}

export function InclusiveStemCard() {
  return (
    <CustomCard
      title="Inclusive STEM"
      description="Worked on a project designing and developing an inclusive library"
      href="https://www.inclusivestem.org/"
      stack={["Typescript", "React", "Chakra"]}
    />
  );
}


export function TeamPayCard() {
  return (
    <CustomCard
      title="Team Pay"
      description="Worked on a SAAS that helped business owners track pay"
      href="/projects/team-pay"
      stack={["Typescript", "React", "Supabase", "Tailwind"]}
    />
  );
}