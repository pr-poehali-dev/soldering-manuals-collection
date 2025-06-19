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
  selectedType: string;
  selectedStatus: string;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

export default function MachineFilter({
  selectedType,
  selectedStatus,
  onTypeChange,
  onStatusChange,
  onReset,
}: MachineFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Icon name="Filter" size={20} />
        Фильтры
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Тип станка</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="mill">Фрезерный</SelectItem>
              <SelectItem value="lathe">Токарный</SelectItem>
              <SelectItem value="plasma">Плазменный</SelectItem>
              <SelectItem value="laser">Лазерный</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Статус</label>
          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Все статусы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="active">Активные</SelectItem>
              <SelectItem value="testing">На тестировании</SelectItem>
              <SelectItem value="archived">Архивные</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button variant="outline" onClick={onReset} className="w-full">
            <Icon name="X" size={16} />
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  );
}
