export const GlowField = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-32 -top-40 size-[520px] rounded-full bg-success/10 blur-[130px] dark:bg-success/20" />
      <div className="absolute -right-24 top-1/3 size-[440px] rounded-full bg-glow/10 blur-[130px] dark:bg-glow/15" />
      <div className="absolute -bottom-48 left-1/4 size-[460px] rounded-full bg-success/5 blur-[130px] dark:bg-glow/10" />
    </div>
  );
};
