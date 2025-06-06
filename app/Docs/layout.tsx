import Sidebar from "@/components/nav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-6 bg-[#1a2330] text-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
