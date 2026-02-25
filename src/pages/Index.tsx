import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import RestaurantCard from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";

const Index = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return restaurants;
    const q = search.toLowerCase();
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisines.some((c) => c.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-1 font-display text-3xl font-black tracking-tight text-foreground">
            Discover Restaurants
          </h1>
          <p className="text-sm text-muted-foreground">
            Find the best food around you
          </p>
        </div>

        <div className="mb-8 max-w-xl">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((restaurant, i) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold text-muted-foreground">
              No restaurants found
            </p>
            <p className="text-sm text-muted-foreground">Try a different search term</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
