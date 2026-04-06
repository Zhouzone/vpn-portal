"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Activity,
  ClipboardCopy,
  ExternalLink,
  Globe2,
  LogOut,
  Radar,
  Shield,
  UserRound,
  WandSparkles,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dashboardCards, sampleAccounts } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site-config";

const currentAccount = sampleAccounts[0];

export function DashboardShell() {
  const [copied, setCopied] = useState<"" | "subscription" | "one-click">("");

  const trafficPercent = useMemo(
    () => Math.round((currentAccount.trafficUsed / currentAccount.trafficTotal) * 100),
    [],
  );

  async function handleCopy(text: string, type: "subscription" | "one-click") {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    window.setTimeout(() => setCopied(""), 1600);
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-6 py-8 text-[var(--foreground)] sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarFallback>{currentAccount.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Logged In
              </div>
              <h1 className="font-mono text-2xl uppercase tracking-[-0.04em] sm:text-4xl">
                {currentAccount.username} dashboard
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/">
                <LogOut className="size-4" />
                Back
              </Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map((card) => (
            <Card key={card.label}>
              <CardHeader className="pb-3">
                <CardDescription>{card.label}</CardDescription>
                <CardTitle>{card.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--muted-foreground)]">
                {card.detail}
              </CardContent>
            </Card>
          ))}
        </section>

        <Tabs defaultValue="subscription">
          <TabsList>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="cleanliness">Cleanliness</TabsTrigger>
          </TabsList>

          <TabsContent value="subscription" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Import Access</CardTitle>
                <CardDescription>
                  这里将来接入真实后端后，按登录用户动态生成订阅与一键导入链接。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    Subscription URL
                  </div>
                  <p className="mt-3 break-all text-sm">{currentAccount.importUrl}</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    Clash Verge One-Click
                  </div>
                  <p className="mt-3 break-all text-sm">{currentAccount.oneClickUrl}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => handleCopy(currentAccount.importUrl, "subscription")}
                    className="flex-1"
                  >
                    <ClipboardCopy className="size-4" />
                    {copied === "subscription" ? "Copied" : "Copy Subscription"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleCopy(currentAccount.oneClickUrl, "one-click")}
                    className="flex-1"
                  >
                    <WandSparkles className="size-4" />
                    {copied === "one-click" ? "Copied" : "Copy One-Click"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account State</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div className="space-y-1">
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      Plan
                    </div>
                    <div>{currentAccount.plan}</div>
                  </div>
                  <Badge variant="success">{currentAccount.status}</Badge>
                </div>
                <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Traffic usage</span>
                    <span className="font-mono">
                      {currentAccount.trafficUsed} / {currentAccount.trafficTotal} GB
                    </span>
                  </div>
                  <Progress value={trafficPercent} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      <UserRound className="size-4" />
                      Username
                    </div>
                    <p className="mt-2">{currentAccount.username}</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      <Activity className="size-4" />
                      Last Seen
                    </div>
                    <p className="mt-2">{currentAccount.lastSeen}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Breakdown</CardTitle>
                <CardDescription>
                  这部分适合后面接 Xray usage export 或你自己的日志聚合。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Streaming", value: "14.8 GB", percent: 38 },
                  { label: "Web", value: "8.1 GB", percent: 21 },
                  { label: "Downloads", value: "10.9 GB", percent: 29 },
                  { label: "Other", value: "4.4 GB", percent: 12 },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="font-mono">{item.value}</span>
                    </div>
                    <Progress value={item.percent} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Device Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72">
                  <div className="space-y-3">
                    {[
                      "macOS · Clash Verge · 2026-04-04 13:22",
                      "iPhone · Stash · 2026-04-04 09:12",
                      "Windows · Clash Verge · 2026-04-03 21:07",
                      "iPad · Surge · 2026-04-03 20:51",
                    ].map((entry) => (
                      <div
                        key={entry}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4 text-sm"
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cleanliness" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card>
              <CardHeader>
                <CardTitle>ping0.cc Snapshot</CardTitle>
                <CardDescription>建议真实项目里做缓存，不要每次页面刷新就打外部检测。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      Score
                    </div>
                    <div className="mt-1 text-3xl">{currentAccount.cleanliness.score}</div>
                  </div>
                  <Badge variant="accent">Fresh</Badge>
                </div>
                <div className="grid gap-3">
                  {[
                    ["DNS", currentAccount.cleanliness.dns],
                    ["Streaming", currentAccount.cleanliness.stream],
                    ["Payment", currentAccount.cleanliness.payment],
                    ["Source", currentAccount.cleanliness.source],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                        {label}
                      </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Integrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <Globe2 className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>保留 ping0.cc 外链，用户可查看原始检测页。</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <Shield className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>做检测历史表，避免单次波动让用户误判节点质量。</p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <Radar className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>把 DNS、流媒体、支付、风控分项拆开显示，不只给总分。</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    API target
                  </div>
                  <p className="mt-2 break-all">{siteConfig.apiBaseUrl}</p>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://ping0.cc" target="_blank" rel="noreferrer">
                    Open ping0.cc
                    <ExternalLink className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
