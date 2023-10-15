import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

export type MenuItem = {
  title: string
  href: string
}

const menuItems: MenuItem[] = [
  {
    title: 'How it Works',
    href: '/howitworks',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
]

export default function DesktopHeader() {
  const pathname = usePathname()
  return (
    <div className="hidden w-full items-center align-middle md:flex">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full shrink items-center justify-center gap-x-4">
          {menuItems.map((menuItem) => {
            return (
              <Link
                key={menuItem.href}
                href={menuItem.href}
                className={cn(
                  'text-secondary shrink font-bold drop-shadow-lg',
                  pathname === menuItem.href && 'text-primary'
                )}
              >
                {menuItem.title}
              </Link>
            )
          })}
        </div>
        <div className="flex space-x-2 lg:space-x-5">
          <Button variant={'secondary'} className="h-9 w-24">
            Sign In
          </Button>
          <Button className="h-9 w-36">Schedule Pickup</Button>
        </div>
      </div>
    </div>
  )
}
