import Sidebar from "./pages/Sidebar"
import CurrentBalance from "./pages/CurrentBalance"
import Income from "./pages/Income"
import Expenses from "./pages/Expenses"
import Pots from "./pages/Pots"
import Transactions from "./pages/Transactions"
import Budgets from "./pages/Budgets"
import RecurringBills from "./pages/RecurringBills"

function App() {
  return (
    <div className="flex bg-[#fffdfc] h-screen gap-10">
      <div>
        <Sidebar />
      </div>
      <div className="bg-[#fffdfc] w-auto">
        <h1>Overview</h1>
        <div className="flex w-full gap-4">
          <div>
            <CurrentBalance />{" "}
          </div>
          <div>
            <Income />{" "}
          </div>
          <div>
            <Expenses />
          </div>
        </div>
        <div>
          <div>
            <div>
              <Pots />
            </div>
            <div>
              <Transactions />
            </div>
          </div>
          <div >
            <div>
              <Budgets />
            </div>
            <div>
              <RecurringBills />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
