interface ButtonProps {
  text: string
}
const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <div>
      <button className="
        border
        border-primary
        text-primary
        rounded-full
        px-4
        py-1
        font-medium
        transition
        hover:bg-primary
        hover:text-white
        "
      >
        {text}
      </button>
    </div>
  )
}

export default Button
