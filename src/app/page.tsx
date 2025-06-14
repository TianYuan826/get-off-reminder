"use client";

import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  // 仅当访问根路径时跳转 /exam-info
  if (pathname === "/") {
    redirect("/homepage");
  }

  return null;
}
