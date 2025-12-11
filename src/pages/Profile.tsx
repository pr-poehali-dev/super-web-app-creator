import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });

  const handleSave = () => {
    toast({
      title: "Профиль сохранён",
      description: "Ваши изменения успешно применены",
    });
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
          <Button variant="outline" className="border-primary/40" onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            На главную
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-orbitron text-4xl font-bold mb-2 neon-glow">Профиль</h1>
            <p className="text-muted-foreground">Управление вашим аккаунтом и настройками</p>
          </div>

          <div className="grid md:grid-cols-[250px_1fr] gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-fit">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <h3 className="font-orbitron font-bold text-lg">Алексей Петров</h3>
                  <p className="text-sm text-muted-foreground">alex@example.com</p>
                  <Badge className="mt-2 bg-primary/20 border-primary/40">Pro План</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Проектов:</span>
                    <span className="font-bold">15</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Хранилище:</span>
                    <span className="font-bold">45 ГБ / 100 ГБ</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Подписка до:</span>
                    <span className="font-bold">25.12.2024</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary/20 border border-primary/40">
                  <Icon name="Crown" className="mr-2" size={16} />
                  Улучшить план
                </Button>
              </CardContent>
            </Card>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="bg-card/50 border border-primary/20">
                <TabsTrigger value="general">
                  <Icon name="User" size={16} className="mr-2" />
                  Общее
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Безопасность
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Уведомления
                </TabsTrigger>
                <TabsTrigger value="billing">
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Оплата
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron">Общие настройки</CardTitle>
                    <CardDescription>Управление вашими персональными данными</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя</Label>
                        <Input 
                          id="firstName" 
                          defaultValue="Алексей"
                          className="bg-background border-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input 
                          id="lastName" 
                          defaultValue="Петров"
                          className="bg-background border-primary/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        defaultValue="alex@example.com"
                        className="bg-background border-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">О себе</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="Расскажите о себе..."
                        className="bg-background border-primary/30 min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Веб-сайт</Label>
                      <Input 
                        id="website" 
                        placeholder="https://yourwebsite.com"
                        className="bg-background border-primary/30"
                      />
                    </div>
                    <Button onClick={handleSave} className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                      <Icon name="Save" className="mr-2" size={16} />
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron">Безопасность</CardTitle>
                    <CardDescription>Управление паролем и двухфакторной аутентификацией</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Текущий пароль</Label>
                        <Input 
                          id="currentPassword" 
                          type="password"
                          placeholder="••••••••"
                          className="bg-background border-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Новый пароль</Label>
                        <Input 
                          id="newPassword" 
                          type="password"
                          placeholder="••••••••"
                          className="bg-background border-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password"
                          placeholder="••••••••"
                          className="bg-background border-primary/30"
                        />
                      </div>
                      <Button className="bg-primary/20 border border-primary/40">
                        Изменить пароль
                      </Button>
                    </div>

                    <div className="border-t border-primary/20 pt-6">
                      <h4 className="font-orbitron font-bold mb-4">Двухфакторная аутентификация</h4>
                      <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon name="Smartphone" size={20} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">SMS аутентификация</div>
                            <div className="text-sm text-muted-foreground">Дополнительная защита аккаунта</div>
                          </div>
                        </div>
                        <Button variant="outline" className="border-primary/40">
                          Настроить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron">Уведомления</CardTitle>
                    <CardDescription>Управление способами получения уведомлений</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                        <div>
                          <div className="font-medium">Email уведомления</div>
                          <div className="text-sm text-muted-foreground">Получать письма о важных событиях</div>
                        </div>
                        <Switch 
                          checked={notifications.email}
                          onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                        <div>
                          <div className="font-medium">Push-уведомления</div>
                          <div className="text-sm text-muted-foreground">Всплывающие уведомления в браузере</div>
                        </div>
                        <Switch 
                          checked={notifications.push}
                          onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 border border-primary/20 rounded-lg">
                        <div>
                          <div className="font-medium">Маркетинговые рассылки</div>
                          <div className="text-sm text-muted-foreground">Новости и специальные предложения</div>
                        </div>
                        <Switch 
                          checked={notifications.marketing}
                          onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                        />
                      </div>
                    </div>
                    <Button onClick={handleSave} className="bg-gradient-to-r from-neon-purple to-neon-pink animate-glow">
                      <Icon name="Save" className="mr-2" size={16} />
                      Сохранить настройки
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-orbitron">Оплата и подписка</CardTitle>
                    <CardDescription>Управление платёжной информацией</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/40">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-orbitron text-2xl font-bold">Pro План</div>
                          <div className="text-sm text-muted-foreground">₽2,990 / месяц</div>
                        </div>
                        <Badge className="bg-primary/80 text-white border-0">Активна</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Следующее списание: 25 декабря 2024
                      </div>
                      <Button variant="outline" className="border-primary/40">
                        <Icon name="CreditCard" className="mr-2" size={16} />
                        Изменить план
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-orbitron font-bold">Способы оплаты</h4>
                      <div className="p-4 border border-primary/20 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                            <Icon name="CreditCard" size={20} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">•••• •••• •••• 4242</div>
                            <div className="text-sm text-muted-foreground">Истекает 12/25</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-primary/30">
                          <Icon name="Edit" size={14} />
                        </Button>
                      </div>
                      <Button variant="outline" className="w-full border-primary/30">
                        <Icon name="Plus" className="mr-2" size={16} />
                        Добавить карту
                      </Button>
                    </div>

                    <div className="border-t border-primary/20 pt-6">
                      <h4 className="font-orbitron font-bold mb-3">История платежей</h4>
                      <div className="space-y-2">
                        {[
                          { date: "15 ноя 2024", amount: "₽2,990", status: "Оплачено" },
                          { date: "15 окт 2024", amount: "₽2,990", status: "Оплачено" },
                          { date: "15 сен 2024", amount: "₽2,990", status: "Оплачено" },
                        ].map((payment, i) => (
                          <div key={i} className="flex items-center justify-between p-3 border border-primary/20 rounded-lg text-sm">
                            <span className="text-muted-foreground">{payment.date}</span>
                            <span className="font-medium">{payment.amount}</span>
                            <Badge variant="secondary" className="bg-primary/20">{payment.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
