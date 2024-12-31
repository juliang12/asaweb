import { TbDog } from "react-icons/tb"

interface DropdownMenuProps {
    title: string
    options: { title: string, href: string }[]
}

const DropdownMenu = ({title, options}: DropdownMenuProps) => {
  return (
    <div className="relative group">
    <button className=" flex  items-center gap-1 py-2 text-gray-800 focus:outline-none">
      {title} <TbDog/>
    </button>

    <div className="hidden absolute top-[30px] right-20px mt-2 w-48 bg-white border border-gray-300 shadow-lg z-10 group-hover:block">
        {options.map(opt => (
      <a
        href={opt.href}
        className="block px-4 py-4 text-gray-800 hover:bg-gray-200"
      >
       {opt.title}
      </a>
        ))}
    </div>
  </div>
  )
}

export default DropdownMenu