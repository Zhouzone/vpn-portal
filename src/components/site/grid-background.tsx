export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,255,117,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
      <div className="absolute left-[-12%] top-16 h-56 w-56 rounded-full border border-[rgba(240,255,117,0.35)] blur-3xl" />
      <div className="absolute right-[-8%] top-1/3 h-72 w-72 rounded-full bg-[rgba(240,255,117,0.08)] blur-3xl" />
    </div>
  );
}
