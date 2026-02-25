import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-black tracking-tight text-primary">
            Bomato
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">New York, NY</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
