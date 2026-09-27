import { useState } from "react"

function TransactionList({ transactions, deleteTransaction }) {

  // Search box ko value
  const [search, setSearch] = useState("")

  // Category filter ko value
  const [categoryFilter, setCategoryFilter] = useState("All")

  // Date filter ko value
  const [dateFilter, setDateFilter] = useState("")

  // Sorting ko value
  const [sortOrder, setSortOrder] = useState("Latest")


  // Search ra filter garne
  let filteredTransactions = transactions.filter((transaction) => {

    // Description ra category lai safe banaeko
    const description = transaction.description || ""
    const category = transaction.category || ""
    const date = transaction.date || ""

    // Search check
    const searchMatch =
      description.toLowerCase().includes(search.toLowerCase()) ||
      category.toLowerCase().includes(search.toLowerCase())


    // Category check
    const categoryMatch =
      categoryFilter === "All" ||
      category === categoryFilter


    // Date check
    const dateMatch =
      dateFilter === "" ||
      date.startsWith(dateFilter)


    // Sabai condition true bhaye matra transaction dekhaucha
    return searchMatch && categoryMatch && dateMatch
  })


  // Transaction sort garne
  if (sortOrder === "Latest") {

    filteredTransactions.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })

  } else {

    filteredTransactions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  }


  return (
    <section
      id="transactions"
      className="bg-white border rounded-lg p-5"
    >

      <h2 className="text-xl font-bold">
        Transactions
      </h2>

      <p className="text-sm text-gray-500 mb-5">
        Your transactions.
      </p>


      {/* Search and filters */}

      <div className="grid gap-3 md:grid-cols-2 mb-5">

        {/* Search */}

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="border rounded-lg p-3"
        />


        {/* Category filter */}

        <select
          value={categoryFilter}
          onChange={(event) =>
            setCategoryFilter(event.target.value)
          }
          className="border rounded-lg p-3"
        >

          <option value="All">
            All Categories
          </option>

          <option value="Food">
            Food
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="Shopping">
            Shopping
          </option>

          <option value="Health">
            Health
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Utilities">
            Utilities
          </option>

          <option value="Salary">
            Salary
          </option>

          <option value="Others">
            Others
          </option>

        </select>


        {/* Date filter */}

        <input
          type="month"
          value={dateFilter}
          onChange={(event) =>
            setDateFilter(event.target.value)
          }
          className="border rounded-lg p-3"
        />


        {/* Sort */}

        <select
          value={sortOrder}
          onChange={(event) =>
            setSortOrder(event.target.value)
          }
          className="border rounded-lg p-3"
        >

          <option value="Latest">
            Latest First
          </option>

          <option value="Oldest">
            Oldest First
          </option>

        </select>

      </div>


      {/* Transaction table */}

      {filteredTransactions.length === 0 ? (

        <p className="text-center text-gray-500 p-5">
          No transactions found.
        </p>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>

              <tr className="border-b text-left">

                <th className="p-3">
                  Date
                </th>

                <th className="p-3">
                  Description
                </th>

                <th className="p-3">
                  Category
                </th>

                <th className="p-3">
                  Type
                </th>

                <th className="p-3">
                  Amount
                </th>

                <th className="p-3">
                  Delete
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredTransactions.map((transaction) => (

                <tr
                  key={transaction.id}
                  className="border-b"
                >

                  {/* Date */}

                  <td className="p-3">
                    {transaction.date || "No date"}
                  </td>


                  {/* Description */}

                  <td className="p-3">
                    {transaction.description || "No description"}
                  </td>


                  {/* Category */}

                  <td className="p-3">
                    {transaction.category || "No category"}
                  </td>


                  {/* Type */}

                  <td className="p-3">
                    {transaction.type || "Unknown"}
                  </td>


                  {/* Amount */}

                  <td
                    className={
                      transaction.type === "Income"
                        ? "p-3 text-green-600"
                        : "p-3 text-red-500"
                    }
                  >

                    {transaction.type === "Income"
                      ? "+"
                      : "-"
                    }

                    Rs.{" "}

                    {(transaction.amount || 0).toLocaleString()}

                  </td>


                  {/* Delete */}

                  <td className="p-3">

                    <button
                      onClick={() =>
                        deleteTransaction(transaction.id)
                      }
                      className="text-red-500"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </section>
  )
}

export default TransactionList