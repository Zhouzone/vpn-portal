import { CircleGauge, Globe, MonitorSmartphone, ShieldCheck, Sparkles } from "lucide-react";

import { GridBackground } from "@/components/site/grid-background";
import { LoginForm } from "@/components/site/login-form";
import { UsageChart } from "@/components/site/usage-chart";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  faqItems,
  featureList,
  installGuides,
  portalSummary,
  quickNotes,
  sampleAccounts,
} from "@/lib/mock-data";
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
                Shared JP Node Guide
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">
                一个给小规模用户查看节点概况、导入说明和状态快照的公开说明页。
                私有订阅和成员分发仍然由管理员线下处理。
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
                <CardTitle>Site Scope</CardTitle>
                <CardDescription>
                  这套 GitHub Pages 站点只负责公开教程和导入说明，不承载真实登录或私有订阅托管。
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
                <CardTitle>Client Guides</CardTitle>
                <CardDescription>
                  按平台选择客户端。桌面端主推 Clash Verge Rev，移动端主推 Shadowrocket。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 lg:grid-cols-2">
                {installGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-mono text-sm uppercase tracking-[0.14em]">
                          {guide.title}
                        </div>
                        <div className="mt-1 text-sm text-[var(--muted-foreground)]">
                          {guide.app}
                        </div>
                      </div>
                      <Badge variant="accent">Guide</Badge>
                    </div>
                    <p className="mt-4 text-sm text-[var(--muted-foreground)]">{guide.summary}</p>
                    <div className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                      {guide.steps.map((step, index) => (
                        <p key={step}>
                          {index + 1}. {step}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Member Snapshot</CardTitle>
                <CardDescription>这里只展示共享池的成员快照样式，不展示真实密码或私有链接。</CardDescription>
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
                            {account.plan} · {account.lastSeen} · {account.delivery}
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
                <CardTitle>Node Snapshot</CardTitle>
                <CardDescription>
                  这是公开站点里适合保留的基础视图，用来展示共享池的大致波动。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UsageChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
                <CardDescription>把最常见的导入和连接问题直接写在公开页里。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel-2)] p-4"
                  >
                    <div className="font-mono text-sm uppercase tracking-[0.14em]">{item.question}</div>
                    <p className="mt-3 text-sm text-[var(--muted-foreground)]">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-6">
            <LoginForm />

            <Card>
              <CardHeader>
                <CardTitle>Quick Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[var(--muted-foreground)]">
                {quickNotes.map((note) => (
                  <div key={note} className="flex items-start gap-3">
                    <MonitorSmartphone className="mt-0.5 size-4 text-[var(--accent)]" />
                    <p>{note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Stays Private</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  <span>Delivery model</span>
                  <span>Admin direct</span>
                </div>
                <Separator />
                <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 size-4 text-[var(--accent)]" />
                    <p>真实账号密码和订阅 token 只保留在管理员手里，不进入 GitHub Pages。</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 size-4 text-[var(--accent)]" />
                    <p>一键导入链接和订阅地址通过私聊分发，不在网站里公开列出。</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleGauge className="mt-0.5 size-4 text-[var(--accent)]" />
                    <p>用量统计先保留成公共快照，不在网页上暴露按用户的真实数据。</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 size-4 text-[var(--accent)]" />
                    <p>纯净度可以展示公共检测结果，但不要把管理员面板做成公开入口。</p>
                  </div>
                </div>
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
                  GitHub Pages 只负责公开前端。真实订阅、登录能力和私有数据不要放在这里。
                </p>
              </CardContent>
            </Card>
          </aside>
        </main>
      </div>
    </div>
  );
}
