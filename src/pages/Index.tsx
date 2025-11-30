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
    name: "Т-90М «Прорыв»",
    type: "Основной боевой танк",
    era: "Современность",
    crew: 3,
    weight: "46 тонн",
    speed: "60 км/ч",
    armor: "Динамическая защита «Реликт»",
    mainGun: "125-мм гладкоствольная пушка 2А46М-5",
    description: "Модернизированная версия танка Т-90, оснащенная современными системами управления огнем и улучшенной броней.",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80"
  },
  {
    id: 2,
    name: "Армата Т-14",
    type: "Танк нового поколения",
    era: "Будущее",
    crew: 3,
    weight: "55 тонн",
    speed: "80-90 км/ч",
    armor: "Многослойная композитная броня",
    mainGun: "125-мм гладкоствольная пушка 2А82-1М",
    description: "Революционная платформа с необитаемой башней и передовыми технологиями защиты и огневой мощи.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  },
  {
    id: 3,
    name: "Т-34-85",
    type: "Средний танк",
    era: "Вторая мировая война",
    crew: 5,
    weight: "32 тонны",
    speed: "55 км/ч",
    armor: "Наклонная броня 45-90 мм",
    mainGun: "85-мм пушка ЗИС-С-53",
    description: "Легендарный советский танк Великой Отечественной войны, признанный одним из лучших танков своего времени.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80"
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