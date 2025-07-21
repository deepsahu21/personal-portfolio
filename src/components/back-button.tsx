


import { Link } from "react-router-dom";

type BackButtonProps = {
  title: string;
  href: string;
};

const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <div className="px-10 hidden sm:block fixed">
        <Link
          className="text-white p-2  mr-4 font-newsreader italic flex gap-2"
          to={href}
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
          {title}
        </Link>
      </div>
  );
};

export default BackButton;