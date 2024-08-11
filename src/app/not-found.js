import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
// import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6'>
      {/* <ExclamationCircleIcon className='h-16 w-16 text-red-500 mb-4' /> */}
      <h1 className='text-4xl font-extrabold text-gray-800 mb-4'>
        Oops! Page Not Found
      </h1>
      <p className='text-lg text-gray-600 mb-6'>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href='/'>
        <Button className='bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300'>
          Go to the Homepage
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
