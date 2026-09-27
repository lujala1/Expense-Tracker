import { useState } from "react"

function Header() {
  const [showProfile, setShowProfile] = useState(false)

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })

  return (
    <header className="bg-white border-b px-6 py-4">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            ET
          </div>

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Personal Expense Tracker
            </h1>

            <p className="text-sm text-gray-500">
              Manage your money habits.
            </p>
          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Current Month
            </p>

            <p className="font-medium text-gray-700">
              {currentMonth}
            </p>

          </div>

          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold"
            >
              IL
            </button>

            {showProfile && (

              <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg p-2 z-10">

                <div className="px-3 py-2 border-b">

                  <p className="font-medium text-gray-800">
                    Isha Lujala
                  </p>

                  <p className="text-xs text-gray-500">
                    Personal Account
                  </p>

                </div>

                <button className="w-full text-left px-3 py-2 mt-1 rounded hover:bg-gray-50">
                  Profile
                </button>

                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">
                  Settings
                </button>

                <button className="w-full text-left px-3 py-2 rounded text-red-500 hover:bg-red-50">
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header