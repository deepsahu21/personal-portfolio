import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

const CustomCard: React.FC<CardProps> = ({ title, description, href }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base inline-flex ">
        {href ? (
            <Link to={href} className="border-b-2 hover:border-neutral-600">
              {title}
            </Link>
          ) : (
            <span className="border-b-2 hover:border-neutral-600">{title}</span> // fallback if href is not provided
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CustomCard;