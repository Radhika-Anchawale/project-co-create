import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Play, Plus, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Anime } from "@/data/animeData";

interface AnimeCardProps {
  anime: Anime;
  viewMode?: "grid" | "list";
}

const statusColors = {
  watching: "bg-primary",
  completed: "bg-green-600",
  "on-hold": "bg-yellow-600",
  dropped: "bg-red-600",
  "plan-to-watch": "bg-secondary",
};

const AnimeCard = ({ anime, viewMode = "grid" }: AnimeCardProps) => {
  const navigate = useNavigate();

  if (viewMode === "list") {
    return (
      <Card 
        className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in flex cursor-pointer" 
        onClick={() => navigate(`/anime/${anime.id}`)}
      >
        <div className="w-24 h-32 flex-shrink-0">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {anime.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <span>{anime.year}</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{anime.rating}</span>
              </div>
            </div>
            <div className="flex gap-1 mb-2">
              {anime.genre.slice(0, 2).map((g) => (
                <Badge key={g} variant="outline" className="text-xs">
                  {g}
                </Badge>
              ))}
            </div>
          </div>
          {anime.progress && (
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{anime.progress.current}/{anime.progress.total}</span>
              </div>
              <Progress 
                value={(anime.progress.current / anime.progress.total) * 100} 
                className="h-2"
              />
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in cursor-pointer" 
      onClick={() => navigate(`/anime/${anime.id}`)}
    >
      <div className="relative">
        <img
          src={anime.image}
          alt={anime.title}
          className="h-80 w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Status badge */}
        <Badge className={`absolute top-3 left-3 ${statusColors[anime.status]} text-white border-0`}>
          {anime.status.replace("-", " ")}
        </Badge>
        
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white">{anime.rating}</span>
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
          {anime.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{anime.year}</span>
          <div className="flex gap-1">
            {anime.genre.slice(0, 2).map((g) => (
              <Badge key={g} variant="outline" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
        </div>

        {anime.progress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{anime.progress.current}/{anime.progress.total}</span>
            </div>
            <Progress 
              value={(anime.progress.current / anime.progress.total) * 100} 
              className="h-2"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimeCard;