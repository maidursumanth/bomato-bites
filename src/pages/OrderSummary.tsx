import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { items: OrderItem[]; restaurantName: string } | null };

  if (!state || !state.items?.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">No items in your order</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sm font-medium text-primary hover:underline">
            Browse restaurants
          </button>
        </div>
      </div>
    );
  }

  const { items, restaurantName } = state;
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary/80"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="font-display text-xl font-black tracking-tight text-foreground">
              Order Summary
            </h1>
            <p className="text-xs text-muted-foreground">{restaurantName}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-foreground">{item.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <p className="shrink-0 text-sm font-bold text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-foreground">Grand Total</span>
            <span className="font-display text-xl font-black text-primary">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/payment", { state: { items, restaurantName } })}
          className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]"
        >
          Proceed to Payment
        </button>
      </main>
    </div>
  );
};

export default OrderSummary;
