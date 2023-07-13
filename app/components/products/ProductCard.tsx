'use client'
import { GrFormAdd } from 'react-icons/gr';
import Image from "next/image"
interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({imageSrc, title, price, category}) => {
  return (
    <div 
      className="col-span-1 cursor-pointer group"
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

          <div className='mt-2'>
            <button className="
              border
              border-primary
              text-primary
              rounded-full
              bg-white
              px-4
              py-1
              font-medium
              transition
              hover:bg-primary
              hover:text-white
              "
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard