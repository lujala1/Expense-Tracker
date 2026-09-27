import { useState } from "react"

function Header({ setIsLoggedIn }) {

  // Shows or hides the profile dropdown
  const [showProfile, setShowProfile] = useState(false)

  // Shows or hides the logout popup
  const [showLogout, setShowLogout] = useState(false)

  // Get current month
  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })


  // Logout function
  function handleLogout() {
    setIsLoggedIn(false)
    setShowLogout(false)
    setShowProfile(false)
  }


  return (
    <header className="bg-white border-b px-6 py-4">

      <div className="flex justify-between items-center">


        {/* LEFT SIDE */}

        <div className="flex items-center gap-3">

          {/* App logo */}

          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            ET
          </div>


          {/* App name */}

          <div>

            <h1 className="text-2xl font-bold text-green-700">
              Personal Expense Tracker
            </h1>

            <p className="text-sm text-gray-500">
              Manage your money habits.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-5">


          {/* Current month */}

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Current Month
            </p>

            <p className="font-medium text-gray-700">
              {currentMonth}
            </p>

          </div>


          {/* PROFILE */}

          <div className="relative">


            {/* Profile circle */}

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold"
            >
              IL
            </button>


            {/* Profile dropdown */}

            {showProfile && (

              <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg p-2 z-10">


                {/* User name */}

                <div className="px-3 py-2 border-b">

                  <p className="font-medium text-gray-800">
                    Isha Lujala
                  </p>

                  <p className="text-xs text-gray-500">
                    Personal Account
                  </p>

                </div>


                {/* Profile button */}

                <button
                  className="w-full text-left px-3 py-2 mt-1 rounded hover:bg-gray-50"
                >
                  Profile
                </button>


                {/* Settings button */}

                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-50"
                >
                  Settings
                </button>


                {/* Logout button */}

                <button
                  onClick={() => setShowLogout(true)}
                  className="w-full text-left px-3 py-2 rounded text-red-500 hover:bg-red-50"
                >
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* LOGOUT POPUP */}

      {showLogout && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">


          {/* Popup box */}

          <div className="bg-green-50 text-gray-800 w-96 rounded-2xl p-8 shadow-xl">


            {/* Popup title */}

            <h2 className="text-2xl font-bold text-center mb-6">

              Are you sure you

              <br />

              want to log out?

            </h2>


            {/* User information */}

            <div className="border border-gray-300 rounded-xl p-4 flex items-center gap-3 mb-6">


              {/* User circle */}

              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                IL
              </div>


              {/* User name */}

              <div>

                <p className="font-semibold">
                  Isha Lujala
                </p>

              </div>

            </div>


            {/* LOG OUT BUTTON */}

            <button
              onClick={handleLogout}
              className="w-full bg-green-600 text-white py-3 rounded-full font-semibold mb-3 hover:bg-green-700"
            >
              Log out
            </button>


            {/* CANCEL BUTTON */}

            <button
              onClick={() => setShowLogout(false)}
              className="w-full border border-gray-300 text-gray-800 py-3 rounded-full font-semibold hover:bg-white"
            >
              Cancel
            </button>

          </div>

        </div>

      )}

    </header>
  )
}

export default Header