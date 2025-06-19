import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Program {
  id: number;
  name: string;
  description: string;
  machineType: string;
  status: string;
  createdDate: string;
  author: string;
}

interface ProgramCardProps {
  program: Program;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "testing":
      return "bg-yellow-100 text-yellow-800";
    case "archived":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "active":
      return "Активная";
    case "testing":
      return "Тестирование";
    case "archived":
      return "Архивная";
    default:
      return status;
  }
};

const getMachineTypeIcon = (type: string) => {
  switch (type) {
    case "mill":
      return "Cog";
    case "lathe":
      return "Circle";
    case "plasma":
      return "Zap";
    case "laser":
      return "Lightbulb";
    default:
      return "Wrench";
  }
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Icon
              name={getMachineTypeIcon(program.machineType)}
              size={20}
              className="text-blue-600"
            />
            {program.name}
          </CardTitle>
          <Badge className={getStatusColor(program.status)}>
            {getStatusText(program.status)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4">{program.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Icon name="User" size={14} />
            {program.author}
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={14} />
            {program.createdDate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
