import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Tank {
  id: number;
  name: string;
  type: string;
  era: string;
  crew: number;
  weight: string;
  speed: string;
  armor: string;
  mainGun: string;
  description: string;
  image: string;
}

const tanks: Tank[] = [
  {
    id: 1,
    name: "PL-01 Concept",
    type: "Легкий танк будущего",
    era: "Будущее",
    crew: 3,
    weight: "35 тонн",
    speed: "70 км/ч",
    armor: "Модульная композитная броня",
    mainGun: "120-мм автоматическая пушка",
    description: "Польский концепт легкого танка с технологией активной маскировки и необитаемой башней.",
    image: "https://cdn.poehali.dev/files/654ef520-61cc-4fb6-8130-591da6bb919e.jpg"
  },
  {
    id: 2,
    name: "M1A2 Abrams",
    type: "Основной боевой танк",
    era: "Современность",
    crew: 4,
    weight: "62 тонны",
    speed: "67 км/ч",
    armor: "Композитная броня Chobham",
    mainGun: "120-мм гладкоствольная пушка M256",
    description: "Американский основной боевой танк третьего поколения с газотурбинным двигателем.",
    image: "https://cdn.poehali.dev/files/f27d69dc-077d-452f-889f-811884ba538a.jpg"
  },
  {
    id: 3,
    name: "Leopard 2A7",
    type: "Основной боевой танк",
    era: "Современность",
    crew: 4,
    weight: "67 тонн",
    speed: "72 км/ч",
    armor: "Многослойная композитная броня",
    mainGun: "120-мм гладкоствольная пушка Rh-120",
    description: "Немецкий танк с превосходной точностью огня и высокой подвижностью.",
    image: "https://cdn.poehali.dev/files/f27d69dc-077d-452f-889f-811884ba538a.jpg"
  }
];

const Index = () => {
  const [selectedTank, setSelectedTank] = useState<Tank | null>(null);
  const [filterEra, setFilterEra] = useState<string>("Все");

  const eras = ["Все", "Вторая мировая война", "Современность", "Будущее"];

  const filteredTanks = filterEra === "Все" 
    ? tanks 
    : tanks.filter(tank => tank.era === filterEra);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzI0MjQyNCIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight">
            ТАНКОСТРОЕНИЕ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Исследуйте эволюцию бронетехники от классических моделей до футуристических концептов
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Icon name="Crosshair" size={20} className="mr-2" />
              Исследовать модели
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Info" size={20} className="mr-2" />
              О проекте
            </Button>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {eras.map((era) => (
            <Button
              key={era}
              variant={filterEra === era ? "default" : "outline"}
              onClick={() => setFilterEra(era)}
              className={filterEra === era ? "bg-primary text-primary-foreground" : "border-border hover:bg-muted"}
            >
              {era}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTanks.map((tank, index) => (
            <Card 
              key={tank.id}
              className="overflow-hidden hover-scale cursor-pointer border-border bg-card animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedTank(tank)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tank.image} 
                  alt={tank.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {tank.era}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">{tank.name}</CardTitle>
                <p className="text-muted-foreground">{tank.type}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>Экипаж: {tank.crew} чел.</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Weight" size={16} />
                    <span>Вес: {tank.weight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Gauge" size={16} />
                    <span>Скорость: {tank.speed}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedTank} onOpenChange={() => setSelectedTank(null)}>
        <DialogContent className="max-w-4xl bg-card border-border max-h-[90vh] overflow-y-auto">
          {selectedTank && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-card-foreground">{selectedTank.name}</DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground">
                  {selectedTank.type} • {selectedTank.era}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img 
                  src={selectedTank.image} 
                  alt={selectedTank.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                <div className="mt-6 space-y-4">
                  <p className="text-foreground leading-relaxed">{selectedTank.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon name="Users" size={20} />
                        <span className="font-medium">Экипаж</span>
                      </div>
                      <p className="text-xl font-bold text-foreground">{selectedTank.crew} человек</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon name="Weight" size={20} />
                        <span className="font-medium">Боевая масса</span>
                      </div>
                      <p className="text-xl font-bold text-foreground">{selectedTank.weight}</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon name="Gauge" size={20} />
                        <span className="font-medium">Макс. скорость</span>
                      </div>
                      <p className="text-xl font-bold text-foreground">{selectedTank.speed}</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon name="Shield" size={20} />
                        <span className="font-medium">Броня</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">{selectedTank.armor}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-primary/10 border border-primary rounded-lg mt-4">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Icon name="Crosshair" size={20} />
                      <span className="font-medium">Основное вооружение</span>
                    </div>
                    <p className="text-foreground">{selectedTank.mainGun}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-card border-t border-border mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">ТАНКОСТРОЕНИЕ</h3>
          <p className="text-muted-foreground">
            Исследуйте историю и будущее бронетанковой техники
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;