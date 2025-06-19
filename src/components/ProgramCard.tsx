import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ProgramCardProps {
  id: string;
  name: string;
  machines: string[];
  previewImage?: string;
  description?: string;
}

const ProgramCard = ({
  id,
  name,
  machines,
  previewImage,
  description,
}: ProgramCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/program/${id}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border-gray-200"
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
          {previewImage ? (
            <img
              src={previewImage}
              alt={`Превью программы ${name}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="text-gray-400 text-sm">Превью программы</div>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        )}
        <div className="flex flex-wrap gap-1">
          {machines.map((machine) => (
            <Badge
              key={machine}
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-800"
            >
              {machine}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
