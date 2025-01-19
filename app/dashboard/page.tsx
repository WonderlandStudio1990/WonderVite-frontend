'use client'

import dynamic from 'next/dynamic'
import { Loader2 } from "lucide-react"
import { AuthProvider } from '@/providers/AuthProvider'

const DashboardPage = dynamic(
  () => import('@/components/dashboard/DashboardPage'),
  {
    loading: () => (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    ),
    ssr: false
  }
)

export default function Dashboard() {
  return (
    <AuthProvider>
      <DashboardPage />
    </AuthProvider>
  )
}
