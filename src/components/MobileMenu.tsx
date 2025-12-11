import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface MobileMenuProps {
  items: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
  onAuthClick?: () => void;
}

const MobileMenu = ({ items, onAuthClick }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-foreground">
          <Icon name="Menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/20">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-8 mt-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center animate-glow">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-orbitron text-xl font-bold neon-glow text-primary">NeoBuilder</span>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href)}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-colors text-left border border-transparent hover:border-primary/20"
              >
                {item.icon && <Icon name={item.icon} size={20} className="text-primary" />}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="space-y-3 pb-6">
            {onAuthClick && (
              <>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/40"
                  onClick={() => {
                    window.location.href = '/profile';
                    setOpen(false);
                  }}
                >
                  <Icon name="User" className="mr-2" size={16} />
                  Профиль
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
                  onClick={() => {
                    onAuthClick();
                    setOpen(false);
                  }}
                >
                  Начать бесплатно
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
