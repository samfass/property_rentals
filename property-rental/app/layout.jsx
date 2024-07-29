
 import '@/assets/styles/globals.css'
 import Navbar from '@/components/Navbar';
 import Footer from '@/components/Footer';
 

 export const metadata = {
    title:'RealStatePulse| Find the perfect rental',
    description:'Find your dream rental property',
    keyword:'rental, Find rental, Find property',
 };
const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Navbar/>
            <main>{children}</main> 
            <Footer/>
        </body>
    </html>
  )
}

export default MainLayout