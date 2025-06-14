"use client";

import { Footer } from "@/components/panel/Footer";
import { cn } from "@/lib/utils";
import { Header } from "@/components/panel/Header";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部 Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* 中间内容区域，自动撑开 */}
      <main
        className={cn(
          "flex-1 bg-zinc-50 dark:bg-zinc-900 ease-in-out duration-300 p-2"
        )}
      >
        {children}
      </main>

      {/* 底部 Footer */}
      <footer className={cn("sticky bottom-0 z-50")}>
        <Footer />
      </footer>
    </div>
  );
}
