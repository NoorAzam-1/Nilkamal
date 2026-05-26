
export default function MetricCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#E8E1DE] shadow-sm">

      <p className="text-sm text-gray-500 uppercase">
        {title}
      </p>

      <h3 className="text-4xl font-bold mt-3 text-[#6C5842]">
        {value}
      </h3>

    </div>
  )
}