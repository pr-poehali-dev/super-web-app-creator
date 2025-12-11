import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SaveProjectModal from "@/components/SaveProjectModal";
import ProjectsLibrary from "@/components/ProjectsLibrary";
import CodeExportModal from "@/components/CodeExportModal";

interface Component {
  id: string;
  type: string;
  content: string;
  icon: string;
}

interface DroppedComponent extends Component {
  position: number;
}

const Builder = () => {
  const [droppedComponents, setDroppedComponents] = useState<DroppedComponent[]>([]);
  const [draggedComponent, setDraggedComponent] = useState<Component | null>(null);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const availableComponents: Component[] = [
    { id: "header", type: "Header", content: "Заголовок Hero", icon: "Type" },
    { id: "text", type: "Text", content: "Текстовый блок с описанием", icon: "AlignLeft" },
    { id: "button", type: "Button", content: "Кнопка действия", icon: "Square" },
    { id: "image", type: "Image", content: "Блок изображения", icon: "Image" },
    { id: "card", type: "Card", content: "Карточка с контентом", icon: "SquareStack" },
    { id: "form", type: "Form", content: "Форма ввода", icon: "FileText" },
    { id: "navbar", type: "Navbar", content: "Навигационное меню", icon: "Menu" },
    { id: "footer", type: "Footer", content: "Подвал сайта", icon: "PanelBottom" },
  ];

  const handleDragStart = (component: Component) => {
    setDraggedComponent(component);
  };

  const handleDrop = () => {
    if (draggedComponent) {
      const newComponent: DroppedComponent = {
        ...draggedComponent,
        id: `${draggedComponent.id}-${Date.now()}`,
        position: droppedComponents.length,
      };
      setDroppedComponents([...droppedComponents, newComponent]);
      setDraggedComponent(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeComponent = (id: string) => {
    setDroppedComponents(droppedComponents.filter(comp => comp.id !== id));
  };

  const clearCanvas = () => {
    setDroppedComponents([]);
  };

  const loadTemplate = (templateType: string) => {
    let templateComponents: DroppedComponent[] = [];
    
    switch (templateType) {
      case "landing":
        templateComponents = [
          { id: "navbar-1", type: "Navbar", content: "Навигационное меню", icon: "Menu", position: 0 },
          { id: "header-1", type: "Header", content: "Создайте Будущее Сегодня", icon: "Type", position: 1 },
          { id: "text-1", type: "Text", content: "Революционная платформа для ваших идей", icon: "AlignLeft", position: 2 },
          { id: "button-1", type: "Button", content: "Начать бесплатно", icon: "Square", position: 3 },
          { id: "card-1", type: "Card", content: "Особенности продукта", icon: "SquareStack", position: 4 },
          { id: "card-2", type: "Card", content: "Преимущества решения", icon: "SquareStack", position: 5 },
          { id: "footer-1", type: "Footer", content: "© 2024 Все права защищены", icon: "PanelBottom", position: 6 },
        ];
        break;
      
      case "blog":
        templateComponents = [
          { id: "navbar-1", type: "Navbar", content: "Навигационное меню", icon: "Menu", position: 0 },
          { id: "header-1", type: "Header", content: "Мой Блог", icon: "Type", position: 1 },
          { id: "card-1", type: "Card", content: "Статья 1: Как начать карьеру в IT", icon: "SquareStack", position: 2 },
          { id: "image-1", type: "Image", content: "Блок изображения", icon: "Image", position: 3 },
          { id: "text-1", type: "Text", content: "Описание статьи и ключевые мысли", icon: "AlignLeft", position: 4 },
          { id: "card-2", type: "Card", content: "Статья 2: Лучшие практики разработки", icon: "SquareStack", position: 5 },
          { id: "footer-1", type: "Footer", content: "© 2024 Все права защищены", icon: "PanelBottom", position: 6 },
        ];
        break;
      
      case "dashboard":
        templateComponents = [
          { id: "navbar-1", type: "Navbar", content: "Панель управления", icon: "Menu", position: 0 },
          { id: "header-1", type: "Header", content: "Дашборд", icon: "Type", position: 1 },
          { id: "card-1", type: "Card", content: "Статистика продаж", icon: "SquareStack", position: 2 },
          { id: "card-2", type: "Card", content: "Активные пользователи", icon: "SquareStack", position: 3 },
          { id: "card-3", type: "Card", content: "График роста", icon: "SquareStack", position: 4 },
          { id: "form-1", type: "Form", content: "Форма ввода", icon: "FileText", position: 5 },
        ];
        break;
    }
    
    setDroppedComponents(templateComponents);
  };

  const renderComponent = (component: DroppedComponent) => {
    switch (component.type) {
      case "Header":
        return (
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-12 rounded-lg text-center border border-primary/40">
            <h1 className="font-orbitron text-4xl font-bold neon-glow">{component.content}</h1>
          </div>
        );
      case "Text":
        return (
          <div className="p-6 rounded-lg border border-primary/20">
            <p className="text-muted-foreground">{component.content}</p>
          </div>
        );
      case "Button":
        return (
          <div className="p-6 flex justify-center">
            <Button className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
              {component.content}
            </Button>
          </div>
        );
      case "Image":
        return (
          <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border border-primary/20">
            <Icon name="Image" size={48} className="text-primary/40" />
          </div>
        );
      case "Card":
        return (
          <Card className="p-6 bg-card/50 border-primary/20">
            <h3 className="font-orbitron text-xl mb-2">Карточка</h3>
            <p className="text-muted-foreground text-sm">{component.content}</p>
          </Card>
        );
      case "Form":
        return (
          <div className="p-6 border border-primary/20 rounded-lg space-y-4">
            <input 
              type="text" 
              placeholder="Email" 
              className="w-full p-3 bg-background border border-primary/30 rounded-lg"
            />
            <Button className="w-full bg-primary/20 border border-primary/40">Отправить</Button>
          </div>
        );
      case "Navbar":
        return (
          <div className="p-4 bg-card/50 border border-primary/20 rounded-lg flex items-center justify-between">
            <span className="font-orbitron font-bold text-primary">Logo</span>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground">Главная</a>
              <a href="#" className="text-muted-foreground">О нас</a>
              <a href="#" className="text-muted-foreground">Контакты</a>
            </div>
          </div>
        );
      case "Footer":
        return (
          <div className="p-6 bg-card/50 border border-primary/20 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        );
      default:
        return <div className="p-4 border border-dashed border-primary/40 rounded-lg">{component.content}</div>;
    }
  };

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
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" className="border-primary/40" onClick={() => window.location.href = '/'} size="sm">
              <Icon name="ArrowLeft" className="sm:mr-2" size={16} />
              <span className="hidden sm:inline">Назад</span>
            </Button>
            <Button 
              variant="outline" 
              className="hidden md:flex border-primary/40"
              onClick={() => setShowProjects(!showProjects)}
              size="sm"
            >
              <Icon name="FolderOpen" className="mr-2" size={16} />
              {showProjects ? "Скрыть" : "Мои проекты"}
            </Button>
            <Button 
              className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
              onClick={() => setSaveModalOpen(true)}
              disabled={droppedComponents.length === 0}
              size="sm"
            >
              <Icon name="Save" className="sm:mr-2" size={16} />
              <span className="hidden sm:inline">Сохранить</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">
            Конструктор приложений
          </Badge>
          <h1 className="font-orbitron text-4xl font-bold mb-2 neon-glow">Drag & Drop Builder</h1>
          <p className="text-muted-foreground">Перетащите компоненты на холст для создания приложения</p>
        </div>

        {showProjects && (
          <div className="mb-8 animate-fade-in">
            <ProjectsLibrary />
          </div>
        )}

        <div className="grid lg:grid-cols-[280px_1fr] gap-4 md:gap-6">
          <div className="space-y-6">
            <Card className="p-3 md:p-4 bg-card/50 backdrop-blur-sm border-primary/20 lg:sticky lg:top-24">
              <Tabs defaultValue="components">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="components" className="flex-1">
                    <Icon name="Layers" size={16} className="mr-2" />
                    Компоненты
                  </TabsTrigger>
                  <TabsTrigger value="templates" className="flex-1">
                    <Icon name="LayoutTemplate" size={16} className="mr-2" />
                    Шаблоны
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="components" className="space-y-2">
                  <h3 className="font-orbitron text-sm font-bold mb-3 text-primary">Доступные компоненты</h3>
                  {availableComponents.map((component) => (
                    <div
                      key={component.id}
                      draggable
                      onDragStart={() => handleDragStart(component)}
                      className="p-3 rounded-lg bg-background border border-primary/30 cursor-move hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon name={component.icon} size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{component.type}</div>
                        <div className="text-xs text-muted-foreground">{component.content}</div>
                      </div>
                      <Icon name="GripVertical" size={16} className="text-muted-foreground" />
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="templates">
                  <h3 className="font-orbitron text-sm font-bold mb-3 text-primary">Готовые шаблоны</h3>
                  <div className="space-y-2">
                    <div 
                      onClick={() => loadTemplate("landing")}
                      className="p-3 rounded-lg bg-background border border-primary/30 cursor-pointer hover:border-primary hover:bg-primary/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-sm">Landing Page</div>
                        <Icon name="Sparkles" size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-muted-foreground">Hero + Features + Footer</div>
                      <Badge variant="outline" className="mt-2 text-xs border-primary/40">7 компонентов</Badge>
                    </div>
                    <div 
                      onClick={() => loadTemplate("blog")}
                      className="p-3 rounded-lg bg-background border border-primary/30 cursor-pointer hover:border-primary hover:bg-primary/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-sm">Blog Layout</div>
                        <Icon name="Sparkles" size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-muted-foreground">Header + Cards + Images</div>
                      <Badge variant="outline" className="mt-2 text-xs border-primary/40">7 компонентов</Badge>
                    </div>
                    <div 
                      onClick={() => loadTemplate("dashboard")}
                      className="p-3 rounded-lg bg-background border border-primary/30 cursor-pointer hover:border-primary hover:bg-primary/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-sm">Dashboard</div>
                        <Icon name="Sparkles" size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-muted-foreground">Navbar + Stats + Charts</div>
                      <Badge variant="outline" className="mt-2 text-xs border-primary/40">6 компонентов</Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-6 min-h-[600px]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Monitor" size={20} className="text-primary" />
                  <span className="font-orbitron font-bold">Холст предпросмотра</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={clearCanvas}
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                  >
                    <Icon name="Trash2" size={14} className="mr-2" />
                    Очистить
                  </Button>
                </div>
              </div>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={`border-2 border-dashed rounded-lg p-6 min-h-[500px] transition-all ${
                  draggedComponent 
                    ? 'border-primary bg-primary/5' 
                    : 'border-primary/30 bg-background/50'
                }`}
              >
                {droppedComponents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name="MousePointerClick" size={40} className="text-primary/40" />
                    </div>
                    <h3 className="font-orbitron text-xl font-bold mb-2 text-muted-foreground">
                      Перетащите компоненты сюда
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Начните создавать своё приложение с помощью drag-and-drop
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {droppedComponents.map((component) => (
                      <div 
                        key={component.id} 
                        className="relative group animate-fade-in"
                      >
                        <div className="absolute -top-2 -right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeComponent(component.id)}
                            className="h-8 w-8 p-0 rounded-full"
                          >
                            <Icon name="X" size={14} />
                          </Button>
                        </div>
                        {renderComponent(component)}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {droppedComponents.length > 0 && (
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Layers" size={16} className="text-primary" />
                      <span className="text-sm font-medium">
                        Компонентов на холсте: {droppedComponents.length}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-primary/20 hover:bg-primary/30 border border-primary/40"
                      onClick={() => setExportModalOpen(true)}
                    >
                      <Icon name="Code" size={14} className="mr-2" />
                      Экспорт кода
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      <SaveProjectModal 
        open={saveModalOpen} 
        onOpenChange={setSaveModalOpen}
        componentsCount={droppedComponents.length}
      />
      <CodeExportModal 
        open={exportModalOpen} 
        onOpenChange={setExportModalOpen}
        componentsCount={droppedComponents.length}
      />
    </div>
  );
};

export default Builder;