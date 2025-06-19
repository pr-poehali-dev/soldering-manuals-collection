import { useState } from "react";
import ProgramCard from "@/components/ProgramCard";
import MachineFilter from "@/components/MachineFilter";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

// Моковые данные программ
const programs = [
  {
    id: "pcb-001",
    name: "Плата блока питания БП-12В",
    machines: ["ERSA Selective", "PILLARHOUSE T6"],
    description: "Программа пайки силовых разъемов и контактных площадок",
    previewImage:
      "https://images.unsplash.com/photo-1581092918484-8313de5c6640?w=300",
  },
  {
    id: "pcb-002",
    name: "Контроллер двигателя",
    machines: ["ERSA Selective", "ACE Production"],
    description: "Селективная пайка микросхем и разъемов управления",
    previewImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300",
  },
  {
    id: "pcb-003",
    name: "Сенсорная панель",
    machines: ["PILLARHOUSE T6"],
    description: "Пайка тонких проводников и сенсорных элементов",
    previewImage:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=300",
  },
  {
    id: "pcb-004",
    name: "RF модуль связи",
    machines: ["ERSA Selective", "PILLARHOUSE T6", "ACE Production"],
    description: "Высокочастотные компоненты и экранированные разъемы",
    previewImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300",
  },
];

const Index = () => {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Получаем уникальные типы станков
  const availableMachines = Array.from(
    new Set(programs.flatMap((program) => program.machines)),
  ).sort();

  // Фильтруем программы
  const filteredPrograms = programs.filter((program) => {
    const matchesMachine =
      !selectedMachine || program.machines.includes(selectedMachine);
    const matchesSearch =
      !searchQuery ||
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesMachine && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Программы селективной пайки
          </h1>
          <p className="text-gray-600">
            Выберите программу для выполнения или просмотра инструкций
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск программ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full max-w-md"
            />
          </div>

          <MachineFilter
            selectedMachine={selectedMachine}
            onMachineChange={setSelectedMachine}
            availableMachines={availableMachines}
          />
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                id={program.id}
                name={program.name}
                machines={program.machines}
                previewImage={program.previewImage}
                description={program.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Программы не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска или фильтрации
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Статистика программ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {programs.length}
              </div>
              <div className="text-sm text-gray-600">Всего программ</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {availableMachines.length}
              </div>
              <div className="text-sm text-gray-600">Типов станков</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {filteredPrograms.length}
              </div>
              <div className="text-sm text-gray-600">Найдено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">94%</div>
              <div className="text-sm text-gray-600">Успешность</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
