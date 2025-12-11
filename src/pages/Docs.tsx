import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const docs = [
    {
      category: "Начало работы",
      icon: "Rocket",
      items: [
        { title: "Быстрый старт", slug: "quick-start" },
        { title: "Создание первого проекта", slug: "first-project" },
        { title: "Обзор интерфейса", slug: "interface-overview" },
      ]
    },
    {
      category: "Конструктор",
      icon: "Layers",
      items: [
        { title: "Drag & Drop система", slug: "drag-drop" },
        { title: "Компоненты", slug: "components" },
        { title: "Шаблоны", slug: "templates" },
        { title: "Экспорт проектов", slug: "export" },
      ]
    },
    {
      category: "ИИ-Ассистент",
      icon: "Sparkles",
      items: [
        { title: "Работа с ИИ", slug: "ai-assistant" },
        { title: "Промпты и команды", slug: "prompts" },
        { title: "Генерация кода", slug: "code-generation" },
      ]
    },
  ];

  const faq = [
    {
      question: "Как начать работу с NeoBuilder?",
      answer: "Зарегистрируйтесь на платформе, выберите шаблон или начните с пустого проекта. Используйте drag-and-drop конструктор для добавления компонентов или попросите ИИ-ассистента создать приложение по вашему описанию."
    },
    {
      question: "Могу ли я экспортировать код проекта?",
      answer: "Да! Все проекты можно экспортировать в виде чистого HTML, CSS и JavaScript кода. На Pro и Enterprise планах доступен экспорт в React, Vue и другие фреймворки."
    },
    {
      question: "Какие языки программирования поддерживаются?",
      answer: "NeoBuilder генерирует код на JavaScript, TypeScript, Python (для бэкенда). Поддерживаются популярные фреймворки: React, Vue, Next.js, Node.js."
    },
    {
      question: "Как работает облачное хранилище?",
      answer: "Каждый проект автоматически сохраняется в облаке. На бесплатном плане доступно 10 ГБ, на Pro - 100 ГБ, на Enterprise - 200 ГБ. Данные шифруются и резервируются ежедневно."
    },
    {
      question: "Можно ли публиковать приложения в App Store и Google Play?",
      answer: "Да, на Pro и Enterprise планах доступна автоматическая сборка и публикация мобильных приложений. Мы берём на себя всю техническую часть - вам нужен только аккаунт разработчика."
    },
    {
      question: "Какая поддержка доступна?",
      answer: "Бесплатный план включает поддержку через сообщество. Pro план - приоритетная email поддержка (ответ в течение 24 часов). Enterprise - выделенный менеджер и поддержка 24/7."
    },
    {
      question: "Могу ли я отменить подписку в любой момент?",
      answer: "Да, подписку можно отменить в любой момент без дополнительных комиссий. Доступ к платным функциям сохраняется до конца оплаченного периода."
    },
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">
              Документация и FAQ
            </Badge>
            <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 neon-glow">Как использовать NeoBuilder</h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Полное руководство по созданию приложений без кода
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Поиск в документации..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 bg-card/50 border-primary/30 text-base"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {docs.map((section, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                    <Icon name={section.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="font-orbitron">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a 
                          href={`#${item.slug}`} 
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Icon name="ChevronRight" size={14} />
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="font-orbitron text-3xl">Часто задаваемые вопросы</CardTitle>
              <CardDescription>Ответы на популярные вопросы о платформе</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-orbitron">Не нашли ответ?</CardTitle>
                <CardDescription>Свяжитесь с нашей службой поддержки</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                  <Icon name="Send" className="mr-2" size={16} />
                  Написать в поддержку
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/40">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <CardTitle className="font-orbitron">Присоединяйтесь к сообществу</CardTitle>
                <CardDescription>Общайтесь с другими разработчиками</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-accent/40">
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Форум сообщества
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;