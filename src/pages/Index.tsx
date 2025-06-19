import { useState } from "react";
import MachineFilter from "@/components/MachineFilter";
import ProgramCard from "@/components/ProgramCard";
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

const mockPrograms: Program[] = [
  {
    id: 1,
    name: "Корпус редуктора",
    description:
      "Программа для фрезерования корпуса редуктора из алюминиевого сплава",
    machineType: "mill",
    status: "active",
    createdDate: "15.06.2024",
    author: "А. Иванов",
  },
  {
    id: 2,
    name: "Вал приводной",
    description: "Токарная обработка приводного вала с резьбовыми соединениями",
    machineType: "lathe",
    status: "testing",
    createdDate: "12.06.2024",
    author: "М. Петров",
  },
  {
    id: 3,
    name: "Пластина декоративная",
    description: "Лазерная резка декоративных пластин из нержавеющей стали",
    machineType: "laser",
    status: "active",
    createdDate: "10.06.2024",
    author: "Е. Сидорова",
  },
  {
    id: 4,
    name: "Кронштейн крепежный",
    description: "Плазменная резка кронштейнов из листовой стали",
    machineType: "plasma",
    status: "archived",
    createdDate: "08.06.2024",
    author: "В. Козлов",
  },
  {
    id: 5,
    name: "Фланец соединительный",
    description: "Комплексная обработка фланца на фрезерном станке",
    machineType: "mill",
    status: "active",
    createdDate: "05.06.2024",
    author: "Н. Морозов",
  },
  {
    id: 6,
    name: "Втулка направляющая",
    description: "Токарная обработка направляющих втулок высокой точности",
    machineType: "lathe",
    status: "testing",
    createdDate: "03.06.2024",
    author: "Д. Лебедев",
  },
];

export default function Index() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredPrograms = mockPrograms.filter((program) => {
    const typeMatch =
      selectedType === "all" || program.machineType === selectedType;
    const statusMatch =
      selectedStatus === "all" || program.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  const handleReset = () => {
    setSelectedType("all");
    setSelectedStatus("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Icon name="Cpu" size={32} className="text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Программы ЧПУ
              </h1>
              <p className="text-gray-600 mt-1">
                Управление программами для станков с числовым программным
                управлением
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MachineFilter
          selectedType={selectedType}
          selectedStatus={selectedStatus}
          onTypeChange={setSelectedType}
          onStatusChange={setSelectedStatus}
          onReset={handleReset}
        />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Всего программ</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockPrograms.length}
                </p>
              </div>
              <Icon name="FileText" size={24} className="text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Активные</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockPrograms.filter((p) => p.status === "active").length}
                </p>
              </div>
              <Icon name="CheckCircle" size={24} className="text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">На тестировании</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {mockPrograms.filter((p) => p.status === "testing").length}
                </p>
              </div>
              <Icon name="TestTube" size={24} className="text-yellow-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Архивные</p>
                <p className="text-2xl font-bold text-gray-600">
                  {mockPrograms.filter((p) => p.status === "archived").length}
                </p>
              </div>
              <Icon name="Archive" size={24} className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Программы ({filteredPrograms.length})
          </h2>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                name="Search"
                size={48}
                className="text-gray-400 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Программы не найдены
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить фильтры поиска
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
