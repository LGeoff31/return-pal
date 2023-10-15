import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import MobileMenuFooter from './MobileMenuFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  type IconDefinition,
  faBars,
  faCircleInfo,
  faUsers,
  faTruck,
  faRightToBracket,
  faTags,
} from '@fortawesome/free-solid-svg-icons'
import { type PropsWithChildren } from 'react'

type MobileViewType = PropsWithChildren & {
  href: string
  icon: IconDefinition
}

function MobileLink({ href, icon, children }: MobileViewType) {
  return (
    <SheetClose asChild>
      <Link href={href} className="text-secondary hover:text-primary">
        <p className="flex gap-x-2">
          <FontAwesomeIcon icon={icon} width={'17'} />
          {children}
        </p>
      </Link>
    </SheetClose>
  )
}

export default function MobileMenu() {
  return (
    <nav className="flex w-full justify-end px-2 md:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} width={'20'} />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex w-screen flex-col items-start justify-start pl-12"
        >
          <SheetTitle className="mb-8 mt-8">
            <Image
              src={'/navbar-logo.png'}
              alt="logo"
              width={200}
              height={200}
            />
          </SheetTitle>
          <p className="flex w-[70%] gap-x-2 border-b border-b-grey pb-2">
            <FontAwesomeIcon icon={faBars} width={'17'} />
            Menu
          </p>
          <MobileLink href="/" icon={faCircleInfo}>
            How it Works
          </MobileLink>
          <MobileLink href="/" icon={faTags}>
            Pricing
          </MobileLink>
          <MobileLink href="/" icon={faUsers}>
            About Us
          </MobileLink>
          <MobileLink href="/" icon={faRightToBracket}>
            Sign In
          </MobileLink>
          <MobileLink href="/" icon={faTruck}>
            Schedule Pickup
          </MobileLink>
          <MobileMenuFooter />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
