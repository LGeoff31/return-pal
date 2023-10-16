import React from 'react'
import Image from 'next/image'
import {
  HomeSection,
  HomeSectionDescription,
  HomeSectionTitle,
  HomeSectionTitleHighlight,
} from '@/components/home/Home'
import { getLayout } from '@/layouts/DefaultLayout'
import { Button } from '@/components/ui/button'
import HomePageSVG from '@/components/SvgComponents/HomePageSVG'
import DemoCards from '@/components/DemoCards/DemoCards'
import CourierBanner from '@/components/CourierBanner'
import PartnerBanner from '@/components/PartnerBanner'

function Home() {
  return (
    <>
      <div className="container mx-auto flex max-w-5xl pb-16 pt-12 md:pt-20 xl:max-w-7xl">
        <div className="w-full space-y-8 px-4 sm:px-3 xl:space-y-12">
          <section className="flex gap-8">
            <HomeSection className="flex-1">
              <HomeSectionTitle className="font-medium">
                Return Your Package The{' '}
                <HomeSectionTitleHighlight>Easy Way</HomeSectionTitleHighlight>
              </HomeSectionTitle>
              <HomeSectionDescription className="px-10 text-start text-sm sm:text-base md:px-0 lg:text-lg">
                We handle returns of purchases from all online retailers. No
                need for printing labels, packaging, or visits to the post
                office.
              </HomeSectionDescription>
              <Button className="  self-stretch md:self-start">
                Schedule a Pickup Now
              </Button>
            </HomeSection>
            <div className="hidden aspect-[1.35/1] flex-1 md:block">
              <Image
                className="h-full w-full object-cover"
                src="/images/np_delivery_man.png"
                alt="Return Pal"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="m-[calc(-50vw+50%)]">
            <div className="relative">
              <HomePageSVG />
              <DemoCards />
            </div>
          </section>
          <section className="flex flex-col items-center gap-8">
            <h3 className="font-semibold md:text-2xl lg:text-3xl xl:text-5xl">
              We Accept <span className="text-primary">Any</span> Retailer{' '}
              <span className="text-primary">Any</span> Time
            </h3>
            <Image
              className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              src="/images/women_checking_order_process.png"
              alt="checking order process"
              width={890}
              height={500}
            />
            <article className="max-w-lg text-center text-base text-brand  sm:text-lg md:text-2xl lg:max-w-7xl lg:text-3xl  xl:text-5xl">
              We accept all online retailers with just a click of a button.
              Return all your packages without the hassle.
            </article>
          </section>
        </div>
      </div>
      <PartnerBanner />
      <div className="container mx-auto flex max-w-5xl pb-16 pt-12 md:pt-20 xl:max-w-7xl">
        <div className="w-full space-y-8 px-4 sm:px-3 xl:space-y-12">
          <section className="flex flex-col items-center gap-8">
            <h3 className="font-semibold md:text-2xl lg:text-3xl xl:text-5xl">
              Return made <span className="text-primary">Easy</span>
            </h3>
            <Image
              className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              src="/images/np_smiling_delivery_man.png"
              alt="checking order process"
              width={890}
              height={500}
            />

            <article className="max-w-lg text-center text-base  text-brand sm:text-lg md:text-2xl lg:max-w-7xl lg:text-3xl  xl:text-5xl">
              Your scheduled pickup is retrieved by us right from your door and
              on its way to an assigned courier.
            </article>
          </section>
        </div>
      </div>
      <CourierBanner />
    </>
  )
}

export default Home

Home.getLayout = getLayout
