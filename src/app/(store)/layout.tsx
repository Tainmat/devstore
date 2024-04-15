import { Header } from '@/components/layout/header/header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
