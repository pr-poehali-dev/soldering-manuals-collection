import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

// Моковые данные программ
const programsData = {
  "pcb-001": {
    name: "Плата блока питания БП-12В",
    machines: ["ERSA Selective", "PILLARHOUSE T6"],
    steps: [
      {
        id: 1,
        title: "Подготовка платы",
        description: "Очистить поверхность, проверить компоненты",
        image:
          "https://images.unsplash.com/photo-1581092918484-8313de5c6640?w=400",
      },
      {
        id: 2,
        title: "Установка в приспособление",
        description: "Зафиксировать плату в позиции XY: 125.5, 67.2",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      },
      {
        id: 3,
        title: "Пайка разъемов",
        description: "Температура 350°C, время контакта 3.2с",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400",
      },
      {
        id: 4,
        title: "Контроль качества",
        description: "Визуальный осмотр соединений",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
      },
    ],
  },
};

const ProgramInstruction = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const program = id ? programsData[id as keyof typeof programsData] : null;

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Программа не найдена
          </h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться к списку
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Все программы
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {program.name}
              </h1>
              <div className="flex gap-2 mt-2">
                {program.machines.map((machine) => (
                  <Badge key={machine} className="bg-blue-100 text-blue-800">
                    {machine}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Play" size={16} className="mr-2" />
              Выполнить программу
            </Button>
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать инструкцию
            </Button>
          </div>
        </div>

        {/* Instructions */}
        <div className="grid gap-6">
          {program.steps.map((step, index) => (
            <Card key={step.id} className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="CheckCircle" size={16} className="mr-2" />
                        Выполнено
                      </Button>
                      {index < program.steps.length - 1 && (
                        <Button size="sm">
                          <Icon name="ArrowRight" size={16} className="mr-2" />
                          Следующий шаг
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={step.image}
                      alt={`Инструкция для шага ${step.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramInstruction;
