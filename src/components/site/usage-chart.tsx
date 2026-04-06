import { usageTimeline } from "@/lib/mock-data";

export function UsageChart() {
  const max = Math.max(...usageTimeline.map((item) => item.value));

  return (
    <div className="space-y-4">
      <div className="flex items-end gap-3">
        {usageTimeline.map((item) => (
          <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-40 w-full items-end rounded-xl border border-[var(--border)] bg-[var(--panel-2)] p-1">
              <div
                className="w-full rounded-lg bg-[linear-gradient(180deg,var(--accent),#a9b2ff)]"
                style={{ height: `${(item.value / max) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
              {item.day}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--muted-foreground)]">
        最近 7 天用量趋势。后端接入后可替换成按账号、按设备、按时间粒度的真实统计。
      </p>
    </div>
  );
}
