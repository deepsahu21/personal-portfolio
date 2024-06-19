import { Link } from "react-router-dom";
import { Github, AppWindow } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StackCard from "@/components/stack-card";
import { CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

interface TechStackItem {
  title: string;
  href: string;
  description: string;
  image: string;
}

interface ProjectPageProps {
  title: string;
  description: string;
  images: string[];
  techStack: TechStackItem[];
  githubLink?: string;
  websiteLink?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  images,
  techStack,
  githubLink,
  websiteLink,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);



  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <div className="px-10 hidden sm:block fixed">
        <Link
          className="text-white p-2  mr-4 font-newsreader italic flex gap-2"
          to={"/projects"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-undo-2"
          >
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
          Projects
        </Link>
      </div>
      <div className="lg:w-1/2 max-w-[600px] justify-center mx-auto px-10 sm:px-0 md:px-0">
        <div className="flex gap-4 flex-col">
        <Link
              className="text-white p-2 sm:hidden mr-4 font-newsreader italic flex gap-2 translate-x-[-20px] translate-y-[-30px]"
              to={"/projects"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-undo-2"
              >
                <path d="M9 14 4 9l5-5" />
                <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
              </svg>
              Projects
            </Link>
          <div className="flex justify-between items-center">
            <button className="font-bold border-b-2 text-lg hover:border-neutral-600 inline-block font-inter">
              {title}
            </button>
            <div className="flex gap-4">
              {websiteLink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AppWindow className="hover:text-border" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Visit Website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {githubLink && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="hover:text-border" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
          <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                className="rounded-md border-2 shadow-lg"
                src={image}
                alt={`${title} image`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:flex hidden" />
        <CarouselNext className="sm:flex hidden" />
      </Carousel>
          <div className="text-center text-sm text-muted-foreground">
            {current} of {count}
          </div>
          <div>
            <CardDescription className="font-inter text-base pl-1 leading-7">
              {description}
            </CardDescription>
          </div>
          <button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-neutral-600">
            Tech Stack
          </button>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 mb-10">
            {techStack.map((tech, index) => (
              <StackCard
                key={index}
                title={tech.title}
                href={tech.href}
                description={tech.description}
                image={tech.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
