import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Minus, Plus } from "lucide-react";
import { restaurants } from "@/data/restaurants";
import { restaurantMenus } from "@/data/menu";

const PriceLevel = ({ level }: { level: number }) => (
  <span className="text-sm font-semibold tracking-tight">
    {Array.from({ length: 4 }, (_, i) => (
      <span key={i} className={i < level ? "text-price-active" : "text-price-inactive"}>
        $
      </span>
    ))}
  </span>
);

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [counts, setCounts] = useState<Record<number, number>>({});

  const restaurant = restaurants.find((r) => r.id === Number(id));
  const menu = restaurantMenus[Number(id)] ?? [];

  if (!restaurant) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">Restaurant not found</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sm font-medium text-primary hover:underline">
            Go back
          </button>
        </div>
      </div>
    );
  }

  const updateCount = (itemId: number, delta: number) => {
    setCounts((prev) => {
      const next = (prev[itemId] ?? 0) + delta;
      if (next <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const categories = [...new Set(menu.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-56 sm:h-72 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-card"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="font-display text-3xl font-black tracking-tight text-primary-foreground sm:text-4xl">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* Info bar */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto flex flex-wrap items-center gap-4 px-4 py-4">
          <div className="flex items-center gap-1.5 rounded-lg bg-primary px-2.5 py-1">
            <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground">{restaurant.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {restaurant.reviewCount} reviews
          </span>
          <div className="flex flex-wrap gap-1.5">
            {restaurant.cuisines.map((c) => (
              <span key={c} className="rounded-full bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-foreground">
                {c}
              </span>
            ))}
          </div>
          <PriceLevel level={restaurant.priceLevel} />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {restaurant.deliveryTime}
          </div>
        </div>
      </div>

      {/* Menu */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="mb-6 font-display text-2xl font-black tracking-tight text-foreground">
          Menu
        </h2>

        <div className="space-y-8">
          {categories.map((category) => (
            <section key={category}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="space-y-3">
                {menu
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const count = counts[item.id] ?? 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm"
                      >
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                          <p className="mt-1.5 text-sm font-semibold text-primary">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {count === 0 ? (
                          <button
                            onClick={() => updateCount(item.id, 1)}
                            className="shrink-0 rounded-lg border-2 border-primary px-4 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            ADD
                          </button>
                        ) : (
                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              onClick={() => updateCount(item.id, -1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-secondary/80"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-6 text-center text-sm font-bold text-foreground">
                              {count}
                            </span>
                            <button
                              onClick={() => updateCount(item.id, 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantPage;
