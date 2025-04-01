import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SearchBar } from "../ui/search-bar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur">
      <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
        {/* 左侧占位，让 SearchBar 居中 */}
        <div className="w-1/5" />

        {/* 搜索框居中 */}
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        {/* 右侧的 ModeToggle 和 UserNav */}
        <div className="w-1/4 flex justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
