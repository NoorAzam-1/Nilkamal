'use client'

import { useEffect, useState } from 'react'
import {
  TrendingUp,
  Flame,
  ReceiptText,
  CheckCircle2,
  Store,
  ShoppingBag,
  IndianRupee,
  Clock3,
} from 'lucide-react'
import MainLayout from '@/app/page'

export default function Dashboard() {
  // ---------------- HYDRATION FIX ----------------
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // ---------------- DASHBOARD DATA ----------------
  const stats = [
    {
      title: 'Today Leads',
      value: 24,
      icon: TrendingUp,
      bg: 'bg-white',
    },
    {
      title: 'Hot Leads',
      value: 42,
      icon: Flame,
      bg: 'bg-white',
    },
    {
      title: 'Quotations',
      value: 118,
      icon: ReceiptText,
      bg: 'bg-white',
    },
    {
      title: 'Converted',
      value: 86,
      icon: CheckCircle2,
      bg: 'bg-white',
    },
    {
      title: 'Showroom Visits',
      value: 56,
      icon: Store,
      bg: 'bg-white',
    },
    {
      title: 'Orders',
      value: 72,
      icon: ShoppingBag,
      bg: 'bg-white',
    },
  ]

  const activities = [
    {
      title: 'Quotation sent to Anita',
      time: '2 mins ago',
      product: 'Living Room Set',
    },
    {
      title: 'New WhatsApp lead from Rahul',
      time: '15 mins ago',
      product: 'Kitchen Design',
    },
    {
      title: 'Showroom visit completed',
      time: '1 hour ago',
      product: 'Bedroom Furniture',
    },
  ]

  const followups = [
    {
      name: 'Sameer Sharma',
      time: 'Today 2:30 PM',
      tag: 'Urgent',
    },
    {
      name: 'Pooja Verma',
      time: 'Today 4:00 PM',
      tag: 'Medium',
    },
    {
      name: 'David Miller',
      time: 'Tomorrow 11:00 AM',
      tag: 'Low',
    },
  ]

  const executives = [
    {
      name: 'Rajesh Kumar',
      sales: '₹ 4.2L',
      progress: '85%',
    },
    {
      name: 'Priya Menon',
      sales: '₹ 3.8L',
      progress: '72%',
    },
    {
      name: 'Vikram Singh',
      sales: '₹ 2.9L',
      progress: '60%',
    },
  ]

  return (
    <MainLayout>
    <div className="min-h-screen bg-[#FAF7F5] p-6 lg:p-10">

      {/* TOP HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">

        <div>
          <h1 className="text-4xl font-bold text-[#1D1B19]">
            Executive Overview
          </h1>

          <p className="text-[#7B726A] mt-2">
            Live performance data from Nilkamal CRM
          </p>
        </div>

        <div className="flex gap-3">

          <button className="
            px-5
            h-12
            rounded-2xl
            border
            border-[#DDD3CB]
            bg-white
            hover:bg-[#F5F1EE]
            transition
          ">
            Last 30 Days
          </button>

          <button className="
            px-5
            h-12
            rounded-2xl
            bg-[#6C5842]
            text-white
            hover:opacity-90
            transition
          ">
            Export Report
          </button>

        </div>

      </div>

      {/* BIG CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

        {/* TOTAL LEADS */}
        <div className="
          xl:col-span-2
          bg-white
          rounded-[32px]
          p-8
          border
          border-[#ECE4DE]
          shadow-sm
        ">

          <p className="text-sm text-[#8C8177] uppercase">
            Total Leads
          </p>

          <h2 className="text-6xl font-bold text-[#6C5842] mt-3">
            1,284
          </h2>

          <div className="flex items-center gap-2 mt-5 text-[#6C5842]">
            <TrendingUp size={18} />

            <span className="font-semibold">
              12.5% increase
            </span>
          </div>

        </div>

        {/* SMALL STATS */}
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-[28px]
              p-6
              border
              border-[#ECE4DE]
              shadow-sm
              hover:-translate-y-1
              transition-all
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-[#8C8177]">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {item.value}
                </h3>

              </div>

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-[#F3ECE7]
                flex
                items-center
                justify-center
              ">

                <item.icon
                  size={20}
                  className="text-[#6C5842]"
                />

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* PAYMENT + FUNNEL */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mb-10">

        {/* FUNNEL */}
        <div className="
          xl:col-span-8
          bg-white
          rounded-[32px]
          border
          border-[#ECE4DE]
          p-8
        ">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-2xl font-bold">
              Conversion Funnel
            </h2>

            <button className="text-[#7B726A]">
              This Quarter
            </button>

          </div>

          <div className="space-y-6">

            {/* LEADS */}
            <div>

              <div className="flex justify-between mb-2">
                <span>Leads</span>
                <span>1284</span>
              </div>

              <div className="h-5 rounded-full bg-[#EFE7E1] overflow-hidden">

                <div className="h-full w-full bg-[#6C5842]" />

              </div>

            </div>

            {/* VISITS */}
            <div>

              <div className="flex justify-between mb-2">
                <span>Visits</span>
                <span>578</span>
              </div>

              <div className="h-5 rounded-full bg-[#EFE7E1] overflow-hidden">

                <div className="h-full w-[45%] bg-[#8A7358]" />

              </div>

            </div>

            {/* QUOTES */}
            <div>

              <div className="flex justify-between mb-2">
                <span>Quotes</span>
                <span>282</span>
              </div>

              <div className="h-5 rounded-full bg-[#EFE7E1] overflow-hidden">

                <div className="h-full w-[22%] bg-[#A08A71]" />

              </div>

            </div>

            {/* ORDERS */}
            <div>

              <div className="flex justify-between mb-2">
                <span>Orders</span>
                <span>102</span>
              </div>

              <div className="h-5 rounded-full bg-[#EFE7E1] overflow-hidden">

                <div className="h-full w-[8%] bg-[#C5B6A5]" />

              </div>

            </div>

          </div>

        </div>

        {/* PAYMENT */}
        <div className="
          xl:col-span-4
          bg-[#6C5842]
          rounded-[32px]
          p-8
          text-white
          relative
          overflow-hidden
        ">

          <p className="uppercase text-sm text-[#E7D7C8]">
            Pending Payments
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ₹ 12,45,000
          </h2>

          <div className="flex items-center gap-2 mt-6">

            <IndianRupee size={18} />

            <span>
              Across 18 high-value leads
            </span>

          </div>

          <div className="
            absolute
            right-[-20px]
            bottom-[-20px]
            opacity-10
          ">

            <IndianRupee size={180} />

          </div>

        </div>

      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">

        {/* ACTIVITIES */}
        <div className="
          xl:col-span-4
          bg-white
          rounded-[32px]
          border
          border-[#ECE4DE]
          p-8
        ">

          <h2 className="text-2xl font-bold mb-8">
            Recent Activities
          </h2>

          <div className="space-y-6">

            {activities.map((item, index) => (
              <div
                key={index}
                className="flex gap-4"
              >

                <div className="
                  w-10
                  h-10
                  rounded-2xl
                  bg-[#F3ECE7]
                  flex
                  items-center
                  justify-center
                ">

                  <Clock3
                    size={18}
                    className="text-[#6C5842]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#7B726A] mt-1">
                    {item.time} • {item.product}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* FOLLOWUPS */}
        <div className="
          xl:col-span-4
          bg-white
          rounded-[32px]
          border
          border-[#ECE4DE]
          p-8
        ">

          <h2 className="text-2xl font-bold mb-8">
            Upcoming Followups
          </h2>

          <div className="space-y-4">

            {followups.map((item, index) => (
              <div
                key={index}
                className="
                  border
                  border-[#ECE4DE]
                  rounded-2xl
                  p-5
                  hover:bg-[#FAF7F5]
                  transition
                  cursor-pointer
                "
              >

                <div className="flex justify-between">

                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <span className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-[#F3ECE7]
                    text-[#6C5842]
                  ">
                    {item.tag}
                  </span>

                </div>

                <p className="text-sm text-[#7B726A] mt-2">
                  {item.time}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* EXECUTIVES */}
        <div className="
          xl:col-span-4
          bg-white
          rounded-[32px]
          border
          border-[#ECE4DE]
          p-8
        ">

          <h2 className="text-2xl font-bold mb-8">
            Top Sales Executives
          </h2>

          <div className="space-y-6">

            {executives.map((item, index) => (
              <div key={index}>

                <div className="flex items-center justify-between mb-2">

                  <div>

                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-sm text-[#7B726A]">
                      This Month
                    </p>

                  </div>

                  <h5 className="font-bold text-[#6C5842]">
                    {item.sales}
                  </h5>

                </div>

                <div className="
                  h-3
                  rounded-full
                  bg-[#EFE7E1]
                  overflow-hidden
                ">

                  <div
                    className="h-full bg-[#6C5842]"
                    style={{
                      width: item.progress,
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
    </MainLayout>
  )
}