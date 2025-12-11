import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [users] = useState([
    { id: 1, name: "Алексей Петров", email: "alex@example.com", plan: "Pro", projects: 15, status: "active", joined: "2024-01-15" },
    { id: 2, name: "Мария Сидорова", email: "maria@example.com", plan: "Enterprise", projects: 48, status: "active", joined: "2024-02-20" },
    { id: 3, name: "Иван Иванов", email: "ivan@example.com", plan: "Starter", projects: 3, status: "active", joined: "2024-03-10" },
    { id: 4, name: "Елена Козлова", email: "elena@example.com", plan: "Pro", projects: 22, status: "inactive", joined: "2024-01-05" },
  ]);

  const [templates] = useState([
    { id: 1, name: "E-commerce Store", category: "business", downloads: 12500, rating: 4.9, status: "published" },
    { id: 2, name: "Social Network", category: "social", downloads: 8300, rating: 4.8, status: "published" },
    { id: 3, name: "Dashboard Analytics", category: "business", downloads: 15200, rating: 4.7, status: "draft" },
  ]);

  const stats = [
    { label: "Всего пользователей", value: "50,234", icon: "Users", color: "primary" },
    { label: "Активных проектов", value: "125,891", icon: "Rocket", color: "secondary" },
    { label: "Скачиваний шаблонов", value: "2.5M", icon: "Download", color: "accent" },
    { label: "Средний рейтинг", value: "4.8/5", icon: "Star", color: "primary" },
  ];

  const handleAction = (action: string, target: string) => {
    toast({
      title: `${action} выполнено`,
      description: `Действие "${action}" для ${target}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid-pattern fixed inset-0 opacity-30"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="font-orbitron text-2xl font-bold neon-glow text-primary">Admin Panel</span>
          </div>
          <Button variant="outline" className="border-primary/40" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            На главную
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl font-bold mb-2 neon-glow">Панель Администратора</h1>
          <p className="text-muted-foreground">Управление платформой NeoBuilder</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription>{stat.label}</CardDescription>
                  <div className={`w-10 h-10 rounded-lg bg-${stat.color}/20 flex items-center justify-center`}>
                    <Icon name={stat.icon} size={20} className={`text-${stat.color}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="font-orbitron text-3xl font-bold neon-glow">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-card/50 border border-primary/20">
            <TabsTrigger value="users" className="data-[state=active]:bg-primary/20">
              <Icon name="Users" size={16} className="mr-2" />
              Пользователи
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary/20">
              <Icon name="LayoutTemplate" size={16} className="mr-2" />
              Шаблоны
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary/20">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary/20">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-orbitron">Управление пользователями</CardTitle>
                    <CardDescription>Всего зарегистрировано: {users.length}</CardDescription>
                  </div>
                  <Button className="bg-primary/20 border border-primary/40">
                    <Icon name="UserPlus" className="mr-2" size={16} />
                    Добавить
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Пользователь</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>План</TableHead>
                      <TableHead>Проектов</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дата регистрации</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.plan === "Enterprise" ? "default" : "secondary"}>
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.projects}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>
                            {user.status === "active" ? "Активен" : "Неактивен"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{user.joined}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-primary/30"
                              onClick={() => handleAction("Редактировать", user.name)}
                            >
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-destructive/30 text-destructive"
                              onClick={() => handleAction("Удалить", user.name)}
                            >
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-orbitron">Управление шаблонами</CardTitle>
                    <CardDescription>Всего шаблонов: {templates.length}</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                    <Icon name="Plus" className="mr-2" size={16} />
                    Создать шаблон
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название</TableHead>
                      <TableHead>Категория</TableHead>
                      <TableHead>Скачиваний</TableHead>
                      <TableHead>Рейтинг</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {templates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell className="font-medium">{template.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{template.category}</Badge>
                        </TableCell>
                        <TableCell>{template.downloads.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-neon-pink" />
                            <span>{template.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={template.status === "published" ? "default" : "secondary"}>
                            {template.status === "published" ? "Опубликован" : "Черновик"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-primary/30"
                              onClick={() => handleAction("Редактировать", template.name)}
                            >
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-accent/30 text-accent"
                              onClick={() => handleAction("Просмотр", template.name)}
                            >
                              <Icon name="Eye" size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="font-orbitron">Статистика платформы</CardTitle>
                  <CardDescription>Основные метрики за последний месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-primary/20 rounded-lg">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">График аналитики</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-lg">Рост пользователей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary font-orbitron mb-2">+24%</div>
                    <p className="text-sm text-muted-foreground">За последние 30 дней</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-lg">Новых проектов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary font-orbitron mb-2">1,248</div>
                    <p className="text-sm text-muted-foreground">Создано в этом месяце</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-lg">Конверсия в Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent font-orbitron mb-2">18%</div>
                    <p className="text-sm text-muted-foreground">От бесплатного тарифа</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Настройки платформы</CardTitle>
                <CardDescription>Конфигурация и параметры системы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                  <div>
                    <div className="font-medium">Режим обслуживания</div>
                    <div className="text-sm text-muted-foreground">Временно отключить платформу</div>
                  </div>
                  <Button variant="outline" className="border-primary/30">
                    <Icon name="Settings" className="mr-2" size={14} />
                    Настроить
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                  <div>
                    <div className="font-medium">Уведомления системы</div>
                    <div className="text-sm text-muted-foreground">Email рассылка и push-уведомления</div>
                  </div>
                  <Button variant="outline" className="border-primary/30">
                    <Icon name="Bell" className="mr-2" size={14} />
                    Управление
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                  <div>
                    <div className="font-medium">Резервное копирование</div>
                    <div className="text-sm text-muted-foreground">Автоматические бэкапы данных</div>
                  </div>
                  <Button variant="outline" className="border-primary/30">
                    <Icon name="Database" className="mr-2" size={14} />
                    Конфигурация
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
