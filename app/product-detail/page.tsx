import Image from "next/image";
import Container from "../components/Container";

export default function HomePage () {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="col-span-2">
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
              src={"https://res.cloudinary.com/dnzesrac8/image/upload/v1687387514/soul-one-shop/madera-dummy-1_guvgbi.png"}
              alt="Listing"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl">Shortys Chicana</h1>
          <br />
          <h2 className="text-3xl">$87.000</h2>
        </div>
      </div>
    </Container>
  )
}
