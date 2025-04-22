import React from "react"
import { GoTriangleRight } from "react-icons/go"
import { CgProfile } from "react-icons/cg"

const Transactions = () => {
  return (
    <div className="shadow-2xl w-[500px] p-4 rounded-xl">
      {/* 1st section */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl text-black font-bold">Transactions</h1>
        </div>
        <div className="flex items-center">
          <button className="text-base">View All</button>
          <GoTriangleRight className="text-sm" size={20} />
        </div>
      </div>
      {/* 2nd Section */}
      <div>
        <ul>
          <li className="flex justify-between my-3">
            {/* Inner section one  */}
            <div className="flex items-center gap-3">
              <CgProfile size={30} />
              <h3 className="font-bold text-black text-lg">Emma Richardson</h3>
            </div>
            {/* Inner Section Two */}
            <div>
              <h2 className="text-green-600 font-bold text-lg">+$75.50</h2>
              <h4 className="text-base text-slate-600">19 Aug 2024</h4>
            </div>
          </li>
          <hr />
          <li className="flex justify-between my-3">
            {/* Inner section one  */}
            <div className="flex items-center gap-3">
              <CgProfile size={30} />
              <h3 className="font-bold text-black text-lg">
                Savory Bites Bistro
              </h3>
            </div>
            {/* Inner Section Two */}
            <div>
              <h2 className="text-slate-700 font-bold text-lg">-$55.50</h2>
              <h4 className="text-base text-slate-600">19 Aug 2024</h4>
            </div>
          </li>
          <hr />
          <li className="flex justify-between my-3">
            {/* Inner section one  */}
            <div className="flex items-center gap-3">
              <CgProfile size={30} />
              <h3 className="font-bold text-black text-lg">Daniel Carter</h3>
            </div>
            {/* Inner Section Two */}
            <div>
              <h2 className="text-slate-700 font-bold text-lg">-$42.30</h2>
              <h4 className="text-base text-slate-600">18 Aug 2024</h4>
            </div>
          </li>
          <hr />
          <li className="flex justify-between my-3">
            {/* Inner section one  */}
            <div className="flex items-center gap-3">
              <CgProfile size={30} />
              <h3 className="font-bold text-black text-lg">Sun Park</h3>
            </div>
            {/* Inner Section Two */}
            <div>
              <h2 className="text-green-600 font-bold text-lg">+$120.00</h2>
              <h4 className="text-base text-slate-600">17 Aug 2024</h4>
            </div>
          </li>
          <hr />
          <li className="flex justify-between my-3">
            {/* Inner section one  */}
            <div className="flex items-center gap-3">
              <CgProfile size={30} />
              <h3 className="font-bold text-black text-lg">
                Urban Services Hub
              </h3>
            </div>
            {/* Inner Section Two */}
            <div>
              <h2 className="text-green-600 font-bold text-lg">-$65.50</h2>
              <h4 className="text-base text-slate-600">17 Aug 2024</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Transactions
