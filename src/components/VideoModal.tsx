import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-primary/40">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-orbitron text-2xl neon-glow flex items-center gap-2">
            <Icon name="Play" size={24} className="text-primary" />
            Демо-презентация платформы
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video bg-background">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="NeoBuilder Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 bg-card/50 border-t border-primary/20">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-sm">2:30 минуты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-secondary" />
              <span className="text-sm">50K просмотров</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ThumbsUp" size={16} className="text-accent" />
              <span className="text-sm">98% лайков</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
