'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Head({ className }: { className?: string }) {

  return (
    <header className='h-14 fixed border-b top-0 z-40 w-full bg-white shadow-xs'>
      <div className={`h-full px-8 flex justify-between items-center ${className}`}>
        <Link className='h-full flex items-center cursor-pointer' href='/'>
          <Image src='https://dh.870507.xyz/uploads/2026/5/26/5835cc31d4cf3cf8815f1ae7e2ba746c.png' alt='logo' width={55} height={38} priority />
          <div className='text-xl ml-2 font-bold font-mono text-primary'>磊记拾微</div>
        </Link>
        <div className='flex-1 flex items-center justify-between'>
          <div className='flex-1 flex items-center'>
          </div>
          <div className='h-full flex items-center justify-end'>
            <Button className='rounded-3xl'>
              <a href='https://blog.870507.xyz' target='_blank'>
                磊记拾微
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
