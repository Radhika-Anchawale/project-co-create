export interface Anime {
  id: string;
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
  description: string;
  episodes: number;
  studio: string;
}

export const sampleAnimeData: Anime[] = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    rating: 9.0,
    genre: ["Action", "Drama", "Fantasy"],
    status: "watching",
    progress: { current: 15, total: 25 },
    year: 2013,
    description: "Humanity fights for survival against giant humanoid Titans.",
    episodes: 87,
    studio: "Mappa"
  },
  {
    id: "2", 
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    rating: 8.7,
    genre: ["Action", "Supernatural"],
    status: "completed",
    progress: { current: 26, total: 26 },
    year: 2019,
    description: "A young boy becomes a demon slayer to save his sister.",
    episodes: 26,
    studio: "Ufotable"
  },
  {
    id: "3",
    title: "Your Name",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
    rating: 8.4,
    genre: ["Romance", "Drama", "Supernatural"],
    status: "completed", 
    year: 2016,
    description: "Two teenagers share a profound, magical connection.",
    episodes: 1,
    studio: "CoMix Wave Films"
  },
  {
    id: "4",
    title: "Spirited Away",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    rating: 9.3,
    genre: ["Adventure", "Family", "Fantasy"],
    status: "completed",
    year: 2001,
    description: "A girl enters a world ruled by gods and witches.",
    episodes: 1,
    studio: "Studio Ghibli"
  },
  {
    id: "5",
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    rating: 8.6,
    genre: ["Action", "School", "Supernatural"],
    status: "watching",
    progress: { current: 8, total: 24 },
    year: 2020,
    description: "Students fight curses in modern-day Japan.",
    episodes: 24,
    studio: "Mappa"
  },
  {
    id: "6",
    title: "One Piece", 
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
    rating: 9.1,
    genre: ["Action", "Adventure", "Comedy"],
    status: "on-hold",
    progress: { current: 350, total: 1000 },
    year: 1999,
    description: "Pirates search for the ultimate treasure.",
    episodes: 1000,
    studio: "Toei Animation"
  },
  {
    id: "7",
    title: "Death Note",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    rating: 9.0,
    genre: ["Psychological", "Supernatural", "Thriller"],
    status: "completed",
    year: 2006,
    description: "A student gains the power to kill with a notebook.",
    episodes: 37,
    studio: "Madhouse"
  },
  {
    id: "8",
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    rating: 8.5,
    genre: ["Action", "School", "Superhero"],
    status: "plan-to-watch",
    year: 2016,
    description: "In a world of superpowers, a boy dreams of becoming a hero.",
    episodes: 138,
    studio: "Bones"
  }
];