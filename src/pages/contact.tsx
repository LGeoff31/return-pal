import React from 'react'
import ContactForm from '@/components/ContactForm/ContactForm'
import Image from 'next/image'

function Contact() {
  return (
    <div className="bg-paleBule h-screen w-screen pl-10 pt-24">
      <div className="flex max-w-lg flex-col">
        <h2 className="text-subtitle relative">
          <span className="mr-2 font-thin text-black">CONTACT</span>
          <span className="from-gradientL bg-gradient-to-r to-primary bg-clip-text font-bold text-transparent">
            US
          </span>
        </h2>
        <ContactForm />

        <Image
          className=" mt-4 self-center"
          src="/images/robot.png"
          alt="Contact Us"
          width={160}
          height={160}
        />
      </div>
      <Image
        className="mt-8"
        src="/images/navbar-logo-transparent.png"
        alt="Contact Us"
        width={160}
        height={0}
      />
    </div>
  )
}

export default Contact
