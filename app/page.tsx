import products from './mocks/products.json'
import ProductCard from './components/products/ProductCard'
import Container from './components/Container'
import { SwiperBanner } from './components/swiper/SwiperBanner'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Home() {
  return (
    <>
      <section className='my-4'>
        <Container>
          <ul className='flex justify-center gap-10'>
            <li className='flex items-center gap-1'>Home</li>
            <li className='flex items-center gap-1'>All</li>
            <li className='flex items-center gap-1'>Accesorios <MdKeyboardArrowDown /></li>
            <li className='flex items-center gap-1'>Tablas <MdKeyboardArrowDown /></li>
            <li className='flex items-center gap-1'>Ropa <MdKeyboardArrowDown /></li>
            <li className='flex items-center gap-1'>About us</li>
          </ul>
        </Container>
      </section>
      <hr />
      {/* Banner  */}
      <section className='my-4'>
        <Container>
          <SwiperBanner />
        </Container>
      </section>
      <main className='bg-slate-100'>
        <Container>
          <h2 className="text-3xl font-semibold mt-8">Todos los productos</h2>
          <div
            className="
              pt-8
              grid
              grid-cols-1
              xs:grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-4
              gap-8
              mb-20"
          >
            {
              products.results.map(product => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                />
              ))
            }
          </div>
        </Container>
      </main>
    </>
  )
}
