import { ModeToggle } from "@/components/mode-toggle";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <div className="mx-4 sm:mx-8 flex h-14 items-center">
      {/* 左侧 */}

      {/* 右侧 */}
      <div className="ml-auto flex items-center">
        <ModeToggle />
        <Button
          size="icon"
          variant="outline"
          className="relative h-8 w-8 rounded-full"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
