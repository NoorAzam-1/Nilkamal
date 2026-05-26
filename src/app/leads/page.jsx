import LeadTable from '@/components/LeadTable'
import MainLayout from '../page'

export default function LeadsPage() {
  return (
    <MainLayout>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Leads Management
        </h1>
      </div>

      <LeadTable />

    </MainLayout>
  )
}