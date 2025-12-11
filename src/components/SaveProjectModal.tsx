import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SaveProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  componentsCount: number;
}

const SaveProjectModal = ({ open, onOpenChange, componentsCount }: SaveProjectModalProps) => {
  const { toast } = useToast();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!projectName.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите название проекта",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);
    
    const projectData = {
      name: projectName,
      description: projectDescription,
      componentsCount,
      createdAt: new Date().toISOString(),
      id: `project-${Date.now()}`
    };

    setTimeout(() => {
      const existingProjects = JSON.parse(localStorage.getItem('neobuilder_projects') || '[]');
      existingProjects.push(projectData);
      localStorage.setItem('neobuilder_projects', JSON.stringify(existingProjects));

      setIsSaving(false);
      toast({
        title: "Проект сохранён!",
        description: `"${projectName}" успешно сохранён в вашей библиотеке`,
      });
      onOpenChange(false);
      setProjectName("");
      setProjectDescription("");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-primary/40">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl neon-glow flex items-center gap-2">
            <Icon name="Save" size={24} className="text-primary" />
            Сохранить проект
          </DialogTitle>
          <DialogDescription>
            Сохраните ваш проект для дальнейшей работы
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Компонентов в проекте:</span>
              <span className="font-orbitron font-bold text-primary">{componentsCount}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-name">Название проекта *</Label>
            <Input 
              id="project-name" 
              placeholder="Мой супер-сайт"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-background border-primary/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-description">Описание (опционально)</Label>
            <Textarea 
              id="project-description" 
              placeholder="Краткое описание проекта..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="bg-background border-primary/30 min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              className="flex-1 border-primary/30"
              onClick={() => onOpenChange(false)}
              disabled={isSaving}
            >
              Отмена
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                  Сохранение...
                </>
              ) : (
                <>
                  <Icon name="Save" className="mr-2" size={16} />
                  Сохранить
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SaveProjectModal;
