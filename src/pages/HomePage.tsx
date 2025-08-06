import {
  MlModelDeveloperCard,
  SatelliteResearchCard,
  StoratoCard,
  StockAppCard,
  UnetEdgeDetectionCard,
  WeatherAppCard,
} from "@/components/project-card";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="lg:w-1/2 max-w-[600px] justify-center mx-auto px-10 sm:px-0 md:px-0">
        <div className="flex gap-4 flex-col">
          <div className="flex justify-between items-center">
            <button className="font-bold border-b-2 text-lg hover:border-neutral-600 inline-block font-inter">
              Deep Sahu
            </button>
            <div className="flex gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={"https://github.com/deepsahu21"}
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
                      href={"https://www.linkedin.com/in/deepsahu1/"}
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
                Developing, optimizing, and engineering systems.
              </span>{" "}
               I'm Deep Sahu, a Data Science student at the{" "}
              <span className="italic font-newsreader">
                University of Georgia
              </span>{" "}
              passionate about machine learning and building innovative technology. With a strong foundation in both software development and machine learning, I enjoy creating systems that solve real-world problems and deliver meaningful impact.
            </p>
          </div>
          <Link
            to="/experience"
            className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600 flex items-center gap-2 group"
          >
            Featured Experience
            <span className="text-xs text-neutral-400 ml-2 group-hover:text-neutral-200">
              (Click to see more)
            </span>
            <MoveRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
            <SatelliteResearchCard />
            <StoratoCard/>
            <MlModelDeveloperCard  />
          </div>
          <Link
            to="/projects"
            className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600 flex items-center gap-2 group"
          >
            Featured Projects
            <span className="text-xs text-neutral-400 ml-2 group-hover:text-neutral-200">
              (Click to see more)
            </span>
            <MoveRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
            <UnetEdgeDetectionCard />
            <WeatherAppCard />
            <StockAppCard />
          </div>
        </div>
        <footer className="h-10"> {/* This is a box */}</footer>
      </div>
    </motion.div>
  );
}
