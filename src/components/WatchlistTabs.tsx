import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const watchlistCategories = [
  { id: "all", label: "All", count: 247 },
  { id: "watching", label: "Watching", count: 12 },
  { id: "completed", label: "Completed", count: 89 },
  { id: "on-hold", label: "On Hold", count: 8 },
  { id: "dropped", label: "Dropped", count: 3 },
  { id: "plan-to-watch", label: "Plan to Watch", count: 135 },
];

interface WatchlistTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const WatchlistTabs = ({ activeTab, onTabChange }: WatchlistTabsProps) => {
  return (
    <div className="mb-8">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-card/50 backdrop-blur-sm">
          {watchlistCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
            >
              <span className="text-sm font-medium">{category.label}</span>
              <Badge variant="secondary" className="text-xs bg-muted/50">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default WatchlistTabs;