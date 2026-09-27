function RecentActivity({
  transactions
}) {

  const recentTransactions =
    transactions.slice(0, 4)


  return (
    <section className="bg-white border rounded-lg p-5">

      <h2 className="text-xl font-bold">
        Recent Activity
      </h2>


      <div className="mt-4 space-y-3">

        {recentTransactions.map(
          (transaction) => (

            <div
              key={transaction.id}
              className="border-b pb-3"
            >

              <p className="font-medium">
                {transaction.description ||
                  transaction.category}
              </p>


              <p className="text-sm text-gray-500">
                {transaction.date}
              </p>


              <p
                className={
                  transaction.type === "Income"
                    ? "text-green-600"
                    : "text-red-500"
                }
              >

                {transaction.type === "Income"
                  ? "+"
                  : "-"}

                Rs.{" "}
                {transaction.amount.toLocaleString()}

              </p>

            </div>

          )
        )}

      </div>

    </section>
  )
}

export default RecentActivity