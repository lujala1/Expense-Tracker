import { useState } from "react"

function Signup({ setShowSignup, setIsLoggedIn }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  function handleSignup() {

    // Check empty fields
    if (username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.")
      return
    }


    // Check password
    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      return
    }


    // If everything is correct
    setIsLoggedIn(true)
  }


  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">

      <div className="bg-white border rounded-xl p-8 w-96">


        {/* Heading */}

        <div className="text-center mb-6">

          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mx-auto">
            ET
          </div>

          <h1 className="text-2xl font-bold text-green-700 mt-4">
            Create Account
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Create your expense tracker account
          </p>

        </div>


        {/* Username */}

        <div className="mb-4">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            className="w-full border rounded-lg px-3 py-2"
          />

        </div>


        {/* Password */}

        <div className="mb-4">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded-lg px-3 py-2"
          />

        </div>


        {/* Confirm Password */}

        <div className="mb-5">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm your password"
            className="w-full border rounded-lg px-3 py-2"
          />

        </div>


        {/* Sign Up button */}

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Sign Up
        </button>


        {/* Login */}

        <p className="text-center text-sm text-gray-500 mt-5">

          Already have an account?

          <span
            onClick={() => setShowSignup(false)}
            className="text-green-600 ml-1 cursor-pointer"
          >
            Login
          </span>

        </p>

      </div>

    </div>
  )
}

export default Signup