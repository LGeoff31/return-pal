import { type PropsWithChildren } from 'react'
import ReturnProcessHeader from '@/components/Headers/ReturnProcessHeader'
import ReturnProcessContextProvider, {
  type ReturnProcessStep,
} from '@/context/ReturnProcessContext'
import PickDate from '@/return-process/pick-date'
import Address from '@/return-process/address'
import Pickup from '@/return-process/pickup'
import Pricing from '@/return-process/pricing'
import PackageInfo from '@/return-process/package-info'
import Confirmation from '@/return-process/confirmation'

const steps: ReturnProcessStep[] = [
  {
    id: 'pick-date',
    name: 'Pickup Date',
    component: <PickDate />,
  },
  {
    id: 'address',
    name: 'Addresses',
    component: <Address />,
  },
  {
    id: 'pickup-details',
    name: 'Pickup Details',
    component: <Pickup />,
  },
  {
    id: 'pricing',
    name: 'Pricing',
    component: <Pricing />,
  },
  {
    id: 'package-info',
    name: 'Package Info',
    component: <PackageInfo />,
  },
  {
    id: 'confirmation',
    name: 'Confirm',
    component: <Confirmation />,
  },
]

export default function ReturnProcessLayout({ children }: PropsWithChildren) {
  return (
    <ReturnProcessContextProvider steps={steps}>
      <div className="flex h-[100dvh] overflow-hidden bg-paleBlue">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <ReturnProcessHeader />
          <main className="grow">{children}</main>
        </div>
      </div>
    </ReturnProcessContextProvider>
  )
}

export const getLayout = (page: React.ReactElement) => {
  return <ReturnProcessLayout>{page}</ReturnProcessLayout>
}
