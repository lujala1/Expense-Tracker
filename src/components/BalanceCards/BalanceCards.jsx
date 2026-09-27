function BalanceCards({
  balance,
  income,
  expenses,
  budget
}) {

  const percentage = Math.round(
    (expenses / budget) * 100
  )


  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">


      <div className="bg-white border rounded-lg p-5">

        <p className="text-gray-500">
          Total Balance
        </p>

        <h2 className="text-2xl font-bold mt-2">
          Rs. {balance.toLocaleString()}
        </h2>

      </div>


      <div className="bg-white border rounded-lg p-5">

        <p className="text-gray-500">
          Total Income
        </p>

        <h2 className="text-2xl font-bold text-green-600 mt-2">
          Rs. {income.toLocaleString()}
        </h2>

      </div>


      <div className="bg-white border rounded-lg p-5">

        <p className="text-gray-500">
          Total Expenses
        </p>

        <h2 className="text-2xl font-bold text-red-500 mt-2">
          Rs. {expenses.toLocaleString()}
        </h2>

      </div>


      <div className="bg-white border rounded-lg p-5">

        <p className="text-gray-500">
          Monthly Budget
        </p>

        <h2 className="text-2xl font-bold mt-2">
          Rs. {budget.toLocaleString()}
        </h2>


        <div className="bg-gray-200 h-2 rounded mt-3">

          <div
            className="bg-green-600 h-2 rounded"
            style={{
              width: `${Math.min(percentage, 100)}%`
            }}
          ></div>

        </div>


        <p className="text-sm text-gray-500 mt-2">
          {percentage}% spent
        </p>

      </div>


    </div>
  )
}

export default BalanceCards