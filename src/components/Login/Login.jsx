import { useState } from "react"

function Login({ setIsLoggedIn, setShowSignup }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {

    if (username === "" || password === "") {
      alert("Please enter username and password.")
      return
    }

    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">

      <div className="bg-white border rounded-xl p-8 w-96">

        <div className="text-center mb-6">

          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mx-auto">
            ET
          </div>

          <h1 className="text-2xl font-bold text-green-700 mt-4">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Login to your expense tracker
          </p>

        </div>


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


        <div className="mb-5">

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


        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Login
        </button>


        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?

          <span
            onClick={() => setShowSignup(true)}
            className="text-green-600 ml-1 cursor-pointer"
          >
            Sign Up
          </span>

        </p>

      </div>

    </div>
  )
}

export default Login