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
// import ShadcnLogo from "@/assets/shadcn-ui.png";
// import DaisyLogo from "@/assets/daisyui.svg";
import SupabaseLogo from "@/assets/supabase-logo-icon.svg";
// import ViteLogo from "@/assets/vite.svg";
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
  [key: string]: string;
}

let dStack: Dictionary = {
  "/src/assets/react.svg": "React",
  "/src/assets/tailwindcss.svg": "Tailwind CSS",
  "/src/assets/shadcn-ui.png": "ShadCN",
  "/src/assets/daisyui.svg": "DaisyUI",
  "/src/assets/supabase-logo-icon.svg": "Supabase",
  "/src/assets/vite.svg": "Vite",
  "/src/assets/appwrite.svg": "Appwrite",
  "/src/assets/clerk.ico": "Clerk",
  "/src/assets/typescript.png": "Typescript",
  "/src/assets/openai-icon.svg?t=1721973352133": "Open AI",
  "/src/assets/pocoo_flask-icon.svg?t=1721973926732": "Flask",
  "/src/assets/solidjs.png": "SolidJS",
  "/src/assets/scss.png": "SCSS",
  "/src/assets/figma.ico": "Figma",
  "/src/assets/Chakra.png": "Chakra",
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
            stack.map((svg, index) => (
              <TooltipProvider key={index}>
              <Tooltip key={index}>
                <TooltipTrigger asChild>
              <div className="" >
                <img
                  className="h-4 w-4 grayscale hover:grayscale-0 hover:rotate-6"
                  src={svg}
                  alt=""
                />
              </div>
              </TooltipTrigger>
              <TooltipContent>
                  <p>{dStack[svg]}</p>
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            ))}
            {stack &&
            ( 
              <div className="border rounded-2xl grayscale p-1">
              <MoreHorizontal className="w-2 h-2"/>

              </div>
            )
            }
            
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
      stack={[ReactLogo, TypescriptLogo, TailwindLogo, SupabaseLogo]}
    />
  );
}

export function TrackalackCard() {
  return (
  <CustomCard
    title="Trackalack"
    description="A website created to track homework assignments for fellow students"
    href="/projects/trackalack"
    stack={[ReactLogo, ClerkLogo, TailwindLogo, SupabaseLogo]}
  />
  );
}

export function NotemonCard() {
  return (
    <CustomCard
            title="Notemon"
            description="A website created to save code snippits for later use"
            href="/projects/notemon"
            stack={[ReactLogo, ClerkLogo, TailwindLogo, AppwriteLogo]}
          />
  )
}

export function TaskmonCard() {
  return (
    <CustomCard
              title="Taskmon"
              description="A website created to store tasks with productivity and aesthetics "
              href="/projects/taskmon"
              stack={[ReactLogo, ClerkLogo, TailwindLogo, AppwriteLogo]}
            />
  )
}

export function AIWeatherCard() {
  return (
    <CustomCard
              title="AI Weather App"
              description="An AI weather app that reccomends what to wear given the weather"
              href="https://github.com/HejSidharth/HonestWeather"
              stack={[OpenAILogo]}
            />
  )
}

export function ParaillelCard() {
  return (
    <CustomCard
    title="Paraillel"
    description="SWE internship where I was responsible for optimizing the user flow"
    href="https://paraillel.com/"
    stack={[ReactLogo, FlaskLogo, TailwindLogo]}
  />
  )
}


export function OpenAQCard() {
  return (
    <CustomCard
    title="OpenAQ"
    description="Worked on a project designing and developing an AQI education tool"
    href="https://openaq.org/"
    stack={[SolidLogo, SCSSLogo, FigmaLogo]}
  />
  )
}

export function InclusiveStemCard() {
  return (
    <CustomCard
    title="Inclusive STEM"
    description="Worked on a project designing and developing an inclusive library"
    href="https://www.inclusivestem.org/"
    stack={[TypescriptLogo,ReactLogo, ChakraLogo  ]}
  />
  )
}