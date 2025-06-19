import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface MachineFilterProps {
  selectedMachine: string;
  onMachineChange: (machine: string) => void;
  availableMachines: string[];
}

const MachineFilter = ({
  selectedMachine,
  onMachineChange,
  availableMachines,
}: MachineFilterProps) => {
  const handleClearFilter = () => {
    onMachineChange("");
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        <Icon name="Filter" size={20} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          Фильтр по станкам:
        </span>
      </div>

      <Select value={selectedMachine} onValueChange={onMachineChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Все станки" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">Все станки</SelectItem>
          {availableMachines.map((machine) => (
            <SelectItem key={machine} value={machine}>
              {machine}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedMachine && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearFilter}
          className="text-gray-600 hover:text-gray-900"
        >
          <Icon name="X" size={16} className="mr-1" />
          Сброс
        </Button>
      )}
    </div>
  );
};

export default MachineFilter;
