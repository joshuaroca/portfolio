import { MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} Joshua Emanuel Rojas Carranza. All rights
          reserved.
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5" />
          Costa Rica · Spanish / English C1
        </p>
      </div>
    </footer>
  );
};
