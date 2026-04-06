import Link from "next/link";
import { ArrowUpRight, CircleGauge, Globe, ShieldCheck, Sparkles } from "lucide-react";

import { GridBackground } from "@/components/site/grid-background";
import { LoginForm } from "@/components/site/login-form";
import { UsageChart } from "@/components/site/usage-chart";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { featureList, portalSummary, sampleAccounts } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site-config";

export function PortalShell() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <GridBackground />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-[var(--border)] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <Badge variant="accent">Mono Portal</Badge>
            <div className="space-y-2">
              <h1 className="max-w-3xl font-mono text-4xl uppercase leading-none tracking-[-0.04em] sm:text-6xl">
                Private Access For Your JP Node
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">
                一个给小规模用户分发账号、导入 Clash、查看流量、检查纯净度的私有面板。
                视觉风格按 Mono 方向处理，前端先走静态演示版。
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card className="min-w-44">
              <CardHeader className="pb-3">
                <CardDescription>Node</CardDescription>
                <CardTitle>{portalSummary.location}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-xs text-[var(--muted-foreground)]">
                  {portalSummary.nodeIp}
                </div>
              </CardContent>
            </Card>
            <Card className="min-w-44">
              <CardHeader className="pb-3">
                <CardDescription>Purity</CardDescription>
                <CardTitle>{portalSummary.cleanlinessScore}/100</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-xs text-[var(--muted-foreground)]">
                  ping0.cc snapshot
                </div>
              </CardContent>
            </Card>
          </div>
        </header>

        <main className="grid flex-1 gap-8 py-8 lg:grid-cols-[1.25fr_0.95fr]">
          <section className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Portal Scope</CardTitle>
                <CardDescription>
                  这套网站适合你现在的场景：4 到 5 个共享用户，登录后各自看自己的订阅和状态。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {featureList.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4 text-sm text-[var(--muted-foreground)]"
                  >
                    {feature}
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardDescription>Traffic</CardDescription>
                  <CardTitle>{portalSummary.monthlyTraffic}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--muted-foreground)]">
                  本月总流量消耗
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Latency</CardDescription>
                  <CardTitle>{portalSummary.avgLatency}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--muted-foreground)]">
                  对常用出口的平均延迟
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Users</CardDescription>
                  <CardTitle>{portalSummary.activeUsers}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--muted-foreground)]">
                  当前分发账号数量
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Account Preview</CardTitle>
                <CardDescription>未来每个用户登录后都会看到自己对应的入口。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleAccounts.map((account) => (
                  <div
                    key={account.username}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{account.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-mono text-sm uppercase tracking-[0.14em]">
                            {account.username}
                          </div>
                          <div className="text-sm text-[var(--muted-foreground)]">
                            {account.plan} · {account.lastSeen}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="success">{account.status}</Badge>
                        <Badge>{account.cleanliness.score}/100</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Pattern</CardTitle>
                <CardDescription>
                  这是为“看用量”和“看波动”准备的基础视图。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UsageChart />
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-6">
            <LoginForm />

            <Card>
              <CardHeader>
                <CardTitle>What The Real Product Needs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>真实登录鉴权，至少要有账号表、密码哈希、会话管理。</p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>订阅文件不能放到 GitHub Pages 公网裸露，需要登录后按用户下发。</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleGauge className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>用量统计需要从 Xray 日志、面板 API 或你自己的流量计量服务读取。</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 size-4 text-[var(--accent)]" />
                  <p>纯净度页可以集成 ping0.cc 检测结果，但要考虑抓取方式和频率。</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admin Shortlist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  <span>Recommended backend</span>
                  <span>Next + DB</span>
                </div>
                <Separator />
                <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  <p>1. PostgreSQL 或 SQLite 存用户、套餐、设备、订阅 token。</p>
                  <p>2. NextAuth/Auth.js 或自定义 session 做登录。</p>
                  <p>3. 后端 API 统一生成 YAML，不要把真实订阅写死在前端仓库。</p>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard">
                    Open Dashboard Mock
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deploy Boundary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[var(--muted-foreground)]">
                <p>
                  Frontend target:
                  <span className="ml-2 font-mono text-[var(--foreground)]">
                    {siteConfig.deploymentTarget}
                  </span>
                </p>
                <p>
                  API base:
                  <span className="ml-2 break-all font-mono text-[var(--foreground)]">
                    {siteConfig.apiBaseUrl}
                  </span>
                </p>
                <p>
                  GitHub Pages 只负责公开前端。真实登录、订阅生成、用量统计和纯净度缓存仍然要放在你的 VPS。
                </p>
              </CardContent>
            </Card>
          </aside>
        </main>
      </div>
    </div>
  );
}
