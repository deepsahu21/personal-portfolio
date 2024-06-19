import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";



type CardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

const StackCard: React.FC<CardProps> = ({ title, description, href, image }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-3">
        <img className="w-4 h-4" src={image} alt="" />
          <Link to={href}>
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StackCard;