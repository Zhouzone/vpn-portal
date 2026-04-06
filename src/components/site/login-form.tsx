"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, KeyRound, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [username, setUsername] = useState("akira");
  const [password, setPassword] = useState("temp-demo-001");

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>Member Access</CardTitle>
        <CardDescription>
          当前是前端演示版。登录页只展示流程，不会校验真实用户数据库。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <label className="block space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            Username
          </span>
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="pl-10"
            />
          </div>
        </label>
        <label className="block space-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            Password
          </span>
          <div className="relative">
            <KeyRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="pl-10"
            />
          </div>
        </label>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button asChild className="flex-1">
            <Link href="/dashboard">
              Enter Portal
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/dashboard">View Demo Dashboard</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
