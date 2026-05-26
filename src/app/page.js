import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-[#FFF8F4] min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <main className="pt-24 px-8 pb-8">{children}</main>
      </div>
    </div>
  );
}
