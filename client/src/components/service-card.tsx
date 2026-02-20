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
      "overflow-hidden border-none shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group bg-card",
      className
    )}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary shadow-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-display text-white drop-shadow-md">{title}</CardTitle>
        </div>
      </div>
      <CardContent className="pt-6">
        <CardDescription className="text-base leading-relaxed text-muted-foreground font-medium">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
