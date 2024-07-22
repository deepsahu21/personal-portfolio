import CustomCard from "@/components/project-card";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {Github, Instagram, Linkedin, MoveRight } from "lucide-react";
export default function HomePage() {
  return (
    <div className="lg:w-1/2 max-w-[600px] justify-center mx-auto px-10 sm:px-0 md:px-0">
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between items-center">
          <button className="font-bold border-b-2 text-lg hover:border-neutral-600 inline-block font-inter">
            Sidharth Hejamadi
          </button>
          <div className="flex gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={"https://www.instagram.com/sidharthhejamadi/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 hover:text-red-400" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={"https://github.com/HejSidharth"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 hover:text-gray-400" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={"https://www.linkedin.com/in/sidharth-hejamadi"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-blue-600" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div>
          <p className="font-inter text-base">
            <span className="italic font-newsreader">
              Designing, coding, and innovating.
            </span>{" "}
            This is what I do, I am Sidharth Hejamadi and I love making websites
            and solving problems. I attend the University of Urbana-Champaign
            studying Computer Science and Statistics.
          </p>
        </div>
        <Link
          to={"/projects"}
          className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600 flex items-center gap-2"
        >
          Featured Projects
          <MoveRight className="w-4 h-4"/>
          
        </Link>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
          <CustomCard
            title="Student Queue"
            description="A website created to queue students during tutoring classes."
            href="/projects/student-queue"
          />
          <CustomCard
            title="Trackalack"
            description="A website created to track homework assignments for fellow students"
            href="/projects/trackalack"
          />
          <CustomCard
            title="Notemon"
            description="A website created to save code snippits for later use"
            href="/projects/notemon"
          />
        </div>
        <button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600">
          Featured Experience
        </button>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
          <CustomCard
            title="Paraillel"
            description="SWE internship where I was responsible for optimizing the user flow"
            href="https://paraillel.com/"
          />
          <CustomCard
            title="OpenAQ"
            description="Worked on a project designing and developing an AQI education tool"
            href="https://openaq.org/"
          />
          <CustomCard
            title="Inclusive STEM"
            description="Worked on a project designing and developing an inclusive library"
            href="https://www.inclusivestem.org/"
          />
        </div>
        <Link to="https://blog.hejamadi.com">
        <button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600">
          My Blog
        </button>
        </Link>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
          <CustomCard
            title="Coming soon..."
            description="About how I made this website!"
          />
        </div>
      </div>
      <footer className="h-10"> {/* This is a box */}</footer>
    </div>
  );
}
