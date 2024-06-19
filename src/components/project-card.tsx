import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

const CustomCard: React.FC<CardProps> = ({ title, description, href }) => {
  const card = (
    <Card>
      <CardHeader>
        <CardTitle className="text-base inline-flex ">
          <span className="border-b-2 hover:border-neutral-600">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );

  return href ? <Link to={href} className="flex">{card}</Link> : card;
};

export default CustomCard;