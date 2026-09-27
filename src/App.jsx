import { useEffect, useState } from "react"

import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import BalanceCards from "./components/BalanceCards/BalanceCards"
import TransactionForm from "./components/TransactionForm/TransactionForm"
import SpendingChart from "./components/SpendingChart/SpendingChart"
import TransactionList from "./components/TransactionList/TransactionList"
import Budget from "./components/Budget/Budget"
import RecentActivity from "./components/RecentActivity/RecentActivity"
import Footer from "./components/Footer/Footer"


function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignup, setShowSignup] = useState(false)


  const [transactions, setTransactions] = useState(() => {

    const savedTransactions =
      localStorage.getItem("transactions")

    if (savedTransactions) {
      return JSON.parse(savedTransactions)
    }

    return [
      {
        id: 1,
        amount: 15000,
        type: "Income",
        category: "Salary",
        date: "2025-04-25",
        description: "Freelance Work"
      },
      {
        id: 2,
        amount: 500,
        type: "Expense",
        category: "Food",
        date: "2025-04-24",
        description: "Food"
      },
      {
        id: 3,
        amount: 300,
        type: "Expense",
        category: "Transport",
        date: "2025-04-22",
        description: "Bus"
      },
      {
        id: 4,
        amount: 10000,
        type: "Income",
        category: "Education",
        date: "2025-04-20",
        description: "Scholarship"
      }
    ]

  })


  useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    )

  }, [transactions])


  function addTransaction(transaction) {

    setTransactions([
      transaction,
      ...transactions
    ])

  }

  function deleteTransaction(id) {

    const newTransactions =
      transactions.filter(
        (transaction) =>
          transaction.id !== id
      )

    setTransactions(newTransactions)

  }


  let totalIncome = 0

  transactions.forEach((transaction) => {

    if (transaction.type === "Income") {

      totalIncome =
        totalIncome + transaction.amount

    }

  })

  let totalExpenses = 0

  transactions.forEach((transaction) => {

    if (transaction.type === "Expense") {

      totalExpenses =
        totalExpenses + transaction.amount

    }

  })


  const balance =
    totalIncome - totalExpenses

  const expenses =
    transactions.filter(
      (transaction) =>
        transaction.type === "Expense"
    )

  const budget = 25000
    if (!isLoggedIn) {

   if (showSignup) {
    return (
      <Signup
        setShowSignup={setShowSignup}
        setIsLoggedIn={setIsLoggedIn}
      />
    )
  }

  return (
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setShowSignup={setShowSignup}
    />
  )
}
  return (
    <>

      <Header setIsLoggedIn={setIsLoggedIn} />


      <div className="flex">

        <Sidebar />


        <main className="flex-1 p-6">

          {/* Dashboard */}

          <section id="dashboard">

            <h2 className="text-3xl font-bold">
              Good evening!
            </h2>

            <p className="text-gray-500 mt-1 mb-6">
              Manage your income and expenses.
            </p>


            <BalanceCards
              balance={balance}
              income={totalIncome}
              expenses={totalExpenses}
              budget={budget}
            />

          </section>


          {/* Main Content */}

          <div className="grid gap-6 mt-6 lg:grid-cols-2">


            {/* Add Transaction */}

            <TransactionForm
              addTransaction={addTransaction}
            />


            {/* Spending Chart */}

            <SpendingChart
              expenses={expenses}
            />


            {/* Transaction List */}

            <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />

            <Budget
              transactions={transactions}
              budget={budget}
            />


            {/* Recent Activity */}

            <RecentActivity
              transactions={transactions}
            />

          </div>

        </main>

      </div>


      <Footer />

    </>
  )
}


export default App