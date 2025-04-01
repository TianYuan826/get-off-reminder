import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="container mt-1 px-4 sm:px-4">{children}</div>
    </div>
  );
}
