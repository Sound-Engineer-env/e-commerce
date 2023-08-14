'use client'
import { GrFormAdd } from 'react-icons/gr';
import Image from "next/image"
import Button from '../buttons/Button';
import { useRouter } from 'next/navigation';
interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({imageSrc, title, price, category}) => {
  const router = useRouter()
  return (
    <div 
      className="col-span-1 cursor-pointer group"
      onClick={()=> router.push(`/product-detail/`)}
    >
      <div className="flex flex-col gap-2 w-full shadow-xl rounded-2xl overflow-hidden bg-white">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden
          "
        >
          <Image
            fill
            style={{objectFit: "contain"}}
            className="
              object-cover 
              h-full 
              w-full
              transition
            "
            src={imageSrc}
            alt="Listing"
          />
        </div>
        <div className='mb-6 mx-5'>
          {/* <div className="my-3 rounded-full border border-primary w-fit px-3">
            <p className="text-primary text-sm">{category}</p>
          </div> */}
          
          <div className="flex justify-between text-xl">
            <p className="font-medium">${price}</p>
          </div>

          <div className='mb-1'>
            <p>{title}</p>
          </div>
          <br />
          <Button text="Agregar al carrito" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard