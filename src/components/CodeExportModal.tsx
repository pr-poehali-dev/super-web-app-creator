import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface CodeExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  componentsCount: number;
}

const CodeExportModal = ({ open, onOpenChange, componentsCount }: CodeExportModalProps) => {
  const { toast } = useToast();

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Скопировано!",
      description: "Код скопирован в буфер обмена",
    });
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Загружено!",
      description: `Файл ${filename} успешно скачан`,
    });
  };

  const htmlCode = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NeoBuilder Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Ваши ${componentsCount} компонентов -->
  <div class="container">
    <h1>Добро пожаловать!</h1>
    <p>Проект создан в NeoBuilder</p>
  </div>
  <script src="script.js"></script>
</body>
</html>`;

  const cssCode = `/* Стили проекта NeoBuilder */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #1a1f2c 0%, #2d1b4e 100%);
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #8b5cf6, #d946ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`;

  const jsCode = `// JavaScript для проекта NeoBuilder
document.addEventListener('DOMContentLoaded', () => {
  console.log('NeoBuilder Project loaded!');
  console.log('Components: ${componentsCount}');
  
  // Ваш код здесь
  initializeApp();
});

function initializeApp() {
  // Инициализация приложения
  console.log('App initialized');
}`;

  const reactCode = `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Добро пожаловать!</h1>
      <p>Проект создан в NeoBuilder</p>
      <p>Компонентов: ${componentsCount}</p>
    </div>
  );
}

export default App;`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-primary/40 max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl neon-glow flex items-center gap-2">
            <Icon name="Code" size={24} className="text-primary" />
            Экспорт кода проекта
          </DialogTitle>
          <DialogDescription>
            Скопируйте или скачайте код вашего проекта
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-3">
              <Icon name="Layers" size={20} className="text-primary" />
              <div>
                <div className="font-medium">Компонентов в проекте</div>
                <div className="text-sm text-muted-foreground">Готово к экспорту</div>
              </div>
            </div>
            <Badge className="bg-primary/20 border-primary/40 text-lg px-4 py-1">
              {componentsCount}
            </Badge>
          </div>

          <Tabs defaultValue="html" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="html" className="flex-1">HTML</TabsTrigger>
              <TabsTrigger value="css" className="flex-1">CSS</TabsTrigger>
              <TabsTrigger value="js" className="flex-1">JavaScript</TabsTrigger>
              <TabsTrigger value="react" className="flex-1">React</TabsTrigger>
            </TabsList>

            <TabsContent value="html" className="space-y-3">
              <div className="bg-background border border-primary/20 rounded-lg p-4 max-h-[400px] overflow-auto">
                <pre className="text-sm">
                  <code>{htmlCode}</code>
                </pre>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-primary/20 border border-primary/40"
                  onClick={() => handleCopy(htmlCode)}
                >
                  <Icon name="Copy" className="mr-2" size={16} />
                  Скопировать
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
                  onClick={() => handleDownload('index.html', htmlCode)}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать HTML
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="css" className="space-y-3">
              <div className="bg-background border border-primary/20 rounded-lg p-4 max-h-[400px] overflow-auto">
                <pre className="text-sm">
                  <code>{cssCode}</code>
                </pre>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-primary/20 border border-primary/40"
                  onClick={() => handleCopy(cssCode)}
                >
                  <Icon name="Copy" className="mr-2" size={16} />
                  Скопировать
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
                  onClick={() => handleDownload('styles.css', cssCode)}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать CSS
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="js" className="space-y-3">
              <div className="bg-background border border-primary/20 rounded-lg p-4 max-h-[400px] overflow-auto">
                <pre className="text-sm">
                  <code>{jsCode}</code>
                </pre>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-primary/20 border border-primary/40"
                  onClick={() => handleCopy(jsCode)}
                >
                  <Icon name="Copy" className="mr-2" size={16} />
                  Скопировать
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
                  onClick={() => handleDownload('script.js', jsCode)}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать JS
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="react" className="space-y-3">
              <div className="bg-background border border-primary/20 rounded-lg p-4 max-h-[400px] overflow-auto">
                <pre className="text-sm">
                  <code>{reactCode}</code>
                </pre>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-primary/20 border border-primary/40"
                  onClick={() => handleCopy(reactCode)}
                >
                  <Icon name="Copy" className="mr-2" size={16} />
                  Скопировать
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink animate-glow"
                  onClick={() => handleDownload('App.jsx', reactCode)}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать React
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-secondary mt-0.5" />
              <div className="text-sm">
                <p className="font-medium mb-1">Полный экспорт проекта</p>
                <p className="text-muted-foreground">
                  Для экспорта всех файлов проекта включая зависимости, используйте Pro или Enterprise план
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeExportModal;
