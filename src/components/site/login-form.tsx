"use client";

import { BellRing, Link2, ShieldEllipsis } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LoginForm() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>Access Model</CardTitle>
        <CardDescription>
          这个 GitHub Pages 站点是公开说明页，不承载真实登录、账号密码或私有订阅。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
          <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
            <BellRing className="mt-0.5 size-4 text-[var(--accent)]" />
            <p>管理员单独分发账号信息或订阅链接，不在网页里公开展示。</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
            <Link2 className="mt-0.5 size-4 text-[var(--accent)]" />
            <p>Clash Verge 建议直接导入管理员私发的订阅 URL 或一键导入链接。</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
            <ShieldEllipsis className="mt-0.5 size-4 text-[var(--accent)]" />
            <p>不要在 GitHub Pages 或公开仓库里存放真实订阅、密码或节点明文。</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
