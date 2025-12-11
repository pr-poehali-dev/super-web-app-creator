import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  name: string;
  description: string;
  componentsCount: number;
  createdAt: string;
}

const ProjectsLibrary = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const savedProjects = JSON.parse(localStorage.getItem('neobuilder_projects') || '[]');
    setProjects(savedProjects);
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    localStorage.setItem('neobuilder_projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    toast({
      title: "Проект удалён",
      description: "Проект был успешно удалён из библиотеки"
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  if (projects.length === 0) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon name="FolderOpen" size={40} className="text-primary/40" />
        </div>
        <h3 className="font-orbitron text-xl font-bold mb-2">Нет сохранённых проектов</h3>
        <p className="text-muted-foreground text-sm">
          Создайте свой первый проект в конструкторе и сохраните его здесь
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-orbitron text-2xl font-bold neon-glow">Мои проекты</h3>
          <p className="text-sm text-muted-foreground">Всего проектов: {projects.length}</p>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={loadProjects}
          className="border-primary/40"
        >
          <Icon name="RefreshCw" className="mr-2" size={14} />
          Обновить
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Folder" size={20} className="text-primary" />
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.description || "Без описания"}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40">
                  {project.componentsCount} компонентов
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>Создан: {formatDate(project.createdAt)}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-primary/20 hover:bg-primary/30 border border-primary/40"
                  >
                    <Icon name="FolderOpen" size={14} className="mr-2" />
                    Открыть
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => deleteProject(project.id)}
                  >
                    <Icon name="Trash2" size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsLibrary;
