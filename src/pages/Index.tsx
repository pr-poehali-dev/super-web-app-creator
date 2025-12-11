import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import VideoModal from "@/components/VideoModal";
import AuthModal from "@/components/AuthModal";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [videoOpen, setVideoOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const features = [
    {
      icon: "Sparkles",
      title: "ИИ-Ассистент",
      description: "Создавайте приложения через диалог с умным помощником. Просто опишите что нужно - ИИ сделает всё сам"
    },
    {
      icon: "Layers",
      title: "Drag-and-Drop",
      description: "Визуальный конструктор для быстрой сборки интерфейсов без единой строки кода"
    },
    {
      icon: "Database",
      title: "200 ГБ Данных",
      description: "Мощная база данных и облачное хранилище для ваших приложений"
    },
    {
      icon: "Smartphone",
      title: "iOS & Android",
      description: "Публикуйте приложения в App Store и Google Play одним кликом"
    },
    {
      icon: "Puzzle",
      title: "200+ Шаблонов",
      description: "Библиотека готовых приложений и компонентов для быстрого старта"
    },
    {
      icon: "Globe",
      title: "Свой Домен",
      description: "Подключайте собственный домен и публикуйте веб-приложения в интернет"
    }
  ];

  const templates = [
    { name: "E-commerce Магазин", category: "business", downloads: "12.5K", rating: 4.9 },
    { name: "Социальная Сеть", category: "social", downloads: "8.3K", rating: 4.8 },
    { name: "Фитнес Трекер", category: "health", downloads: "15.2K", rating: 4.9 },
    { name: "Финансовый Менеджер", category: "finance", downloads: "10.1K", rating: 4.7 },
    { name: "Доставка Еды", category: "business", downloads: "18.7K", rating: 5.0 },
    { name: "Образовательная Платформа", category: "education", downloads: "9.4K", rating: 4.8 },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Бесплатно",
      description: "Для начинающих",
      features: [
        "5 проектов",
        "10 ГБ хранилища",
        "Базовые шаблоны",
        "Поддержка сообщества"
      ]
    },
    {
      name: "Pro",
      price: "₽2,990/мес",
      description: "Для профессионалов",
      popular: true,
      features: [
        "Безлимитные проекты",
        "100 ГБ хранилища",
        "Все шаблоны",
        "Приоритетная поддержка",
        "Публикация в сторы"
      ]
    },
    {
      name: "Enterprise",
      price: "От ₽15,000/мес",
      description: "Для компаний",
      features: [
        "Белый лейбл",
        "200 ГБ хранилища",
        "Кастомные интеграции",
        "Выделенный менеджер",
        "SLA 99.9%"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="grid-pattern fixed inset-0 opacity-30"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center animate-glow">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="font-orbitron text-2xl font-bold neon-glow text-primary">NeoBuilder</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Возможности</a>
            <a href="#templates" className="text-foreground/80 hover:text-primary transition-colors">Шаблоны</a>
            <a href="/showcase" className="text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
            <a href="/builder" className="text-foreground/80 hover:text-primary transition-colors">Конструктор</a>
            <a href="/docs" className="text-foreground/80 hover:text-primary transition-colors">Документация</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Тарифы</a>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button 
              variant="ghost"
              className="hidden md:flex"
              onClick={() => window.location.href = '/profile'}
            >
              <Icon name="User" className="mr-2" size={16} />
              Профиль
            </Button>
            <Button 
              className="hidden md:flex bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 animate-glow"
              onClick={() => setAuthOpen(true)}
            >
              Начать бесплатно
            </Button>
            <MobileMenu 
              items={[
                { label: "Возможности", href: "#features", icon: "Sparkles" },
                { label: "Шаблоны", href: "#templates", icon: "LayoutTemplate" },
                { label: "Кейсы", href: "/showcase", icon: "Award" },
                { label: "Конструктор", href: "/builder", icon: "Layers" },
                { label: "Документация", href: "/docs", icon: "BookOpen" },
                { label: "Тарифы", href: "#pricing", icon: "CreditCard" },
              ]}
              onAuthClick={() => setAuthOpen(true)}
            />
          </div>
        </div>
      </nav>

      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/b4f77c05-1d18-4d76-8e72-89075a7152d4/files/6e3b7536-6e95-4602-bf34-1e6e93aa1a05.jpg" 
            alt="Futuristic background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/40 text-sm px-4 py-2">
              🚀 Будущее разработки уже здесь
            </Badge>
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 neon-glow bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
              Создавайте Приложения Без Кода
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Платформа с ИИ для разработки веб, iOS и Android приложений. 
              200 готовых шаблонов, облачная инфраструктура и публикация в сторы за минуты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-lg px-8 animate-glow"
                onClick={() => window.location.href = '/builder'}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать создавать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/40 hover:bg-primary/10 text-lg px-8"
                onClick={() => setVideoOpen(true)}
              >
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            
            <div className="mt-10">
              <div 
                className="relative rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl hover-lift cursor-pointer"
                onClick={() => setVideoOpen(true)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center mb-4 animate-glow group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={40} className="text-white ml-1" />
                    </div>
                    <p className="text-lg font-orbitron font-bold">Смотреть видео-презентацию</p>
                    <p className="text-sm text-muted-foreground mt-2">Узнайте всё о возможностях платформы за 2 минуты</p>
                  </div>
                  <div className="absolute inset-0 grid-pattern opacity-20"></div>
                  <Badge className="absolute top-4 right-4 bg-secondary/80 text-white border-0">2:30</Badge>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>50K+ пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} className="text-neon-pink" />
                <span>4.9/5 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-neon-blue" />
                <span>100K+ приложений</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      <section id="features" className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/40">
              Всё что нужно
            </Badge>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow">
              Сверхмощные Возможности
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный набор инструментов для создания приложений любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover:border-primary/60 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 animate-glow">
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="font-orbitron text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="py-12 md:py-24 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/40">
              200+ Готовых решений
            </Badge>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow">
              Библиотека Шаблонов
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Все шаблоны полностью рабочие и готовы к использованию после регистрации
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["all", "business", "social", "health", "finance", "education"].map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat ? "bg-primary neon-border" : "border-primary/20"}
                >
                  {cat === "all" ? "Все" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover:border-primary/60 transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="AppWindow" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-orbitron">{template.name}</CardTitle>
                    <Badge variant="secondary" className="bg-secondary/20">
                      {template.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-neon-pink" />
                      <span>{template.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary/20 hover:bg-primary/40 border border-primary/40">
                    Попробовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/40 hover:bg-primary/10"
              onClick={() => window.location.href = '/showcase'}
            >
              Посмотреть реальные кейсы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">
              Прозрачные цены
            </Badge>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow">
              Выберите Свой План
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              От бесплатного старта до корпоративных решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative backdrop-blur-sm hover-lift transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary neon-border scale-105' 
                    : 'bg-card/50 border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-orbitron text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-orbitron neon-glow">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-neon-purple to-neon-pink animate-glow' 
                        : 'bg-primary/20 hover:bg-primary/40 border border-primary/40'
                    }`}
                    size="lg"
                  >
                    {plan.price === "Бесплатно" ? "Начать бесплатно" : "Выбрать план"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-24 bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/40">
                Свяжитесь с нами
              </Badge>
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 neon-glow">
                Готовы Начать?
              </h2>
              <p className="text-muted-foreground text-lg">
                Наша команда поможет вам создать приложение мечты
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-orbitron text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">support@neobuilder.io</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="font-orbitron text-lg">Чат</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">24/7 поддержка в чате</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="BookOpen" size={28} className="text-accent" />
                  </div>
                  <CardTitle className="font-orbitron text-lg">Документация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Подробные гайды и API</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="font-orbitron text-xl font-bold neon-glow text-primary">NeoBuilder</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 NeoBuilder. Будущее разработки уже здесь.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
};

export default Index;