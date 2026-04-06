import { usageTimeline } from "@/lib/mock-data";

export function UsageChart() {
  const max = Math.max(...usageTimeline.map((item) => item.value), 1);

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
        这是最近 7 天从 Xray access.log 汇总出的每日接入次数快照，用来观察哪几天更活跃。
      </p>
    </div>
  );
}
