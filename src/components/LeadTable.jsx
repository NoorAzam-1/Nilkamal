'use client'

import { useEffect, useState } from 'react'

import {
  Search,
  Download,
  Plus,
  Phone,
  MessageCircle,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function LeadTable() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const leads = [
    {
      id: '#LD-8821',
      customer: 'Rahul Sharma',
      phone: '9876543210',
      product: 'Luxury Sofa Set',
      budget: '₹1,25,000',
      source: 'WhatsApp',
      assigned: 'Rajesh',
      status: 'Quotation Sent',
      followup: 'Today',
    },

    {
      id: '#LD-8822',
      customer: 'Aman Verma',
      phone: '9876541230',
      product: 'Dining Table',
      budget: '₹78,000',
      source: 'Call',
      assigned: 'Amit',
      status: 'Interested',
      followup: 'Tomorrow',
    },

    {
      id: '#LD-8823',
      customer: 'Priya Singh',
      phone: '9988776655',
      product: 'Bedroom Set',
      budget: '₹2,10,000',
      source: 'Walk-in',
      assigned: 'Neha',
      status: 'Order Confirmed',
      followup: 'Completed',
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full space-y-5">

      <div className="
        flex
        flex-col
        2xl:flex-row
        2xl:items-center
        2xl:justify-between
        gap-4
      ">

        <div className="
          relative
          w-full
          2xl:max-w-md
        ">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#8C8177]
            "
          />

          <input
            type="text"
            placeholder="Search leads..."
            className="
              w-full
              h-12
              pl-11
              pr-4
              rounded-2xl
              bg-white
              border
              border-[#E8E1DE]
              outline-none
              text-sm
            "
          />

        </div>

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-3
          w-full
          2xl:w-auto
        ">

          <button className="
            w-full
            sm:w-auto
            px-5
            h-12
            rounded-2xl
            border
            border-[#D9CEC5]
            bg-white
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#F7F3F0]
            transition
          ">

            <Download size={18} />

            Export

          </button>

          <button className="
            w-full
            sm:w-auto
            px-5
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
          ">

            <Plus size={18} />

            Add Lead

          </button>

        </div>

      </div>

      <div className="
        flex
        gap-3
        overflow-x-auto
        scrollbar-hide
        pb-2
      ">

        {[
          'All Leads',
          'New',
          'Interested',
          'Quotation Sent',
          'Visit Scheduled',
          'Confirmed',
        ].map((tab, index) => (
          <button
            key={index}
            className={`
              whitespace-nowrap
              shrink-0
              px-5
              py-2.5
              rounded-full
              text-sm

              ${
                index === 0
                  ? 'bg-[#6C5842] text-white'
                  : 'bg-white border border-[#E8E1DE]'
              }
            `}
          >
            {tab}
          </button>
        ))}

      </div>

      <div className="
        bg-white
        border
        border-[#E8E1DE]
        rounded-[28px]
        p-4
        sm:p-6
      ">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        ">

          <div>

            <label className="
              text-sm
              text-[#7B726A]
              mb-2
              block
            ">
              Date Range
            </label>

            <input
              type="text"
              placeholder="Select date"
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-[#E8E1DE]
                outline-none
                text-sm
              "
            />

          </div>

          <div>

            <label className="
              text-sm
              text-[#7B726A]
              mb-2
              block
            ">
              Product
            </label>

            <select
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-[#E8E1DE]
                outline-none
                text-sm
              "
            >
              <option>All Products</option>
              <option>Sofa</option>
              <option>Bedroom</option>
            </select>

          </div>

          <div>

            <label className="
              text-sm
              text-[#7B726A]
              mb-2
              block
            ">
              Budget
            </label>

            <select
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-[#E8E1DE]
                outline-none
                text-sm
              "
            >
              <option>All Budgets</option>
              <option>₹50k - ₹1L</option>
              <option>₹1L+</option>
            </select>

          </div>

          <div>

            <label className="
              text-sm
              text-[#7B726A]
              mb-2
              block
            ">
              Employee
            </label>

            <select
              className="
                w-full
                h-11
                px-4
                rounded-xl
                border
                border-[#E8E1DE]
                outline-none
                text-sm
              "
            >
              <option>All Staff</option>
              <option>Rajesh</option>
              <option>Neha</option>
            </select>

          </div>

        </div>

      </div>

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        2xl:hidden
        gap-4
      ">

        {leads.map((lead, index) => (
          <div
            key={index}
            className="
              bg-white
              border
              border-[#E8E1DE]
              rounded-[28px]
              p-5
            "
          >

            <div className="
              flex
              items-start
              justify-between
              gap-3
            ">

              <div>

                <h3 className="
                  text-lg
                  font-bold
                ">
                  {lead.customer}
                </h3>

                <p className="
                  text-sm
                  text-[#8C8177]
                  mt-1
                ">
                  {lead.phone}
                </p>

              </div>

              <span className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-[#F3ECE7]
                text-[#6C5842]
                whitespace-nowrap
              ">
                {lead.status}
              </span>

            </div>

            <div className="
              grid
              grid-cols-2
              gap-4
              mt-5
            ">

              <div>
                <p className="
                  text-xs
                  text-[#8C8177]
                ">
                  Product
                </p>

                <h4 className="
                  text-sm
                  font-medium
                  mt-1
                ">
                  {lead.product}
                </h4>
              </div>

              <div>
                <p className="
                  text-xs
                  text-[#8C8177]
                ">
                  Budget
                </p>

                <h4 className="
                  text-sm
                  font-medium
                  mt-1
                ">
                  {lead.budget}
                </h4>
              </div>

              <div>
                <p className="
                  text-xs
                  text-[#8C8177]
                ">
                  Source
                </p>

                <h4 className="
                  text-sm
                  font-medium
                  mt-1
                ">
                  {lead.source}
                </h4>
              </div>

              <div>
                <p className="
                  text-xs
                  text-[#8C8177]
                ">
                  Assigned
                </p>

                <h4 className="
                  text-sm
                  font-medium
                  mt-1
                ">
                  {lead.assigned}
                </h4>
              </div>

            </div>

            <div className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
              mt-6
            ">

              <p className="
                text-sm
                text-[#7B726A]
              ">
                Followup: {lead.followup}
              </p>

              <div className="
                flex
                items-center
                gap-2
              ">

                <button className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#F5F1EE]
                  flex
                  items-center
                  justify-center
                ">

                  <MessageCircle
                    size={17}
                    className="text-green-600"
                  />

                </button>

                <button className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#F5F1EE]
                  flex
                  items-center
                  justify-center
                ">

                  <Phone
                    size={17}
                    className="text-[#6C5842]"
                  />

                </button>

                <button className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#F5F1EE]
                  flex
                  items-center
                  justify-center
                ">

                  <Pencil
                    size={17}
                    className="text-[#6C5842]"
                  />

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="
        hidden
        2xl:block
        bg-white
        rounded-[28px]
        border
        border-[#E8E1DE]
        overflow-hidden
      ">

        <div className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-4
          px-6
          py-4
          border-b
          border-[#ECE4DE]
          bg-[#FAF7F5]
        ">

          <div className="
            flex
            flex-wrap
            items-center
            gap-4
          ">

            <span className="
              text-sm
              font-medium
              text-[#6C5842]
            ">
              12 Leads Selected
            </span>

            <button className="
              text-sm
              hover:text-[#6C5842]
            ">
              Bulk Assign
            </button>

            <button className="
              text-sm
              hover:text-[#6C5842]
            ">
              Update Status
            </button>

          </div>

          <p className="
            text-sm
            text-[#8C8177]
          ">
            Updated 2 mins ago
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1400px]">

            <thead className="bg-[#F9F2EF]">

              <tr>

                <th className="px-6 py-4 text-left">
                  Lead ID
                </th>

                <th className="px-6 py-4 text-left">
                  Customer
                </th>

                <th className="px-6 py-4 text-left">
                  Product
                </th>

                <th className="px-6 py-4 text-left">
                  Budget
                </th>

                <th className="px-6 py-4 text-left">
                  Source
                </th>

                <th className="px-6 py-4 text-left">
                  Assigned
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-left">
                  Followup
                </th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {leads.map((lead, index) => (
                <tr
                  key={index}
                  className="
                    border-t
                    border-[#F1EAE5]
                    hover:bg-[#FCFAF8]
                    transition
                  "
                >

                  <td className="px-6 py-5 font-medium">
                    {lead.id}
                  </td>

                  <td className="px-6 py-5">

                    <h4 className="font-semibold">
                      {lead.customer}
                    </h4>

                    <p className="
                      text-sm
                      text-[#8C8177]
                      mt-1
                    ">
                      {lead.phone}
                    </p>

                  </td>

                  <td className="px-6 py-5">
                    {lead.product}
                  </td>

                  <td className="px-6 py-5">
                    {lead.budget}
                  </td>

                  <td className="px-6 py-5">
                    {lead.source}
                  </td>

                  <td className="px-6 py-5">
                    {lead.assigned}
                  </td>

                  <td className="px-6 py-5">

                    <span className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-[#F3ECE7]
                      text-[#6C5842]
                    ">
                      {lead.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">
                    {lead.followup}
                  </td>

                  <td className="px-6 py-5">

                    <div className="
                      flex
                      items-center
                      justify-end
                      gap-2
                    ">

                      <button className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#F5F1EE]
                        flex
                        items-center
                        justify-center
                      ">

                        <MessageCircle
                          size={17}
                          className="text-green-600"
                        />

                      </button>

                      <button className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#F5F1EE]
                        flex
                        items-center
                        justify-center
                      ">

                        <Phone
                          size={17}
                          className="text-[#6C5842]"
                        />

                      </button>

                      <button className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#F5F1EE]
                        flex
                        items-center
                        justify-center
                      ">

                        <Pencil
                          size={17}
                          className="text-[#6C5842]"
                        />

                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          px-6
          py-5
          border-t
          border-[#ECE4DE]
          bg-[#FAF7F5]
        ">

          <p className="
            text-sm
            text-[#7B726A]
          ">
            Showing 1 - 10 of 1248 leads
          </p>

          <div className="
            flex
            items-center
            gap-2
          ">

            <button className="
              w-10
              h-10
              rounded-xl
              border
              border-[#E8E1DE]
              flex
              items-center
              justify-center
            ">

              <ChevronLeft size={18} />

            </button>

            <button className="
              w-10
              h-10
              rounded-xl
              bg-[#6C5842]
              text-white
            ">
              1
            </button>

            <button className="
              w-10
              h-10
              rounded-xl
              border
              border-[#E8E1DE]
            ">
              2
            </button>

            <button className="
              w-10
              h-10
              rounded-xl
              border
              border-[#E8E1DE]
              flex
              items-center
              justify-center
            ">

              <ChevronRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}