import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/panel/user-nav";

export function Header() {
  return (
    <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
      {/* 左侧占位，让 SearchBar 居中 */}
      <div className="w-1/5" />

      {/* 右侧的 ModeToggle 和 UserNav */}
      <div className="w-1/4 flex justify-end">
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  );
}
