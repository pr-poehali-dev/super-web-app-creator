import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icon 
            name="Sun" 
            size={20} 
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
          />
          <Icon 
            name="Moon" 
            size={20} 
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
          />
          <span className="sr-only">Переключить тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-xl border-primary/20">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={theme === "light" ? "bg-primary/20" : ""}
        >
          <Icon name="Sun" className="mr-2" size={16} />
          Светлая
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "bg-primary/20" : ""}
        >
          <Icon name="Moon" className="mr-2" size={16} />
          Темная
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={theme === "system" ? "bg-primary/20" : ""}
        >
          <Icon name="Monitor" className="mr-2" size={16} />
          Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
