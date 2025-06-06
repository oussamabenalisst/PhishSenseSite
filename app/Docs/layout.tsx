import Sidebar from "@/components/nav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-[#f0f2f5] min-h-screen">{children}</main>
    </div>
  );
}
