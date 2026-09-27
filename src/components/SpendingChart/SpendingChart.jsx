import { useState } from "react"

function SpendingChart({ expenses }) {

  const [selectedMonth, setSelectedMonth] =
    useState("This Month")


  let currentDate = new Date()

  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()

  let lastMonth = currentMonth - 1
  let lastMonthYear = currentYear

  if (lastMonth < 0) {
    lastMonth = 11
    lastMonthYear = currentYear - 1
  }


  let filteredExpenses = expenses.filter(
    (transaction) => {

      let transactionDate =
        new Date(transaction.date)

      let transactionMonth =
        transactionDate.getMonth()

      let transactionYear =
        transactionDate.getFullYear()


      if (selectedMonth === "This Month") {

        return (
          transactionMonth === currentMonth &&
          transactionYear === currentYear
        )

      } else {

        return (
          transactionMonth === lastMonth &&
          transactionYear === lastMonthYear
        )

      }

    }
  )


  let categoryTotals = {}

  filteredExpenses.forEach((transaction) => {

    if (categoryTotals[transaction.category]) {

      categoryTotals[transaction.category] =
        categoryTotals[transaction.category] +
        transaction.amount

    } else {

      categoryTotals[transaction.category] =
        transaction.amount

    }

  })


  let total = 0

  filteredExpenses.forEach((transaction) => {
    total = total + transaction.amount
  })


  return (
    <section
      id="charts"
      className="bg-white border rounded-xl p-5"
    >

      <div className="flex justify-between items-center mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Spending by Category
          </h2>

          <p className="text-sm text-gray-500">
            See where your money is going.
          </p>
        </div>

        <select
          value={selectedMonth}
          onChange={(event) =>
            setSelectedMonth(event.target.value)
          }
          className="border rounded-lg px-3 py-2 text-sm text-gray-600"
        >
          <option>This Month</option>
          <option>Last Month</option>
        </select>

      </div>


      {Object.keys(categoryTotals).length === 0 ? (

        <p className="text-gray-500">
          No expenses yet.
        </p>

      ) : (

        <div className="space-y-5">

          {Object.keys(categoryTotals).map(
            (category) => {

              const amount =
                categoryTotals[category]


              const percentage =
                Math.round(
                  (amount / total) * 100
                )


              return (

                <div key={category}>

                  <div className="flex justify-between text-sm mb-2">

                    <span className="font-medium text-gray-700">
                      {category}
                    </span>

                    <span className="text-gray-500">
                      Rs. {amount.toLocaleString()} ({percentage}%)
                    </span>

                  </div>


                  <div className="bg-gray-200 h-3 rounded-full">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width: `${percentage}%`
                      }}
                    ></div>

                  </div>

                </div>

              )
            }
          )}

        </div>

      )}

    </section>
  )
}

export default SpendingChart