import React from 'react'
import Link from 'next/link'

export default function InfoBox(
    {
        heading,
        children,
        buttonInfo,
        textColor='text-gray-800',
        backgroundColor

    }:{
        heading: string;
        children: React.ReactNode;
        buttonInfo: {text: string; link: string; backgroundColor: string};
        textColor?: string;
        backgroundColor: string;
    }
) {
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
        <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
        <p className="mt-2 mb-4">
            {children}
        </p>
        <Link
            href="{buttonInfo.link}"
            className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${buttonInfo.backgroundColor}`}
            >
            {buttonInfo.text}
        </Link>
  </div>
  )
}
