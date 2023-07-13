import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import Image from "next/image"
import Container from './components/Container'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })



export const metadata = {
  title: 'Soul One Skateshop',
  description: 'SkateShop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />

        <div className="">
          {children}
        </div>
        <footer className='bg-gradient-to-r from-[#0A0010] to-[#1A002C] py-7'>
        {/* <footer className='bg-white'> */}
          <Container>
            <div className='grid grid-cols-12 gap-5'>
              <div className="mt-[-50px] col-span-4">
                <Image
                  src="/logo-footer.png"
                  alt="footer logo"
                  height={100}
                  width={400}
                  style={{objectFit: "contain"}}	
                />
              </div>
              <div className="text-white text-center col-span-4 flex justify-center items-center flex-col">
                <h5 className="text-xl mb-2">Síguenos en</h5>
                <div className='flex gap-4'>
                  <button>
                    <AiOutlineWhatsApp size={34} />
                  </button>
                  <button>
                    <AiOutlineInstagram size={34} />
                  </button>
                  <button>
                    <AiOutlineFacebook size={34} />
                  </button>
                </div>
              </div>
              <div className='text-white col-span-4'>
                <p className='text-xl mb-3'>Contáctanos</p>
                <form className='flex flex-col gap-5'>
                  <input type="text" placeholder='Email' className='rounded-md px-3 py-2 bg-[#F1F5F9]' />
                  <textarea className="px-3 py-2 rounded-md bg-[#F1F5F9]" placeholder='Mensaje' name="Mensaje"></textarea>
                </form>
              </div>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}
