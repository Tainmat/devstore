import { Header } from '@/components/layout/header/header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
