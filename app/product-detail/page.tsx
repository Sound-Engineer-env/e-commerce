'use client'
import Image from "next/image";
import Container from "../components/Container";
import Button from "../components/buttons/Button";
import { useState } from "react";

export default function HomePage () {

  const [ total, setTotal ] = useState(1)

  const setAmount = () => {
    
  }

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 my-10">
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
          <br />
          <hr />
          <br />
          <p>Descriptions:</p>
          <p className="text-slate-500">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <br />
          <hr />
          <br />
          <div className="flex items-center">
            <div className="h-fit border border-slate-300 rounded-md flex items-center mr-2">
              <div
                className="px-3 text-2xl"
                onClick={() => setTotal((value) => value - 1)}
              >
                -
              </div>
              <div className="px-2 py-1">{total}</div>
              <div
                className="px-3 text-2xl"
                onClick={() => setTotal((value) => value + 1)}
              >
                +
              </div>
            </div>
            <Button text="Agregar al carrito" />
          </div>
        </div>
      </div>
    </Container>
  )
}
