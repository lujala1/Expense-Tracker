function Sidebar() {

  function goToSection(id) {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (
    <aside className="hidden lg:block w-56 bg-white border-r min-h-screen p-5">

      <h2 className="text-xl font-bold text-green-700 mb-8">
        Expense Tracker
      </h2>


      <div className="space-y-2">

        <button
          onClick={() => goToSection("dashboard")}
          className="w-full text-left p-3 rounded-lg bg-green-50 text-green-700"
        >
          Dashboard
        </button>


        <button
          onClick={() => goToSection("transactions")}
          className="w-full text-left p-3 rounded-lg hover:bg-green-50"
        >
          Transactions
        </button>


        <button
          onClick={() => goToSection("charts")}
          className="w-full text-left p-3 rounded-lg hover:bg-green-50"
        >
          Charts
        </button>


        <button
          onClick={() => goToSection("budget")}
          className="w-full text-left p-3 rounded-lg hover:bg-green-50"
        >
          Budget
        </button>

      </div>

    </aside>
  )
}

export default Sidebar