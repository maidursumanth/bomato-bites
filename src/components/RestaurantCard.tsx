import { Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Restaurant } from "@/data/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

const PriceLevel = ({ level }: { level: number }) => (
  <span className="text-sm font-semibold tracking-tight">
    {Array.from({ length: 4 }, (_, i) => (
      <span key={i} className={i < level ? "text-price-active" : "text-price-inactive"}>
        $
      </span>
    ))}
  </span>
);

const RestaurantCard = ({ restaurant, index }: RestaurantCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="group animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          {restaurant.deliveryTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight text-foreground">
            {restaurant.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-primary px-2 py-0.5">
            <Star className="h-3.5 w-3.5 fill-primary-foreground text-primary-foreground" />
            <span className="text-xs font-bold text-primary-foreground">{restaurant.rating}</span>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {restaurant.cuisines.map((cuisine) => (
            <span
              key={cuisine}
              className="rounded-full bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-foreground"
            >
              {cuisine}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PriceLevel level={restaurant.priceLevel} />
            <span className="text-xs text-muted-foreground">
              ({restaurant.reviewCount} reviews)
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          className="mt-3 w-full rounded-xl bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
