import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, CreditCard, MapPin, Wallet, Banknote, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type PaymentMethod = "upi" | "card" | "cod";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state: { items: OrderItem[]; restaurantName: string } | null;
  };

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [loading, setLoading] = useState(false);

  if (!state || !state.items?.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">No order to pay for</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sm font-medium text-primary hover:underline">
            Browse restaurants
          </button>
        </div>
      </div>
    );
  }

  const { items, restaurantName } = state;
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const isValid = fullName.trim() && phone.trim().length >= 10 && address.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setTimeout(() => {
      navigate("/order-confirmation", { state: { items, restaurantName, grandTotal } });
    }, 2000);
  };

  const buttonText = paymentMethod === "cod" ? "Place Order" : "Pay Now";

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary/80"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="font-display text-xl font-black tracking-tight text-foreground">
            Payment Details
          </h1>
        </div>
      </header>

      <main className="container mx-auto max-w-lg px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Order Summary */}
          <section>
            <h2 className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Order Summary
            </h2>
            <p className="mb-3 text-xs text-muted-foreground">{restaurantName}</p>
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
              <span className="text-sm font-bold text-foreground">Total</span>
              <span className="font-display text-lg font-black text-primary">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
          </section>

          {/* Delivery Address */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Delivery Address
              </h2>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 15))}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                placeholder="Delivery Address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Payment Method
              </h2>
            </div>
            <RadioGroup
              value={paymentMethod}
              onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
              className="space-y-2"
            >
              {[
                { value: "upi", label: "UPI", icon: Wallet },
                { value: "card", label: "Credit / Debit Card", icon: CreditCard },
                { value: "cod", label: "Cash on Delivery", icon: Banknote },
              ].map(({ value, label, icon: Icon }) => (
                <Label
                  key={value}
                  htmlFor={value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:bg-secondary/50 has-[data-state=checked]:border-primary has-[data-state=checked]:bg-primary/5"
                >
                  <RadioGroupItem value={value} id={value} />
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </Label>
              ))}
            </RadioGroup>
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing…
              </>
            ) : (
              `${buttonText} — $${grandTotal.toFixed(2)}`
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default PaymentPage;
