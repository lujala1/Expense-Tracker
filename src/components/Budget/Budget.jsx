function Budget({ transactions, budget }) {

  let highestSpending = null
  let recentIncome = null
  let recentExpense = null
  let totalExpenses = 0


  transactions.forEach((transaction) => {

    if (transaction.type === "Expense") {

      totalExpenses =
        totalExpenses + transaction.amount

      if (
        highestSpending === null ||
        transaction.amount > highestSpending.amount
      ) {
        highestSpending = transaction
      }

    }


    if (transaction.type === "Income") {

      if (
        recentIncome === null ||
        transaction.date > recentIncome.date
      ) {
        recentIncome = transaction
      }

    }


    if (transaction.type === "Expense") {

      if (
        recentExpense === null ||
        transaction.date > recentExpense.date
      ) {
        recentExpense = transaction
      }

    }

  })


  return (
    <section
      id="budget"
      className="bg-white border rounded-xl p-5"
    >

      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Budget Limit
      </h2>


      <div className="space-y-3">


        <div className="border rounded-xl p-4">

          <p className="text-sm text-gray-500">
            Highest Spending
          </p>

          <div className="flex justify-between mt-1">

            <span className="text-gray-700">
              {highestSpending
                ? highestSpending.category
                : "No expenses"}
            </span>

            <span className="font-medium text-green-600">
              Rs.{" "}
              {highestSpending
                ? highestSpending.amount.toLocaleString()
                : 0}
            </span>

          </div>

        </div>


        <div className="border rounded-xl p-4">

          <p className="text-sm text-gray-500">
            Most Recent Income
          </p>

          <div className="flex justify-between mt-1">

            <span className="text-gray-700">
              {recentIncome
                ? recentIncome.category
                : "No income"}
            </span>

            <span className="font-medium text-green-600">
              Rs.{" "}
              {recentIncome
                ? recentIncome.amount.toLocaleString()
                : 0}
            </span>

          </div>

        </div>


        <div className="border rounded-xl p-4">

          <p className="text-sm text-gray-500">
            Most Recent Expense
          </p>

          <div className="flex justify-between mt-1">

            <span className="text-gray-700">
              {recentExpense
                ? recentExpense.category
                : "No expenses"}
            </span>

            <span className="font-medium text-red-500">
              Rs.{" "}
              {recentExpense
                ? recentExpense.amount.toLocaleString()
                : 0}
            </span>

          </div>

        </div>


        {totalExpenses > budget && (

          <div className="border border-red-300 bg-red-50 rounded-xl p-4">

            <p className="text-red-600 font-medium">
              Budget exceeded!
            </p>

            <p className="text-sm text-red-500 mt-1">
              You have spent more than your budget.
            </p>

          </div>

        )}


      </div>

    </section>
  )
}

export default Budget