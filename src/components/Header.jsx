import { Bell, MessageCircle, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-[#FFF8F4]/80 backdrop-blur-md border-b border-[#E8E1DE] flex items-center justify-between px-8 z-40">

      <div className="flex items-center gap-6">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search leads..."
            className="pl-10 pr-4 py-2 rounded-full bg-white border border-[#E8E1DE] outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Bell />
        <MessageCircle />

        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold">
              Noor Azam
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-300" />
        </div>
      </div>
    </header>
  )
}