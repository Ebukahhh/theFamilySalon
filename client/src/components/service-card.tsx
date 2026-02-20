import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, image, className }: ServiceCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border-none shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group",
      className
    )}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      )}
      <CardHeader className={cn(image ? "pt-6" : "pt-8")}>
        {!image && (
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
