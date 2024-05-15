 import React, { Children } from 'react'
 import '@/assets/styles/globals.css';

 export const metadata = {
    title:'PropertyPulse| Find the perfect rental',
    description:'Find your dream rental property',
    keyword:'rental, Find rental, Find property',
 };
const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div>{children}</div> 
        </body>
    </html>
  )
}

export default MainLayout