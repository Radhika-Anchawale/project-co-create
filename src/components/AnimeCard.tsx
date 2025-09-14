import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Play, Plus, Heart } from "lucide-react";

interface AnimeCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string[];
  status: "watching" | "completed" | "on-hold" | "dropped" | "plan-to-watch";
  progress?: {
    current: number;
    total: number;
  };
  year: number;
}

const statusColors = {
  watching: "bg-primary",
  completed: "bg-green-600",
  "on-hold": "bg-yellow-600",
  dropped: "bg-red-600",
  "plan-to-watch": "bg-secondary",
};

const AnimeCard = ({ title, image, rating, genre, status, progress, year }: AnimeCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Status badge */}
        <Badge className={`absolute top-3 left-3 ${statusColors[status]} text-white border-0`}>
          {status.replace("-", " ")}
        </Badge>
        
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white">{rating}</span>
        </div>

        {/* Action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="bg-primary/80 hover:bg-primary">
            <Play className="h-4 w-4 mr-1" />
            Watch
          </Button>
          <Button size="sm" variant="secondary" className="bg-secondary/80 hover:bg-secondary">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-poppins font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{year}</span>
          <div className="flex gap-1">
            {genre.slice(0, 2).map((g) => (
              <Badge key={g} variant="outline" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
        </div>

        {progress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress.current}/{progress.total}</span>
            </div>
            <Progress 
              value={(progress.current / progress.total) * 100} 
              className="h-2"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimeCard;