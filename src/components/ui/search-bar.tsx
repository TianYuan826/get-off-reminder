import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative flex w-full max-w-lg border rounded-full">
      {/* 输入框 */}
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-l-full bg-white px-4 py-2 text-sm shadow-inner outline-none focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {/* 搜索按钮 */}
      <button className="flex items-center justify-center rounded-r-full bg-gray-100 ml-[1px] px-4 hover:bg-gray-200">
        <Search className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}
