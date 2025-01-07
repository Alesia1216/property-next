import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
        <h1 className='text-2xl text-violet-900 font-bold'>
            HomePage
        </h1>
        <Link href='/properties'>Link a Properties</Link>
    </div>
  )
}
