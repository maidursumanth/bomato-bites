import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state: { restaurantName: string; grandTotal: number } | null;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in-up text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-display text-2xl font-black tracking-tight text-foreground">
          Order Confirmed!
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {state?.restaurantName
            ? `Your order from ${state.restaurantName} is being prepared.`
            : "Your order is being prepared."}
        </p>
        {state?.grandTotal != null && (
          <p className="mt-1 text-lg font-bold text-primary">
            ${state.grandTotal.toFixed(2)}
          </p>
        )}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
