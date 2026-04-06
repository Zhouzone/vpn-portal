import Link from "next/link";

import { PortalShell } from "@/components/site/portal-shell";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <PortalShell />
      <div className="fixed bottom-6 right-6 z-20 hidden sm:block">
        <Button asChild variant="accent" size="lg">
          <Link href="/login">Login Demo</Link>
        </Button>
      </div>
    </>
  );
}
