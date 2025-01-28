import { Link } from "react-router-dom";
import { Progress } from "./ui/progress";

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
  daysLeft: number;
}

const CampaignCard = ({
  id,
  title,
  description,
  imageUrl,
  raised,
  goal,
  daysLeft,
}: CampaignCardProps) => {
  const progress = (raised / goal) * 100;

  return (
    <Link
      to={`/campaign/${id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg animate-fade-up"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4">
          <Progress value={progress} className="h-2" />
          <div className="mt-2 flex justify-between text-sm">
            <span className="font-medium text-gray-900">
              ${raised.toLocaleString()} raised
            </span>
            <span className="text-gray-500">{daysLeft} days left</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;