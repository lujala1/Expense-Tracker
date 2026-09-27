import { useState } from "react"

function TransactionForm({ addTransaction }) {

  const [amount, setAmount] = useState("")
  const [type, setType] = useState("Expense")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")


  function handleSubmit(event) {

    event.preventDefault()


    if (
      amount === "" ||
      category === "" ||
      date === ""
    ) {
      alert("Please fill the required fields.")
      return
    }


    const transaction = {

      id: Date.now(),

      amount: Number(amount),

      type: type,

      category: category,

      date: date,

      description: description

    }


    addTransaction(transaction)


    setAmount("")
    setType("Expense")
    setCategory("")
    setDate("")
    setDescription("")
  }


  return (
    <section className="bg-white border rounded-lg p-5">

      <h2 className="text-xl font-bold">
        Add Transaction
      </h2>

      <p className="text-sm text-gray-500 mb-5">
        Add your income or expense.
      </p>


      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >


        <div>

          <label className="text-sm">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
            placeholder="Enter amount"
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>


        <div>

          <label className="text-sm">
            Type
          </label>


          <div className="grid grid-cols-2 gap-2 mt-1">

            <button
              type="button"
              onClick={() => setType("Income")}
              className={
                type === "Income"
                  ? "bg-green-600 text-white p-3 rounded-lg"
                  : "bg-gray-100 p-3 rounded-lg"
              }
            >
              Income
            </button>


            <button
              type="button"
              onClick={() => setType("Expense")}
              className={
                type === "Expense"
                  ? "bg-red-500 text-white p-3 rounded-lg"
                  : "bg-gray-100 p-3 rounded-lg"
              }
            >
              Expense
            </button>

          </div>

        </div>


        <div>

          <label className="text-sm">
            Category
          </label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="w-full border rounded-lg p-3 mt-1"
          >

            <option value="">
              Select category
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

        </div>


        <div>

          <label className="text-sm">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>


        <div>

          <label className="text-sm">
            Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Enter description"
            rows="3"
            className="w-full border rounded-lg p-3 mt-1"
          ></textarea>

        </div>


        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Add Transaction
        </button>


      </form>

    </section>
  )
}

export default TransactionForm