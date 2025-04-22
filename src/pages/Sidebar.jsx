import { IoMdHome } from "react-icons/io"
import { AiOutlineTransaction } from "react-icons/ai"
import { RiProgress6Fill } from "react-icons/ri"
import { FaPrescriptionBottleMedical } from "react-icons/fa6"
import { RiBillFill } from "react-icons/ri"
import React from "react"
import { NavLink } from "react-router"

const Sidebar = () => {
  return (
    <div className="bg-black min-h-screen w-[250px] text-center rounded-r-2xl">
      <h1 className="text-2xl text-white mb-10 pt-5">finance</h1>
      <div className="text-center mr-8">
        <ul className="list-none text-white">
          <div className="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-r-lg hover:bg-slate-200 hover:text-black">
            <IoMdHome className="hover:text-green-400" size={25} />
            <li className="text-lg text-bold">Overview</li>
          </div>
          <div className="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-r-lg hover:bg-slate-200 hover:text-black">
            <AiOutlineTransaction className="hover:text-green-400" size={25} />
            <li className="text-lg text-bold">Transactions</li>
          </div>
          <div className="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-r-lg hover:bg-slate-200 hover:text-black">
            <RiProgress6Fill className="hover:text-green-400" size={25} />
            <li className="text-lg text-bold">Budgets</li>
          </div>
          <div className="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-r-lg hover:bg-slate-200 hover:text-black">
            <FaPrescriptionBottleMedical
              className="hover:text-green-400"
              size={25}
            />
            <li className="text-lg text-bold">Pots</li>
          </div>
          <div className="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-r-lg hover:bg-slate-200 hover:text-black">
            <RiBillFill className="hover:text-green-400" size={25} />
            <li className="text-lg text-bold">Recurring Bills</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
