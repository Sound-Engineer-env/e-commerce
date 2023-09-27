'use client'
interface InputProps {
  id: string,
  label: string,
  type?: string,
  disabled?: boolean,
  required?: boolean,
}
const Input: React.FC<InputProps> = ({id, label, type, disabled, required}) => {
  return (
    <div className="w-full relative">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="off"
          placeholder="Buscar"
          className="
            px-5
            block
            w-full
            rounded-lg
            border-0
            py-2
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-black-100
            sm:leading-6
          "
        />
    </div>
  )
}

export default Input