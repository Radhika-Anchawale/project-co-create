import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Calendar, Clock, Users, Bookmark, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { sampleAnimeData } from "@/data/animeData";
import Header from "@/components/Header";

const AnimeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const anime = sampleAnimeData.find(a => a.id === id);
  
  if (!anime) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Anime not found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const progressPercentage = anime.progress 
    ? (anime.progress.current / anime.progress.total) * 100 
    : 0;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Button 
              onClick={() => navigate("/")} 
              variant="outline" 
              className="mb-4 bg-card/80 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Button>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={anime.image} 
                alt={anime.title}
                className="w-48 h-72 object-cover rounded-lg shadow-glow border border-border/50"
              />
              
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2 font-poppins">{anime.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{anime.studio} • {anime.year}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {anime.genre.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-primary/20 text-primary">
                      {genre}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{anime.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{anime.episodes} Episodes</span>
                  </div>
                  <Badge variant={anime.status === "completed" ? "secondary" : "outline"}>
                    {anime.status.replace("-", " ")}
                  </Badge>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1 md:flex-none">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Add to List
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Synopsis
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {anime.description || `${anime.title} is a captivating ${anime.genre.join(", ").toLowerCase()} series that follows an incredible journey through a beautifully crafted world. 
                  With stunning animation from ${anime.studio} and a compelling storyline that keeps viewers on the edge of their seats, 
                  this series has earned its place among the most beloved anime of ${anime.year}. 
                  The character development and world-building are exceptional, creating an immersive experience that resonates with fans worldwide.`}
                </p>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            {anime.progress && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Episode {anime.progress.current} of {anime.progress.total}</span>
                      <span>{Math.round(progressPercentage)}% Complete</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Mark as Watched</Button>
                      <Button variant="outline" size="sm">Update Episode</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Studio:</span>
                    <span>{anime.studio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span>{anime.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Episodes:</span>
                    <span>{anime.episodes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>{anime.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{anime.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Anime */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Similar Anime</h3>
                <div className="space-y-3">
                  {sampleAnimeData.slice(0, 3).map((relatedAnime) => (
                    <div 
                      key={relatedAnime.id}
                      className="flex gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/anime/${relatedAnime.id}`)}
                    >
                      <img 
                        src={relatedAnime.image} 
                        alt={relatedAnime.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{relatedAnime.title}</h4>
                        <p className="text-xs text-muted-foreground">{relatedAnime.year}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{relatedAnime.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimeDetail;