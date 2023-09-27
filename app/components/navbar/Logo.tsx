'use client'
import Image from 'next/image'

const Logo = () => {
  // const router = useRouter();

  return (
    <div className='flex'>
      <Image
        alt="Logo"
        className='hidden md:block cursor-pointer'
        height={10}
        width={100}
        src="/soulOnePeaceMan.png"
      />
      <Image
        alt="Logo"
        className='hidden md:block cursor-pointer'
        height={100}
        width={200}
        style={{objectFit: "contain"}}	
        src="/soulOneLetters.png"
      />
    </div>
  )
}

export default Logo