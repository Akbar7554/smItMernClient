import React from "react"
import { RiMoneyDollarBoxLine } from "react-icons/ri"
import { GoTriangleRight } from "react-icons/go"

const Pots = () => {
  return (
    <div className="shadow-2xl w-[500px] p-4 rounded-xl">
      <div className="flex justify-between p-4">
        <h1 className="text-black font-bold">Pots</h1>
        <div className="flex items-center gap-5">
          <button className="text-base">See Details </button>
          <GoTriangleRight />
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center gap-3">
            <div>
              <RiMoneyDollarBoxLine size={30} className="text-green-500" />
            </div>
            <div>
              <h2>Total Saved</h2>
              <p className="text-black text-2xl font-bold">$850</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div>
                <div></div>
                <div>
                  <h3>Savings</h3>
                  <p>$159</p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h3>Savings</h3>
                  <p>$159</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <div>
              <div></div>
              <div>
                <h3>Savings</h3>
                <p>$159</p>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <h3>Savings</h3>
                <p>$159</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Pots
