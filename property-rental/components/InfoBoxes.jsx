import React from 'react'
import InfoBox from './InfoBox'
const InfoBoxes = () => {
  return (
    <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
           heading = 'For Renters'
           backgroundColor ='bg-gray-100'
           buttonInfo={{
            text:'Browse properties',
            link:'/properties',
            backgroundColor: "bg-black"
           }} 
          >
          Find your dream rental property. Bookmark properties and contact
          owners.
          </InfoBox>
        </div>
      </div>
    </section>

  )
}

export default InfoBoxes