'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Plus,
  X,
} from 'lucide-react'

export default function SidebarCRM() {
  // ---------------- PATHNAME ----------------
  const pathname = usePathname()

  // ---------------- HYDRATION FIX ----------------
  const [mounted, setMounted] = useState(false)

  // ---------------- MODAL ----------------
  const [openModal, setOpenModal] = useState(false)

  // ---------------- FORM ----------------
  const initialForm = {
    customerName: '',
    phone: '',
    product: '',
    budget: '',
    source: '',
    status: '',
    notes: '',
  }

  const [formData, setFormData] =
    useState(initialForm)

  // ---------------- MOUNT ----------------
  useEffect(() => {
    setMounted(true)
  }, [])

  // ---------------- MENUS ----------------
  const menus = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Leads',
      icon: Users,
      path: '/leads',
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      path: '/analytics',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/settings',
    },
  ]

  // ---------------- INPUT CHANGE ----------------
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // ---------------- SAVE LEAD ----------------
  const handleSaveLead = () => {
    if (!formData.customerName || !formData.phone) {
      alert('Please fill required fields')
      return
    }

    const existingLeads = JSON.parse(
      localStorage.getItem('crm_leads') || '[]'
    )

    const newLead = {
      id: Date.now(),
      ...formData,
    }

    localStorage.setItem(
      'crm_leads',
      JSON.stringify([
        newLead,
        ...existingLeads,
      ])
    )

    setFormData(initialForm)

    setOpenModal(false)
  }

  // ---------------- HYDRATION FIX ----------------
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* SIDEBAR */}
      <aside
        className="
          fixed
          left-0
          top-0
          h-screen
          w-64
          bg-[#FFFDFB]
          border-r
          border-[#ECE4DE]
          flex
          flex-col
          z-50
        "
      >

        {/* LOGO */}
        <div className="px-6 pt-8 pb-6">

          <h1 className="text-3xl font-bold text-[#6C5842]">
            Nilkamal
          </h1>

          <p className="text-sm text-[#9A8F84] mt-1">
            Furniture CRM
          </p>

        </div>

        {/* NEW LEAD BUTTON */}
        <div className="px-4 mb-6">

          <button
            onClick={() => setOpenModal(true)}
            className="
              w-full
              h-12
              rounded-2xl
              bg-[#6C5842]
              text-white
              flex
              items-center
              justify-center
              gap-2
              hover:opacity-90
              transition
            "
          >

            <Plus size={18} />

            New Lead

          </button>

        </div>

        {/* MENUS */}
        <nav className="flex-1 px-3 space-y-2">

          {menus.map((menu) => {
            const active =
              pathname === menu.path

            return (
              <Link
                key={menu.name}
                href={menu.path}
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  transition-all

                  ${
                    active
                      ? 'bg-[#F3ECE7] text-[#6C5842]'
                      : 'hover:bg-[#F8F4F1] text-[#5F554C]'
                  }
                `}
              >

                {/* ICON */}
                <div
                  className={`
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center

                    ${
                      active
                        ? 'bg-white'
                        : 'bg-[#FAF7F5]'
                    }
                  `}
                >

                  <menu.icon size={18} />

                </div>

                <span className="font-medium">
                  {menu.name}
                </span>

              </Link>
            )
          })}

        </nav>

        {/* PROFILE */}
        <div className="p-4 border-t border-[#ECE4DE]">

          <div className="flex items-center gap-3">

            <div className="
              w-11
              h-11
              rounded-2xl
              bg-[#DDD3CB]
            " />

            <div>

              <h4 className="font-semibold">
                Noor Azam
              </h4>

              <p className="text-sm text-gray-500">
                Admin
              </p>

            </div>

          </div>

        </div>

      </aside>

      {/* MODAL */}
      {openModal && (
        <div className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          flex
          items-center
          justify-center
          z-[100]
          p-5
        ">

          <div className="
            w-full
            max-w-2xl
            bg-white
            rounded-[32px]
            p-8
            relative
          ">

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpenModal(false)
              }
              className="
                absolute
                right-5
                top-5
                w-10
                h-10
                rounded-xl
                bg-[#F8F4F1]
                flex
                items-center
                justify-center
              "
            >

              <X size={18} />

            </button>

            {/* HEADER */}
            <div className="mb-8">

              <h2 className="text-3xl font-bold">
                Create New Lead
              </h2>

              <p className="text-gray-500 mt-2">
                Add customer details
              </p>

            </div>

            {/* FORM */}
            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Customer Name"
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              />

              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder="Product"
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              />

              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Budget"
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              />

              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              >

                <option value="">
                  Select Source
                </option>

                <option value="WhatsApp">
                  WhatsApp
                </option>

                <option value="Call">
                  Call
                </option>

              </select>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                  h-12
                  px-4
                  rounded-2xl
                  border
                  outline-none
                "
              >

                <option value="">
                  Select Status
                </option>

                <option value="New Lead">
                  New Lead
                </option>

                <option value="Interested">
                  Interested
                </option>

                <option value="Quotation Sent">
                  Quotation Sent
                </option>

              </select>

              <textarea
                rows={4}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes..."
                className="
                  col-span-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  outline-none
                  resize-none
                "
              />

            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() =>
                  setOpenModal(false)
                }
                className="
                  px-6
                  h-12
                  rounded-2xl
                  border
                "
              >
                Cancel
              </button>

              <button
                onClick={handleSaveLead}
                className="
                  px-6
                  h-12
                  rounded-2xl
                  bg-[#6C5842]
                  text-white
                "
              >
                Save Lead
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}