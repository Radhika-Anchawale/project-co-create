import { Button } from "@/components/ui/button";
import { Play, Plus, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-anime.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Anime Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float">
            Track Your Anime Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover, track, and share your favorite anime and TV series with a vibrant community of fans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group" variant="hero">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Tracking
          </Button>
            
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Plus className="mr-2 h-5 w-5" />
              Browse Anime
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Anime Series</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2M+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10M+</div>
              <div className="text-sm text-muted-foreground">Episodes Tracked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-20 h-20 bg-gradient-secondary rounded-full opacity-20 blur-xl" />
      </div>
    </section>
  );
};

export default HeroSection;