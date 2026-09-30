export const SectionLabel = ({ children }: { children: string }) => {
  return (
    <p className="font-mono text-xs font-medium uppercase text-muted-foreground">
      {children}
    </p>
  );
};
