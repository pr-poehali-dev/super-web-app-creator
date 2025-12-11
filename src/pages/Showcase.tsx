import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Showcase = () => {
  const showcaseApps = [
    {
      id: 1,
      name: "FitTrack Pro",
      category: "health",
      description: "Комплексное приложение для отслеживания фитнеса, питания и здоровья",
      image: "https://cdn.poehali.dev/projects/b4f77c05-1d18-4d76-8e72-89075a7152d4/files/53bfd2e9-f29f-4ac2-a407-e84e9770cb0a.jpg",
      stats: {
        users: "150K+",
        rating: 4.8,
        downloads: "500K+"
      },
      features: [
        "Трекинг тренировок с GPS",
        "Дневник питания и калорий",
        "Персональные планы тренировок",
        "Интеграция с умными часами",
        "Социальная сеть спортсменов"
      ],
      tech: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      timeline: "6 недель разработки",
      testimonial: "Приложение изменило мою жизнь! Сбросил 15 кг за 3 месяца",
      author: "Дмитрий, Москва"
    },
    {
      id: 2,
      name: "ShopEase",
      category: "business",
      description: "E-commerce платформа с AI-рекомендациями и удобной корзиной",
      image: "https://cdn.poehali.dev/projects/b4f77c05-1d18-4d76-8e72-89075a7152d4/files/875f9298-c243-4c96-a4a5-b9e997c6de57.jpg",
      stats: {
        users: "200K+",
        rating: 4.9,
        downloads: "750K+"
      },
      features: [
        "AI-рекомендации товаров",
        "Одностраничная оплата",
        "AR примерка одежды",
        "Push-уведомления о скидках",
        "Программа лояльности"
      ],
      tech: ["Next.js", "Stripe", "AWS", "TensorFlow"],
      timeline: "8 недель разработки",
      testimonial: "Продажи выросли на 300% после запуска приложения",
      author: "Анна, владелец магазина"
    },
    {
      id: 3,
      name: "LearnHub",
      category: "education",
      description: "Образовательная платформа с видеокурсами и интерактивными тестами",
      image: "https://cdn.poehali.dev/projects/b4f77c05-1d18-4d76-8e72-89075a7152d4/files/6e3b7536-6e95-4602-bf34-1e6e93aa1a05.jpg",
      stats: {
        users: "80K+",
        rating: 4.7,
        downloads: "300K+"
      },
      features: [
        "Видеокурсы с субтитрами",
        "Интерактивные тесты",
        "Геймификация обучения",
        "Сертификаты по завершению",
        "Форум учеников"
      ],
      tech: ["React", "Node.js", "MongoDB", "Vimeo API"],
      timeline: "5 недель разработки",
      testimonial: "Лучшая платформа для онлайн-обучения в русскоязычном сегменте",
      author: "Елена, преподаватель"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="grid-pattern fixed inset-0 opacity-30"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="font-orbitron text-2xl font-bold neon-glow text-primary">NeoBuilder</span>
          </div>
          <Button variant="outline" className="border-primary/40" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            На главную
          </Button>
        </div>
      </nav>

      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/40">
              Истории успеха
            </Badge>
            <h1 className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-bold mb-6 neon-glow">
              Кейсы Реальных Проектов
            </h1>
            <p className="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto">
              Узнайте, как компании создали успешные приложения с помощью NeoBuilder
            </p>
          </div>

          <div className="space-y-10 md:space-y-20">
            {showcaseApps.map((app, index) => (
              <div key={app.id} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover-lift">
                  <div className={`grid lg:grid-cols-2 gap-4 lg:gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-[400px] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={app.image} 
                        alt={app.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      <Badge className="absolute top-4 right-4 bg-primary/80 text-white border-0">
                        {app.category}
                      </Badge>
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1">
                          <h2 className="font-orbitron text-3xl font-bold mb-2 neon-glow">{app.name}</h2>
                          <p className="text-muted-foreground">{app.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                          <div className="font-orbitron font-bold text-lg">{app.stats.users}</div>
                          <div className="text-xs text-muted-foreground">Пользователей</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                          <Icon name="Star" size={24} className="text-secondary mx-auto mb-2" />
                          <div className="font-orbitron font-bold text-lg">{app.stats.rating}</div>
                          <div className="text-xs text-muted-foreground">Рейтинг</div>
                        </div>
                        <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                          <Icon name="Download" size={24} className="text-accent mx-auto mb-2" />
                          <div className="font-orbitron font-bold text-lg">{app.stats.downloads}</div>
                          <div className="text-xs text-muted-foreground">Загрузок</div>
                        </div>
                      </div>

                      <Tabs defaultValue="features" className="mb-8">
                        <TabsList className="w-full">
                          <TabsTrigger value="features" className="flex-1">Возможности</TabsTrigger>
                          <TabsTrigger value="tech" className="flex-1">Технологии</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features" className="mt-4">
                          <ul className="space-y-2">
                            {app.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="tech" className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {app.tech.map((tech, i) => (
                              <Badge key={i} variant="outline" className="border-primary/40">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Clock" size={14} className="text-primary" />
                              <span className="font-medium">{app.timeline}</span>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="p-4 bg-card/50 rounded-lg border border-primary/20 mb-6">
                        <div className="flex items-start gap-3">
                          <Icon name="Quote" size={24} className="text-primary flex-shrink-0" />
                          <div>
                            <p className="text-sm italic mb-2">{app.testimonial}</p>
                            <p className="text-xs text-muted-foreground">— {app.author}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                          <Icon name="Rocket" className="mr-2" size={16} />
                          Попробовать демо
                        </Button>
                        <Button variant="outline" className="border-primary/40">
                          <Icon name="ExternalLink" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/40">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-6 animate-glow">
                <Icon name="Sparkles" size={40} className="text-white" />
              </div>
              <h2 className="font-orbitron text-3xl font-bold mb-4 neon-glow">
                Готовы Создать Своё Приложение?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Присоединяйтесь к тысячам успешных разработчиков, которые выбрали NeoBuilder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary/40">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;