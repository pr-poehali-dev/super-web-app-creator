import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: 'login' | 'register') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: type === 'login' ? "Вход выполнен!" : "Регистрация завершена!",
        description: "Добро пожаловать в NeoBuilder 🚀",
      });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-primary/40">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl neon-glow flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            Вход в NeoBuilder
          </DialogTitle>
          <DialogDescription>
            Войдите или создайте аккаунт для доступа ко всем возможностям
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="mt-4">
          <TabsList className="w-full">
            <TabsTrigger value="login" className="flex-1">Вход</TabsTrigger>
            <TabsTrigger value="register" className="flex-1">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input 
                id="login-email" 
                type="email" 
                placeholder="your@email.com"
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Пароль</Label>
              <Input 
                id="login-password" 
                type="password" 
                placeholder="••••••••"
                className="bg-background border-primary/30"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
              onClick={() => handleAuth('login')}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                  Вход...
                </>
              ) : (
                <>
                  <Icon name="LogIn" className="mr-2" size={16} />
                  Войти
                </>
              )}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-primary/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">или</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-primary/30">
                <Icon name="Github" className="mr-2" size={16} />
                GitHub
              </Button>
              <Button variant="outline" className="border-primary/30">
                <Icon name="Mail" className="mr-2" size={16} />
                Google
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="register-name">Имя</Label>
              <Input 
                id="register-name" 
                type="text" 
                placeholder="Иван Иванов"
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input 
                id="register-email" 
                type="email" 
                placeholder="your@email.com"
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">Пароль</Label>
              <Input 
                id="register-password" 
                type="password" 
                placeholder="••••••••"
                className="bg-background border-primary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-confirm">Подтвердите пароль</Label>
              <Input 
                id="register-confirm" 
                type="password" 
                placeholder="••••••••"
                className="bg-background border-primary/30"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
              onClick={() => handleAuth('register')}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                  Создание аккаунта...
                </>
              ) : (
                <>
                  <Icon name="UserPlus" className="mr-2" size={16} />
                  Создать аккаунт
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Создавая аккаунт, вы соглашаетесь с условиями использования и политикой конфиденциальности
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
