import Sidebar from "@/components/nav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-[#1a2330] min-h-screen text-white">
        {children}
      </main>
    </div>
  );
}
