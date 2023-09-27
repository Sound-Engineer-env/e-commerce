'use client'

import Input from "../inputs/Input"


const Search = () => {
  return (
    <div className="sm:col-span-3">
      <div className="mt-2">
        <Input id="search" type="text" label="Search" />
      </div>
    </div>
  )
}

export default Search