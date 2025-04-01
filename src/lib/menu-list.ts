import { Star, Book, SquarePen, LucideIcon } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel?: string; // 可选分组标题
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      menus: [
        {
          href: "/exam-info", // 修正重复路径
          label: "入試情報",
          icon: SquarePen,
          active: pathname === "/exam-info"
        },
        {
          href: "/starred",
          label: "スター付き",
          icon: Star,
          active: pathname === "/starred"
        },
        {
          href: "/past-exam",
          label: "過去問",
          icon: Book,
          active: pathname === "/past-exam"
        }
      ]
    }
  ];
}
