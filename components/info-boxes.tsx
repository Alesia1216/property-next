import React from 'react'
import Link from 'next/link'
import InfoBox from './info-box'

export default function InfoBoxes() {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox 
            backgroundColor='bg-gray-100'
            buttonInfo={
                {
                    text: 'Browse Properties',
                    link: '/properties',
                    backgroundColor: 'bg-black'
                }
            }
            heading='For Renters'> 
            Find your dream rental property. Bookmark properties and contact owners.
          </InfoBox>
          <InfoBox 
            backgroundColor='bg-blue-100'
            buttonInfo={
                {
                    text: 'Add Property',
                    link: '/properties/add',
                    backgroundColor: 'bg-blue-500'
                }
            }
            heading='For Property Owners'> 
             List your properties and reach potential tenants. Rent as an airbnb or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  )
}
